import { v4 as uuid } from 'uuid';
import validate from 'uuid-validate';
import { InvalidArgumentError } from './InvalidArgumentError';
import { ValueObject } from './ValueObject';

export class Uuid extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidUuid(value);
  }

  static random(): Uuid {
    return new Uuid(uuid());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`${Uuid.name} does not allow the value ${this.value}`);
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
