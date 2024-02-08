import { ObjectType } from 'typeorm';
import { TypeOrmRepository } from '../../../../Shared/infrastructure/persistence/TypeOrmRepository';
import { EventCategoryModel, IEventCategoryPrimitives } from '../../domain/models/event-category.model';
import { EventCategoryRepository } from '../../domain/repositories/event-category.repository';
import { EventCategoryEntity } from '../persistence/entity/event-category.entity';

export class TypeOrmEventCategoryRepository
  extends TypeOrmRepository<EventCategoryModel, IEventCategoryPrimitives>
  implements EventCategoryRepository
{
  async create(category: EventCategoryModel): Promise<EventCategoryModel | null> {
    const categoryCreated = new EventCategoryEntity();
    categoryCreated.id = category.id.value;
    categoryCreated.name = category.name.value;
    categoryCreated.description = category.description.value;
    const repository = await this.repository();
    await repository.save(categoryCreated);
    return EventCategoryModel.toDomain(categoryCreated);
  }

  protected entitySchema(): ObjectType<EventCategoryModel> {
    return EventCategoryEntity;
  }
}
