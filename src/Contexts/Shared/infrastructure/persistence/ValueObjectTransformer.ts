/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NewableClass } from '../../domain/NewableClass';
import { ValueObject } from '../../domain/value-object/value-object';

export const ValueObjectTransformer = (ValueObject: NewableClass<ValueObject<any>>) => {
  return {
    to: (value: ValueObject<any>): any => value.value,
    from: (value: any): ValueObject<any> => new ValueObject(value)
  };
};
