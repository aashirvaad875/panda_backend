import { MESSAGE_CODES } from '../../infrastructure/utils/messagecode';
import { HTTP422Error } from '../errors/http.exception';
import { ValueObject } from './value-object';

export class QuantityVO extends ValueObject<number> {
  public equals(valueObject: QuantityVO): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: number): void {
    if (!(value % 1 === 0)) throw new HTTP422Error(MESSAGE_CODES.SHARED.INVALID_QUANTITY);
  }
}
