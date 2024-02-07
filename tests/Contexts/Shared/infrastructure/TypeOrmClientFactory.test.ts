import { DataSource } from 'typeorm';
import { TypeOrmClientFactory } from '../../../../src/Contexts/Shared/infrastructure/persistence/TypeOrmClientFactory';
import { WinstonLogger } from '../../../../src/Contexts/Shared/infrastructure/WinstonLogger/index';

describe('TypeOrmClientFactory', () => {
  const factory = TypeOrmClientFactory;
  let client: DataSource;
  const logger = WinstonLogger;

  beforeEach(async () => {
    client = await factory.createClient(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'webandapp',
        password: 'webandapp',
        database: 'panda',
        env: 'testing'
      },
      new logger({ apploglevel: 'info' })
    );
  });

  afterEach(async () => {
    await client.destroy();
  });

  it('creates a new client with the connection already established', () => {
    expect(client).toBeInstanceOf(DataSource);
    expect(client.isConnected).toBe(true);
  });

  it('creates a new client if it does not exist a client with the given name', async () => {
    const newClient = await factory.createClient(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'webandapp',
        password: 'webandapp',
        database: 'panda',
        env: 'testing'
      },
      new logger({ apploglevel: 'info' })
    );

    expect(newClient).not.toBe(client);
    expect(newClient.isConnected).toBeTruthy();

    await newClient.destroy();
  });

  // it('returns a client if it already exists', async () => {
  //   const newClient = await factory.createClient(
  //     {
  //       type: 'postgres',
  //       host: 'localhost',
  //       port: 5432,
  //       username: 'webandapp',
  //       password: 'webandapp',
  //       database: 'panda',
  //       env: 'testing'
  //     },
  //     new logger({ apploglevel: 'info' })
  //   );

  //   expect(newClient).toBe(client);
  //   expect(newClient.initialize()).toBeTruthy();
  // });
});
