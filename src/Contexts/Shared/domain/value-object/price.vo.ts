import { MESSAGE_CODES } from '../../infrastructure/utils/messagecode';
import { HTTP422Error } from '../errors/http.exception';
import { ValueObject } from './value-object';

export class PriceVO extends ValueObject<number> {
  public equals(valueObject: PriceVO): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: number): void {
    if (!(Number(value) === value)) throw new HTTP422Error(MESSAGE_CODES.SHARED.INVALID_PRICE);
  }
}
