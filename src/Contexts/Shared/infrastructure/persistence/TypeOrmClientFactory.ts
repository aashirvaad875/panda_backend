import { ILogger } from '../../domain/Logger';
import { DataSource } from 'typeorm';
import { EventCategoryEntity } from '../../../Panda/EventsCategory/infrastructure/persistence/entity/event-category.entity';
import { TypeOrmConfig } from './TypeOrmConfig';

export class TypeOrmClientFactory {
  static async createClient(config: TypeOrmConfig, logger: ILogger): Promise<DataSource> {
    try {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        entities: [EventCategoryEntity],
        synchronize: config.env === 'development',
        logging: config.env === 'development',
        migrations: ['/migration/*.ts']
      });
      logger.info('connection to database');
      const connection = await dataSource.initialize();

      return connection;
    } catch (error) {
      console.log(error);

      logger.error('Typeorm connection error');
      throw new Error(`Typeorm connection error`);
    }
  }
}
