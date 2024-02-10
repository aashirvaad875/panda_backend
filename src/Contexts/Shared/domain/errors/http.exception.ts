import httpStatus from 'http-status';
import { MESSAGE_CODES } from '../../infrastructure/utils/messagecode';

/* eslint-disable @typescript-eslint/no-base-to-string */
export class HTTPClientError extends Error {
  readonly statusCode!: number;

  errors?: any[];

  protected constructor(message: object | string) {
    super(message.toString());
    Object.setPrototypeOf(this, HTTPClientError.prototype);
  }
}

export class HTTP422Error extends HTTPClientError {
  readonly statusCode = httpStatus.UNPROCESSABLE_ENTITY;

  constructor(message: string | object = MESSAGE_CODES.UNPROCESSABLE_ENTITY, errors: any[] | undefined = undefined) {
    super(message);
    this.errors = errors;
  }
}
export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404;

  constructor(message: string | object = MESSAGE_CODES.NOT_FOUND) {
    super(message);
  }
}
