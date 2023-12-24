import Comparator, { CompareType } from '../../../utils/Comparator';

export default function selectionSort<T>(
  input: T[],
  compareCallback?: CompareType,
): T[] {
  const arr = [...input];
  const compare = new Comparator(compareCallback);

  for (let i = 0; i <= arr.length; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (compare.lessThan(arr[j], arr[minIndex])) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

/**
 * Time complexity:
 * Search  O(n2)
 */
