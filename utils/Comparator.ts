/* eslint-disable class-methods-use-this */

import { IComparator } from '../types/structures/IComparator';

export type CompareType = (a: unknown, b: unknown) => 0 | 1 | -1;

export default class Comparator implements IComparator {
  compare;

  constructor(compare: CompareType = this.defaultCompare) {
    this.compare = compare;
  }

  defaultCompare(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  greaterThanOrEqual(a, b) {
    return this.equal(a, b) || this.greaterThan(a, b);
  }

  lessThanOrEqual(a, b) {
    return this.equal(a, b) || this.lessThan(a, b);
  }
}

export const compareObjectCallback = <T>(propName: string) => (a: T, b: T) => {
  if (propName in a && propName in b) {
    if (a[propName] === b[propName]) {
      return 0;
    }

    return a[propName] > b[propName] ? 1 : -1;
  }
  throw new Error(`There is no ${propName} in params`);
};
