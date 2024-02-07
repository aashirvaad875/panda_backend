/* eslint-disable @typescript-eslint/prefer-function-type */
export interface NewableClass<T> extends Function {
  new (...args: any[]): T;
}
