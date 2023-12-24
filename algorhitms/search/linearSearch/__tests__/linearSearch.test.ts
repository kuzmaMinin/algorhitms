import linearSearch from '../linearSearch';
import { compareObjectCallback } from '../../../../utils/Comparator';

describe('linearSearch tests', () => {
  test('searching in array of strings', () => {
    const abcList = ['a', 'b', 'c', 'd', 'e', 'c'];
    const target = 'c';
    const matches = linearSearch(abcList, target);

    expect(matches).toEqual(expect.arrayContaining([2, 5]));
  });

  test('searching in array of numbers', () => {
    const numberList = [1, 1, 2, 3, 4, 5];
    const target = 1;
    const matches = linearSearch(numberList, target);

    expect(matches).toEqual(expect.arrayContaining([0, 1]));
  });

  test('searching in array of objects', () => {
    const objectsList = [{ number: 1 }, { number: 2 }, { number: 3 }];
    const target = { number: 2 };
    const matches = linearSearch(objectsList, target, compareObjectCallback('number'));

    expect(matches).toEqual(expect.arrayContaining([1]));
  });
});
