import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { EventCategoryDescription } from './EventCategoryDescription';
import { EventCategoryId } from './EventCategoryId';
import { EventCategoryName } from './EventCategoryName';

export class EventCategory extends AggregateRoot {
  readonly id: EventCategoryId;
  readonly name: EventCategoryName;
  readonly description: EventCategoryDescription;

  constructor(id: EventCategoryId, name: EventCategoryName, description: EventCategoryDescription) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static fromPrimitives(plainData: { id: string; name: string; duration: string }): EventCategory {
    return new EventCategory(
      new EventCategoryId(plainData.id),
      new EventCategoryName(plainData.name),
      new EventCategoryDescription(plainData.duration)
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value
    };
  }
}
