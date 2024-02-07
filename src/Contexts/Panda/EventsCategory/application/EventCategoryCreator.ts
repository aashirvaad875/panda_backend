import { EventCategoryDescription } from '../domain/EventCategoryDescription';
import { EventCategoryName } from '../domain/EventCategoryName';
import { CreateEventCategoryRequest } from './CreateEventCategoryRequest';
import { EventCategoryRepository } from '../domain/repositories/EventCategoryRepository';
import { EventCategoryId } from '../domain/EventCategoryId';
import { EventCategory } from '../domain/EventCategory';

export class EventCategoryCreator {
  constructor(private repository: EventCategoryRepository) {}

  async run(request: CreateEventCategoryRequest): Promise<void> {
    const eventCategory = new EventCategory(
      new EventCategoryId(request.id),
      new EventCategoryName(request.name),
      new EventCategoryDescription(request.description)
    );

    console.log(this.repository.save(eventCategory));

    return this.repository.save(eventCategory);
  }
}
