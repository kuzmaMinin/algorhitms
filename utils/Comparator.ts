/* eslint-disable class-methods-use-this */

import { IComparator } from '../types/structures/IComparator';

export type CompareObjectType<T extends object> = (a: keyof T, b: keyof T) => 0 | 1 | -1;

export default class Comparator implements IComparator {
  compare;

  constructor(compare?: CompareObjectType<object>) {
    this.compare = compare || this.defaultCompare;
  }

  defaultCompare<T>(a: T, b: T) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal<T>(a: T, b: T) {
    return this.compare(a as never, b as never) === 0;
  }

  greaterThan<T>(a: T, b: T) {
    return this.compare(a as never, b as never) > 0;
  }

  lessThan(a: unknown, b: unknown) {
    return this.compare(a as never, b as never) < 0;
  }

  greaterThanOrEqual<T>(a: T, b: T) {
    return this.equal(a, b) || this.greaterThan(a, b);
  }

  lessThanOrEqual<T>(a: T, b: T) {
    return this.equal(a, b) || this.lessThan(a, b);
  }
}

export const compareObjectCallback = <T extends object>(propName: keyof T) => (a: T, b: T) => {
  if (propName in a && propName in b) {
    if (a[propName] === b[propName]) {
      return 0;
    }

    return a[propName] > b[propName] ? 1 : -1;
  }
  throw new Error(`There is no ${propName as string} in params`);
};
