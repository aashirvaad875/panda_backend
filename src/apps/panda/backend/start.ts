import { PandaBackendApp } from './PandaBackendApp';

try {
  new PandaBackendApp().start().catch(handleError);
} catch (e) {
  handleError(e);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
function handleError(e: any): void {
  console.log(e);
  process.exit(1);
}
