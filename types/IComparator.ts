export interface IComparator {
  equal: (a: unknown, b: unknown) => boolean;
  lessThan: (a: unknown, b: unknown) => boolean;
  greaterThan: (a: unknown, b: unknown) => boolean;
  lessThanOrEqual: (a: unknown, b: unknown) => boolean;
  greaterThanOrEqual: (a: unknown, b: unknown) => boolean;
}
