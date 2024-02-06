import { EntitySchema } from 'typeorm';
import { Nullable } from '../../../../Shared/domain/Nullable';
import { TypeOrmRepository } from '../../../../Shared/infrastructure/persistence/TypeOrmRepository';
import { EventCategoryEntity } from './entity/event-category';
import { EventCategory } from '../../domain/EventCategory';
import { EventCategoryRepository } from '../../domain/EventCategoryRepository';
import { EventCategoryId } from '../../domain/EventCategoryId';

export class TypeOrmCourseRepository extends TypeOrmRepository<EventCategory> implements EventCategoryRepository {
  public save(course: EventCategory): Promise<void> {
    return this.persist(course);
  }

  public async search(id: EventCategoryId): Promise<Nullable<EventCategory>> {
    const repository = await this.repository();

    const course = await repository.findOne({ id });

    return course;
  }

  protected entitySchema(): EntitySchema<EventCategory> {
    return EventCategoryEntity;
  }
}
