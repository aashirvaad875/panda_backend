const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
import { PandaBackendApp } from '../../../../../../src/apps/panda/backend/PandaBackendApp';

let application: PandaBackendApp;
// let environmentArranger: EnvironmentArranger;
// let eventBus: EventBus;

BeforeAll(async () => {
  // await ConfigureRabbitMQCommand.run();

  // await environmentArranger.arrange();

  application = new PandaBackendApp();
  await application.start();
});

AfterAll(async () => {
  // await environmentArranger.close();

  await application.stop();
});

export { application };
