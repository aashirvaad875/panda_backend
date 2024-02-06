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
export class CoursePutController implements Controller {
  constructor(private courseCreator: EventCategoryCreator) {}

  async run(req: EventCategoryPostRequest, res: Response) {
    try {
      const { id, name, description } = req.body;
      await this.courseCreator.run({ id, name, description });
      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
