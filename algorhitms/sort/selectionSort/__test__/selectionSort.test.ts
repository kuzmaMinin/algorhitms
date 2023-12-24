import selectionSort from '../selectionSort';
import { compareObjectCallback } from '../../../../utils/Comparator';

describe('testing selection sort', () => {
  test('bubble sorting number array', () => {
    const input = [10, 9, 7, 5, 6, 4, 2, 4, 0];
    const sortedArray = selectionSort(input);

    expect(sortedArray).toEqual(expect.arrayContaining([0, 2, 4, 4, 5, 6, 7, 9, 10]));
  });

  test('selection sorting objects array', () => {
    const input = [{ age: 30 }, { age: 20 }, { age: 10 }];
    const sortedArray = selectionSort(input, compareObjectCallback('age'));

    expect(sortedArray).toEqual(expect.arrayContaining([{ age: 10 }, { age: 20 }, { age: 30 }]));
  });
});
