import { v4 as uuid } from 'uuid';
import validate from 'uuid-validate';
import { ValueObject } from './value-object';
import { VOFormatException } from '../errors/vo-format.exception';

export class Uuid extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidUuid(value);
  }

  static random(): Uuid {
    return new Uuid(uuid());
  }

  private ensureIsValidUuid(value: string): void {
    if (!validate(value)) {
      throw new VOFormatException(`${Uuid.name} does not allow the value ${this.value}`);
    }
  }
}

// import uuid from 'uuid-random';
// import { ValueObject } from './ValueObject';
// import { InvalidArgumentError } from './InvalidArgumentError';
// export class Uuid extends ValueObject<string> {
//   public equals(valueObject: Uuid): boolean {
//     return valueObject.value === this.value;
//   }

//   protected assertIsValid(value: string): void {
//     if (!uuid.test(value)) throw new InvalidArgumentError(`${Uuid.name} does not allow the value ${this.value}`);
//   }
// }
