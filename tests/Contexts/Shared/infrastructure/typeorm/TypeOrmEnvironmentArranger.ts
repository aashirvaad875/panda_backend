import { DataSource, EntityMetadata } from 'typeorm';
import { EnvironmentArranger } from '../arranger/EnvironmentArranger';

export class TypeOrmEnvironmentArranger extends EnvironmentArranger {
  constructor(private _client: Promise<DataSource>) {
    super();
  }

  public async arrange(): Promise<void> {
    await this.cleanDatabase();
  }

  protected async cleanDatabase(): Promise<void> {
    try {
      const client = await this._client;
      const entities = await this.entities();
      for (const entity of entities) {
        const repository = client.getRepository(entity.name);
        await repository.query(`TRUNCATE TABLE ${entity.tableName};`);
      }
    } catch (error) {
      throw new Error(`Unable to clean test database: ${error}`);
    }
  }

  private async entities(): Promise<EntityMetadata[]> {
    return (await this._client).entityMetadatas;
  }

  protected client(): Promise<DataSource> {
    return this._client;
  }

  public async close(): Promise<void> {
    return (await this.client()).close();
  }
}
