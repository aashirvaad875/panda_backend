import { MESSAGE_CODES } from '../../infrastructure/utils/messagecode';
import { HTTP422Error } from '../errors/http.exception';
import { ValueObject } from './value-object';

export class DateVO extends ValueObject<Date> {
  public equals(valueObject: DateVO): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new HTTP422Error(MESSAGE_CODES.SHARED.INVALID_DATE);
  }
}
