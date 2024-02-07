import { InvalidArgumentError } from './InvalidArgumentError';
import { ValueObject } from './ValueObject';

export class DateValueObject extends ValueObject<Date> {
  public equals(valueObject: DateValueObject): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: Date): void {
    if (value.getTime() > new Date().getTime())
      throw new InvalidArgumentError(`${DateValueObject.name} ${JSON.stringify(value)}`);
  }
}
