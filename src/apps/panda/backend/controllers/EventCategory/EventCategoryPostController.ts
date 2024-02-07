import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import { EventCategoryCreator } from '../../../../../Contexts/Panda/EventsCategory/application/EventCategoryCreator';

type EventCategoryPostRequest = Request & {
  body: {
    id: string;
    name: string;
    description: string;
  };
};
export class EventCategoryPostController implements Controller {
  constructor(private EventCategoryCreator: EventCategoryCreator) {}

  async run(req: EventCategoryPostRequest, res: Response) {
    try {
      const { id, name, description } = req.body;
      const data = await this.EventCategoryCreator.run({ id, name, description });
      console.log(data);

      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
