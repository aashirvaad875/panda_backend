/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Server } from './server';

export class PandaBackendApp {
  server?: Server;

  async start() {
    this.server = new Server();
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
