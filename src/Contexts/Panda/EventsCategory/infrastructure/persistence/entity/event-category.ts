import { BeforeInsert, BeforeUpdate, Column, DeleteDateColumn, Entity } from 'typeorm';
import { BaseEntity } from '../../../../Shared/infrastructure/persistence/postgres/entity/base-entity';

@Entity({ name: 'event_categories' })
export class EventCategoryEntity extends BaseEntity {
  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  description!: string;

  @DeleteDateColumn({ nullable: true })
  deletedAt!: Date;

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
