const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
import { PandaBackendApp } from '../../../../../../src/apps/panda/backend/PandaBackendApp';
import { EnvironmentArranger } from '../../../../../Contexts/Shared/infrastructure/arranger/EnvironmentArranger';
import container from '../../../../../../src/apps/panda/backend/dependency-injection/index';

let application: PandaBackendApp;
let environmentArranger: EnvironmentArranger;
// let eventBus: EventBus;

BeforeAll(async () => {
  // await ConfigureRabbitMQCommand.run();
  environmentArranger = await container.get<Promise<EnvironmentArranger>>('Panda.EnvironmentArranger');
  await environmentArranger.arrange();
  application = new PandaBackendApp();
  await application.start();
});

AfterAll(async () => {
  // environmentArranger = await container.get<Promise<EnvironmentArranger>>('Panda.EnvironmentArranger');
  // await environmentArranger.arrange();
  await environmentArranger.close();
  await application.stop();
});

export { application, environmentArranger };
