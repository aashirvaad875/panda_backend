import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';

export default class HealthCheckController implements Controller {
  async run(_req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).json({ success: true, date: new Date().toISOString() }).send();
  }
}
