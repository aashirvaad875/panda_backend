import { EventCategory } from '../EventCategory';

export interface EventCategoryRepository {
  save(eventCategory: EventCategory): Promise<void>;
}
