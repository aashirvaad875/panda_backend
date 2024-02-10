import { EventCategoryId } from '../../../../../src/Contexts/Panda/EventsCategory/domain/value-object/event-category-id.vo';
import { EventCategoryName } from '../../../../../src/Contexts/Panda/EventsCategory/domain/value-object/event-category-name.vo';
import { EventCategoryDescription } from '../../../../../src/Contexts/Panda/EventsCategory/domain/value-object/event-category-description.vo';
import { CreateEventCategoryRequest } from '../../../../../src/Contexts/Panda/EventsCategory/application/CreateEventCategoryRequest';

export class EventCategoryRequestMother {
  static create(
    id: EventCategoryId,
    name: EventCategoryName,
    description: EventCategoryDescription
  ): CreateEventCategoryRequest {
    return { id: id.value, name: name.value, description: description.value };
  }
}
