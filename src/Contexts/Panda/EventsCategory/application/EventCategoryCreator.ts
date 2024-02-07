import { EventCategoryDescription } from '../domain/EventCategoryDescription';
import { EventCategoryName } from '../domain/EventCategoryName';
import { EventCategoryRepository } from '../domain/repositories/EventCategoryRepository';
import { EventCategoryId } from '../domain/EventCategoryId';
import { EventCategory } from '../domain/EventCategory';

export class EventCategoryCreator {
  constructor(private repository: EventCategoryRepository) {}

  async execute(id: EventCategoryId, name: EventCategoryName, description: EventCategoryDescription): Promise<void> {
    const categoryModel = EventCategory.create(id, name, description);
    await this.repository.create(categoryModel);
  }
}
