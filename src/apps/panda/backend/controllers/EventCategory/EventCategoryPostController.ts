/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, type NextFunction } from 'express';
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

  async run(req: EventCategoryPostRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { description, id, name } = req.body;

      await this.EventCategoryCreator.execute({
        id,
        name,
        description
      });
      res.status(httpStatus.CREATED).send();
    } catch (error) {
      next(error);
    }
  }
}
