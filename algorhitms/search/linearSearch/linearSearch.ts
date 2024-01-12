import Comparator, { CompareObjectType } from '../../../utils/Comparator';

export default function linearSearch<T>(
  input: T[],
  target: T,
  compareCallback?: CompareObjectType<object>,
): number[] {
  const comparator = new Comparator(compareCallback);
  const match: number[] = [];

  input.forEach((item, index) => {
    if (comparator.equal(item, target)) {
      match.push(index);
    }
  });

  return match;
}

/**
 * Time complexity:
 * Search  O(n)
 */
