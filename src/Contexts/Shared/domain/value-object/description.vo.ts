import { MESSAGE_CODES } from '../../infrastructure/utils/messagecode';
import { HTTP422Error } from '../errors/http.exception';
import { ValueObject } from './value-object';

export class DescriptionVO extends ValueObject<string> {
  public equals(valueObject: DescriptionVO): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: string): void {
    if (!(value.length > 10)) throw new HTTP422Error(MESSAGE_CODES.SHARED.INVALID_DESCRIPTION);
  }
}
