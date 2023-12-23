import Comparator, { CompareType } from '../../../utils/Comparator';

export default function jumpSearch<T>(
  input: T[],
  searchValue: T,
  compareCallback?: CompareType,
): number {
  if (!input.length) {
    return -1;
  }

  const comparator = new Comparator(compareCallback);

  const jumpSize = Math.floor(Math.sqrt(input.length));

  let start = 0;
  let end = jumpSize;

  while (comparator.greaterThan(searchValue, input[Math.min(end, input.length) - 1])) {
    start = end;
    end += jumpSize;

    if (start > input.length) {
      return -1;
    }
  }

  for (let i = start; i <= Math.min(end, input.length); i += 1) {
    if (comparator.equal(searchValue, input[i])) {
      return i;
    }
  }

  return -1;
}

/**
 * Time complexity:
 *  O(√2)
 */
