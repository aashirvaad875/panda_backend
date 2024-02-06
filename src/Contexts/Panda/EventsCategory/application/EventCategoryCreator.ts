import { EventCategoryDescription } from '../domain/EventCategoryDescription';
import { EventCategoryName } from '../domain/EventCategoryName';
import { CreateEventCategoryRequest } from './CreateEventCategoryRequest';
import { EventCategoryRepository } from '../domain/EventCategoryRepository';
import { EventCategoryId } from '../domain/EventCategoryId';
import { EventCategory } from '../domain/EventCategory';

export class EventCategoryCreator {
  constructor(private repository: EventCategoryRepository) {}

  async run(request: CreateEventCategoryRequest): Promise<void> {
    const course = new EventCategory(
      new EventCategoryId(request.id),
      new EventCategoryName(request.name),
      new EventCategoryDescription(request.description)
    );
    return this.repository.save(course);
  }
}
