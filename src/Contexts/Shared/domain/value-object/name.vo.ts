import { MESSAGE_CODES } from '../../infrastructure/utils/messagecode';
import { HTTP422Error } from '../errors/http.exception';
import { ValueObject } from './value-object';
const NAME_REGEX = /^[a-zA-Z]*$/;

export class NameVO extends ValueObject<string> {
  public equals(valueObject: NameVO): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: string): void {
    if (value.length < 3 || !NAME_REGEX.test(value)) throw new HTTP422Error(MESSAGE_CODES.SHARED.INVALID_NAME);
  }
}
