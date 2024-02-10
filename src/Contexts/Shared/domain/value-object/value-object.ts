// /* eslint-disable @typescript-eslint/no-base-to-string */
// import httpStatus from 'http-status';
// import { VOFormatException } from '../errors/vo-format.exception';

// export type Primitives = String | string | number | Boolean | boolean | Date;

// export abstract class ValueObject<T extends Primitives> {
//   readonly value: T;

//   constructor(value: T) {
//     this.value = value;
//     this.ensureValueIsDefined(value);
//   }

//   private ensureValueIsDefined(value: T): void {
//     if (value === null || value === undefined) {
//       throw new VOFormatException(`Value must be defined`, httpStatus.UNPROCESSABLE_ENTITY);
//     }
//   }

//   equals(other: ValueObject<T>): boolean {
//     return other.constructor.name === this.constructor.name && other.value === this.value;
//   }

//   toString(): string {
//     return this.value.toString();
//   }
// }

export abstract class ValueObject<T> {
  constructor(public readonly value: T) {
    this.assertIsValid(value);
  }

  public abstract equals(valueObject: ValueObject<T>): boolean;

  protected abstract assertIsValid(value: T): void;
}
