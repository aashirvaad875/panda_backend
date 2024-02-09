/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router, Request, Response, NextFunction } from 'express';
import container from '../dependency-injection';
import { validateReqSchema } from '.';
import { EventCreateDTO } from '../../../../Contexts/Panda/EventsCategory/infrastructure/dtos/event-create-dto';

export const register = (router: Router) => {
  const EventCategoryController = container.get('Apps.Panda.Backend.Controllers.EventCategoryPostController');

  router.post('/event/category', EventCreateDTO, validateReqSchema, (req: Request, res: Response, next: NextFunction) =>
    EventCategoryController.run(req, res, next)
  );
};
