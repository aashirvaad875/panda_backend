import bodyParser from 'body-parser';
import compress from 'compression';
import errorHandler from 'errorhandler';
import express, { Request, Response } from 'express';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import httpStatus from 'http-status';
import cors from 'cors';
import config from '../../../../config';
import { ILogger } from '../../../Contexts/Shared/domain/Logger';
import container from './dependency-injection';
import { registerRoutes } from './routes';

export class Server {
  private express: express.Express;
  private logger: ILogger;
  httpServer?: http.Server;

  constructor() {
    this.logger = container.get('Shared.Logger');
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());
    this.express.use(this.logger.stream());

    const router = Router();
    router.use(cors());
    router.use(errorHandler());

    this.express.use('/api', router);
    registerRoutes(router);

    router.use((err: Error, _req: Request, res: Response, next: Function) => {
      this.logger.error(err.message);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(config.get('port'), () => {
        this.logger.info(
          `🚀 Application s running at http://localhost:${config.get('port')} in ${this.express.get('env')} mode`
        );
        console.log('  Press CTRL-C to stop\n');

        resolve();
      });
    });
  }

  getHTTPServer(): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
