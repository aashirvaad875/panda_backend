import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('description').exists().isString()
  ];
  const EventCategoryController = container.get('Apps.Panda.Backend.Controllers.EventCategoryPostController');
  router.post('/event/category', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    EventCategoryController.run(req, res)
  );
};
