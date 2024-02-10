// import { v4 as uuid } from 'uuid';
// import validate from 'uuid-validate';
// import { ValueObject } from './value-object';
// import { VOFormatException } from '../errors/vo-format.exception';
// import httpStatus from 'http-status';

// export class Uuid extends ValueObject<string> {
//   constructor(value: string) {
//     super(value);
//     this.ensureIsValidUuid(value);
//   }

//   static random(): Uuid {
//     return new Uuid(uuid());
//   }

//   private ensureIsValidUuid(value: string): void {
//     if (!validate(value)) {
//       throw new VOFormatException(
//         `${Uuid.name} does not allow the value ${this.value}`,
//         httpStatus.UNPROCESSABLE_ENTITY
//       );
//     }
//   }
// }

import { MESSAGE_CODES } from '../../infrastructure/utils/messagecode';
import { HTTP422Error } from '../errors/http.exception';
import { ValueObject } from './value-object';
import uuid from 'uuid-random';

export class UuidVO extends ValueObject<string> {
  public equals(valueObject: UuidVO): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: string): void {
    if (!uuid.test(value)) throw new HTTP422Error(MESSAGE_CODES.SHARED.INVALID_ID);
  }
}
