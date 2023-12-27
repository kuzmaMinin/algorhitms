export default function interpolationSearch<T>(input: T[], searchValue: T): number {
  let leftIndex = 0;
  let rightIndex = input.length - 1;

  while (leftIndex <= rightIndex) {
    const indexDelta = rightIndex - leftIndex;
    const rangeDelta = input[rightIndex] - input[leftIndex];
    const valueDelta = searchValue - input[leftIndex];

    if (valueDelta < 0) {
      return -1;
    }

    if (!rangeDelta) {
      return input[rightIndex] === searchValue ? rightIndex : -1;
    }

    const middleIndex = leftIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);

    if (input[middleIndex] === searchValue) {
      return middleIndex;
    }

    if (input[middleIndex] < searchValue) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}

/**
 * Time complexity:
 * Search  O(log(log(n))
 */
