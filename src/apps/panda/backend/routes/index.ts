/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable n/no-path-concat */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router, Request, Response } from 'express';
import { glob } from 'glob';
import { validationResult } from 'express-validator';
import httpStatus from 'http-status';

export function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/**/*.route.*');
  routes.map((route: string) => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

export function validateReqSchema(req: Request, res: Response, next: Function) {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    return next();
  }
  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    message: validationErrors.array()[0].msg
  });
}
