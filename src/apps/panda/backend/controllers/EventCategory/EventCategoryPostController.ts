/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import { EventCategoryCreator } from '../../../../../Contexts/Panda/EventsCategory/application/EventCategoryCreator';
import { EventCreateDTO } from '../../../../../Contexts/Panda/EventsCategory/infrastructure/dtos/event-create-dto';

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
      const requestData: EventCreateDTO = req.body;

      await this.EventCategoryCreator.execute({
        id: requestData.id,
        name: requestData.name,
        description: requestData.description
      });

      res.status(httpStatus.CREATED).send();
    } catch (error) {
      console.log(error);

      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
