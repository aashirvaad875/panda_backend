import { EventCategoryModel } from '../models/event-category.model';

export interface EventCategoryRepository {
  // create(eventCategory: EventCategory): Promise<void>;
  create(category: EventCategoryModel): Promise<EventCategoryModel | null>;
}
