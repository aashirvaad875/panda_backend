import { VOFormatException } from '../errors/vo-format.exception';
import { ValueObject } from './value-object';

export class DateValueObject extends ValueObject<Date> {
  public equals(valueObject: DateValueObject): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: Date): void {
    if (value.getTime() > new Date().getTime())
      throw new VOFormatException(`${DateValueObject.name} does not allow the value ${this.value}`);
  }
}
