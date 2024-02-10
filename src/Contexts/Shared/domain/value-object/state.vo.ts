import { MESSAGE_CODES } from '../../infrastructure/utils/messagecode';
import { HTTP422Error } from '../errors/http.exception';
import { ValueObject } from './value-object';

export class StateVO extends ValueObject<boolean> {
  public equals(valueObject: StateVO): boolean {
    return valueObject.value === this.value;
  }

  protected assertIsValid(value: boolean): void {
    if (typeof value !== 'boolean') throw new HTTP422Error(MESSAGE_CODES.SHARED.INVALID_STATE);
  }
}
