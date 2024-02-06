import WinstonLoggerConfig from './winstonLoggerConfig';
import config from '../../../../../config';

export class WinstonLoggerFactory {
  static createConfig(): WinstonLoggerConfig {
    return {
      apploglevel: config.get('apploglevel')
    };
  }
}

export default WinstonLoggerFactory;
