/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'event_categories' })
export class EventCategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  description!: string;

  @DeleteDateColumn({ nullable: true })
  deletedAt!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @BeforeInsert()
  insertCreated(): void {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  insertUpdated(): void {
    this.updatedAt = new Date();
  }
}

// import { BeforeInsert, BeforeUpdate, EntitySchema } from 'typeorm';
// // import { EventCategory } from '../../../domain/EventCategory';
// import { ValueObjectTransformer } from '../../../../../Shared/infrastructure/persistence/ValueObjectTransformer';
// import { EventCategoryId } from '../../../domain/EventCategoryId';
// import { EventCategoryName } from '../../../domain/EventCategoryName';
// import { EventCategoryDescription } from '../../../domain/EventCategoryDescription';

// class EventCategoryEntityClass {
//   static schema = new EntitySchema({
//     name: 'EventCategory',
//     tableName: 'event_categories',
//     columns: {
//       id: {
//         nullable: false,
//         type: String,
//         primary: true,
//         transformer: ValueObjectTransformer(EventCategoryId)
//       },
//       name: {
//         type: String,
//         transformer: ValueObjectTransformer(EventCategoryName)
//       },
//       description: {
//         type: String,
//         transformer: ValueObjectTransformer(EventCategoryDescription)
//       },
//       createdAt: {
//         createDate: true,
//         type: Date
//       },
//       updatedAt: {
//         updateDate: true,
//         type: Date
//       },
//       deletedAt: {
//         nullable: true,
//         deleteDate: true,
//         type: Date
//       }
//     }
//   });
//   // eslint-disable-next-line @typescript-eslint/lines-between-class-members
//   @BeforeInsert()
//   async beforeInsert(eventCategory: any) {
//     eventCategory.createdAt = new Date();
//     eventCategory.updatedAt = new Date();
//   }
//   // eslint-disable-next-line @typescript-eslint/lines-between-class-members
//   @BeforeUpdate()
//   insertUpdated(eventCategory: any): void {
//     eventCategory.updatedAt = new Date();
//   }
// }
// export const EventCategoryEntity = EventCategoryEntityClass.schema;
