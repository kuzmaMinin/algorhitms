import Comparator, { CompareType } from '../../../utils/Comparator';

export default function linearSearch<T>(
  input: T[],
  target: T,
  compareCallback?: CompareType,
): number[] {
  const comparator = new Comparator(compareCallback);
  const match = [];

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
