export default function interpolationSearch<T>(input: T[], searchValue: T): number {
  if (!input.length) {
    return -1;
  }

  let leftIndex = 0;
  let rightIndex = input.length - 1;

  while (leftIndex <= rightIndex) {
    if (input) {
      const indexDelta = rightIndex - leftIndex;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const rangeDelta = input[rightIndex] - input[leftIndex];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
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

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (input[middleIndex] < searchValue) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  }

  return -1;
}

/**
 * Time complexity:
 * Search  O(log(log(n))
 */
