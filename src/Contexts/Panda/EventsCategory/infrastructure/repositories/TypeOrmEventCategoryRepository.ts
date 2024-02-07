import { EntitySchema } from 'typeorm';
import { Nullable } from '../../../../Shared/domain/Nullable';
import { TypeOrmRepository } from '../../../../Shared/infrastructure/persistence/TypeOrmRepository';
import { EventCategoryEntity } from '../persistence/entity/event-category';
import { EventCategory } from '../../domain/EventCategory';
import { EventCategoryRepository } from '../../domain/repositories/EventCategoryRepository';
import { EventCategoryId } from '../../domain/EventCategoryId';

export class TypeOrmEventCategoryRepository
  extends TypeOrmRepository<EventCategory>
  implements EventCategoryRepository
{
  public async save(eventCategory: EventCategory): Promise<void> {
    return this.persist(eventCategory);
  }

  public async search(id: EventCategoryId): Promise<Nullable<EventCategory>> {
    const repository = await this.repository();
    const eventCategory = await repository.findOne({ where: { id } });
    return eventCategory;
  }

  protected entitySchema(): EntitySchema<EventCategory> {
    return EventCategoryEntity;
  }
}
