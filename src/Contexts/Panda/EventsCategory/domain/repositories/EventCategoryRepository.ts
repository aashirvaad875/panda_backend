import { EventCategory } from '../EventCategory';

export interface EventCategoryRepository {
  // create(eventCategory: EventCategory): Promise<void>;
  create(category: EventCategory): Promise<EventCategory | null>;
}
