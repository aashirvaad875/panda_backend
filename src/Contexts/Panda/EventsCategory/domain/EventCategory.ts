import { AggregateRoot, AggregateRootPrimitives } from '../../../Shared/domain/AggregateRoot';
import { EventCategoryDescription } from './EventCategoryDescription';
import { EventCategoryId } from './EventCategoryId';
import { EventCategoryName } from './EventCategoryName';

export interface IEventCategoryPrimitives extends AggregateRootPrimitives {
  id: string;
  name: string;
  description: string;
}
export class EventCategory extends AggregateRoot {
  // readonly id: EventCategoryId;
  // readonly name: EventCategoryName;
  // readonly description: EventCategoryDescription;
  // readonly createdAt?: EventCategoryCreatedAt;

  // constructor(id: EventCategoryId, name: EventCategoryName, description: EventCategoryDescription) {
  //   super();
  //   this.id = id;
  //   this.name = name;
  //   this.description = description;
  // }
  constructor(
    public readonly id: EventCategoryId,
    public name: EventCategoryName,
    public description: EventCategoryDescription
    // public image: string,
  ) {
    super();
  }

  static create(id: EventCategoryId, name: EventCategoryName, description: EventCategoryDescription): EventCategory {
    const category = new EventCategory(id, name, description);

    return category;
  }

  static toDomain(category: IEventCategoryPrimitives): EventCategory {
    return new EventCategory(
      new EventCategoryId(category.id),
      new EventCategoryName(category.name),
      new EventCategoryDescription(category.description)
    );
  }

  toPrimitives(): IEventCategoryPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value
    };
  }
}
