import { ObjectType } from 'typeorm';
import { TypeOrmRepository } from '../../../../Shared/infrastructure/persistence/TypeOrmRepository';
import { EventCategoryEntity } from '../persistence/entity/event-category';
import { EventCategory, IEventCategoryPrimitives } from '../../domain/EventCategory';
import { EventCategoryRepository } from '../../domain/repositories/EventCategoryRepository';

export class TypeOrmEventCategoryRepository
  extends TypeOrmRepository<EventCategory, IEventCategoryPrimitives>
  implements EventCategoryRepository
{
  async create(category: EventCategory): Promise<EventCategory | null> {
    const categoryCreated = new EventCategoryEntity();
    categoryCreated.id = String(category.id);
    categoryCreated.name = String(category.name);
    categoryCreated.description = String(category.description);
    const repository = await this.repository();
    await repository.save(categoryCreated);
    return EventCategory.toDomain(categoryCreated);
  }

  protected entitySchema(): ObjectType<EventCategory> {
    return EventCategoryEntity;
  }
}
