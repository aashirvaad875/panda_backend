/* eslint-disable @typescript-eslint/promise-function-async */
import { DataSource, ObjectType, Repository } from 'typeorm';
import { AggregateRoot, AggregateRootPrimitives } from '../../domain/AggregateRoot';

export abstract class TypeOrmRepository<T extends AggregateRoot, P extends AggregateRootPrimitives> {
  constructor(private _client: Promise<DataSource>) {}

  // protected abstract entitySchema(): EntitySchema<T>;
  protected abstract entitySchema(): ObjectType<P>;

  protected client(): Promise<DataSource> {
    return this._client;
  }

  protected async repository(): Promise<Repository<P>> {
    return (await this._client).getRepository(this.entitySchema());
  }

  protected async persist(aggregateRoot: T): Promise<void> {
    const repository = await this.repository();
    await repository.save(aggregateRoot.toPrimitives());
  }
}
