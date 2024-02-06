import config from '../../../../../../../config';
import { TypeOrmConfig } from '../../../../../Shared/infrastructure/persistence/TypeOrmConfig';

export class TypeOrmConfigFactory {
  static createConfig(): TypeOrmConfig {
    return {
      env: config.get('env'),
      host: config.get('typeorm.host'),
      port: config.get('typeorm.port'),
      username: config.get('typeorm.username'),
      password: config.get('typeorm.password'),
      database: config.get('typeorm.database')
    };
  }
}
