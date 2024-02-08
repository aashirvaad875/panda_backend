import { EventCategoryRepository } from '../domain/repositories/event-category.repository';

import { EventCategoryModel } from '../domain/models/event-category.model';
import { EventCategoryName } from '../domain/value-object/event-category-name.vo';
import { EventCategoryId } from '../domain/value-object/event-category-id.vo';
import { EventCategoryDescription } from '../domain/value-object/event-category-description.vo';
import { CreateEventCategoryRequest } from './CreateEventCategoryRequest';

export class EventCategoryCreator {
  constructor(private repository: EventCategoryRepository) {}

  async execute(request: CreateEventCategoryRequest): Promise<void> {
    const categoryModel = EventCategoryModel.create(
      new EventCategoryId(request.id),
      new EventCategoryName(request.name),
      new EventCategoryDescription(request.description)
    );
    await this.repository.create(categoryModel);
  }
}
