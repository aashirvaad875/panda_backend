import { body } from 'express-validator';

export const EventCreateDTO = [
  body('id').exists().isString(),
  body('name').exists().isString(),
  body('description').exists().isString()
];
