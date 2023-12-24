import binarySearch from '../binarySearch';
import { compareObjectCallback } from '../../../../utils/Comparator';

describe('binary search tests', () => {
  test('searching value in array of numbers', () => {
    const input = [1, 2, 5, 10, 16, 24, 70, 111, 234];
    const result = binarySearch(input, 1);

    expect(result).toBe(0);
  });

  test('searching value in array of objects', () => {
    const input = [{ age: 1 }, { age: 2 }, { age: 3 }];
    const result = binarySearch(input, { age: 3 }, compareObjectCallback('age'));

    expect(result).toBe(2);
  });
});
