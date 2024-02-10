import { body } from 'express-validator';
import { MESSAGE_CODES } from '../../../../Shared/infrastructure/utils/messagecode';

export const EventCreateDTO = [
  body('id')
    .exists()
    .withMessage(MESSAGE_CODES.EVENT_CATEGORY.INVALID_EVENT_CATEGORY_ID)
    .isString()
    .withMessage(MESSAGE_CODES.EVENT_CATEGORY.CATEGORY_ID_MUST_BE_STRING),
  body('name').exists(),
  body('description').exists().isString()
];
