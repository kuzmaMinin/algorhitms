import binarySearch from '../binarySearch';

describe('binary search tests', () => {
  test('searching value in array of numbers', () => {
    const input = [1, 2, 5, 10, 16, 24, 70, 111, 234];
    const result = binarySearch(input, 1);
    expect(result).toBe(0);
  });

  test('searching value in array of objects', () => {
    const input = [{ age: 1 }, { age: 2 }, { age: 3 }];
    const callback = (a, b) => {
      if (a.age === b.age) {
        return 0;
      }

      return a.age > b.age ? 1 : -1;
    };

    const result = binarySearch(input, { age: 3 }, callback);
    expect(result).toBe(2);
  });
});
