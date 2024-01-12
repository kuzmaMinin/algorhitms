import Comparator, { CompareObjectType } from '../../../utils/Comparator';

export default function binarySearch<T>(
  input: T[],
  searchValue: T,
  compareCallback?: CompareObjectType<object>,
): number {
  const comparator = new Comparator(compareCallback);
  let startIndex = 0;
  let endIndex = input.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.ceil((endIndex - startIndex) / 2);

    if (comparator.equal(input[middleIndex], searchValue)) {
      return middleIndex;
    }

    if (comparator.lessThan(input[middleIndex], searchValue)) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

/**
 * Time complexity:
 * Search  O(log(n))
 */
