// import { BeforeInsert, BeforeUpdate, Column, DeleteDateColumn, Entity } from 'typeorm';
// import { BaseEntity } from '../../../../Shared/infrastructure/persistence/postgres/entity/base-entity';

// @Entity({ name: 'event_categories' })
// export class EventCategoryEntity extends BaseEntity {
//   @Column({ nullable: false })
//   name!: string;

//   @Column({ nullable: false })
//   description!: string;

//   @DeleteDateColumn({ nullable: true })
//   deletedAt!: Date;

//   @BeforeInsert()
//   insertCreated(): void {
//     this.createdAt = new Date();
//     this.updatedAt = new Date();
//   }

//   @BeforeUpdate()
//   insertUpdated(): void {
//     this.updatedAt = new Date();
//   }
// }

import { BeforeInsert, BeforeUpdate, EntitySchema } from 'typeorm';
// import { EventCategory } from '../../../domain/EventCategory';
import { ValueObjectTransformer } from '../../../../../Shared/infrastructure/persistence/ValueObjectTransformer';
import { EventCategoryId } from '../../../domain/EventCategoryId';
import { EventCategoryName } from '../../../domain/EventCategoryName';
import { EventCategoryDescription } from '../../../domain/EventCategoryDescription';

class EventCategoryEntityClass {
  static schema = new EntitySchema({
    name: 'EventCategory',
    tableName: 'event_categories',
    columns: {
      id: {
        type: String,
        primary: true,
        transformer: ValueObjectTransformer(EventCategoryId)
      },
      name: {
        type: String,
        transformer: ValueObjectTransformer(EventCategoryName)
      },
      description: {
        type: String,
        transformer: ValueObjectTransformer(EventCategoryDescription)
      },
      createdAt: {
        type: Date,
        default: () => 'CURRENT_TIMESTAMP'
      },
      updatedAt: {
        type: Date,
        default: () => 'CURRENT_TIMESTAMP'
      }
    }
  });
  @BeforeInsert()
  async beforeInsert(eventCategory: any) {
    eventCategory.createdAt = new Date();
    eventCategory.updatedAt = new Date();
  }
  @BeforeUpdate()
  insertUpdated(eventCategory: any): void {
    eventCategory.updatedAt = new Date();
  }
}
export const EventCategoryEntity = EventCategoryEntityClass.schema;
