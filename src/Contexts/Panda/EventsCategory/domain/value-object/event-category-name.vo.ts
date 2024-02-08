import { EventCategoryNameLengthExceeded } from './event-category-name-length-exceeded.vo';
import { StringValueObject } from '../../../../Shared/domain/value-object/string-value-object.vo';

export class EventCategoryName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan30Characters(value);
  }

  private ensureLengthIsLessThan30Characters(value: string): void {
    if (value.length > 30) {
      throw new EventCategoryNameLengthExceeded(`The Event Category Name <${value}> has more than 30 characters`);
    }
  }
}
