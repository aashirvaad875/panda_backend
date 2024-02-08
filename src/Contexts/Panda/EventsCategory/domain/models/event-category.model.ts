import { AggregateRoot, AggregateRootPrimitives } from '../../../../Shared/domain/AggregateRoot';
import { EventCategoryId } from '../value-object/event-category-id.vo';
import { EventCategoryName } from '../value-object/event-category-name.vo';
import { EventCategoryDescription } from '../value-object/event-category-description.vo';

export interface IEventCategoryPrimitives extends AggregateRootPrimitives {
  id: string;
  name: string;
  description: string;
}
export class EventCategoryModel extends AggregateRoot {
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

  static create(
    id: EventCategoryId,
    name: EventCategoryName,
    description: EventCategoryDescription
  ): EventCategoryModel {
    const category = new EventCategoryModel(id, name, description);

    return category;
  }

  static toDomain(category: IEventCategoryPrimitives): EventCategoryModel {
    return new EventCategoryModel(
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
