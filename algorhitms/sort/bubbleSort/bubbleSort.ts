import Comparator, { CompareObjectType } from '../../../utils/Comparator';

export default function bubbleSort<T>(
  input: T[],
  compareCallback?: CompareObjectType<object>,
): T[] {
  const comparator = new Comparator(compareCallback);
  const targetArray = [...input];

  for (let i = 0; i < targetArray.length; i += 1) {
    for (let j = 0; j < targetArray.length - i - 1; j += 1) {
      if (comparator.greaterThan(targetArray[j], targetArray[j + 1])) {
        const temp = targetArray[j] as T;
        targetArray[j] = targetArray[j + 1] as T;
        targetArray[j + 1] = temp;
      }
    }
  }

  return targetArray;
}

/**
 * Time complexity:
 *  O(n^2)
 */
