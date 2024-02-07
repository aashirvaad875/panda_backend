import { Express } from 'express';
import container from '../dependency-injection';
import HealthCheckController from '../controllers/HealthCheck/HealthCheckController';

export const register = (app: Express): void => {
  // Controller
  const controller: HealthCheckController = container.get('Apps.Panda.Backend.Controllers.HealthCheckController');

  // Routes
  app.get('/health_check', controller.run.bind(controller));
};
