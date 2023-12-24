import jumpSearch from '../jumpSearch';
import { compareObjectCallback } from '../../../../utils/Comparator';

describe('testing jump search', () => {
  test('testing jump search in numbers array', () => {
    const input = [1, 3, 5, 6, 6, 7, 8, 9, 11, 1000];
    const index = jumpSearch(input, 6);
    const lastIndex = jumpSearch(input, 1000);
    const notExist = jumpSearch(input, 1001);

    expect(index).toEqual(3);
    expect(lastIndex).toEqual(9);
    expect(notExist).toEqual(-1);
  });

  test('testing jump search in object array', () => {
    const input = [{ id: 2 }, { id: 4 }, { id: 100 }];
    const index = jumpSearch(input, { id: 100 }, compareObjectCallback('id'));

    expect(index).toEqual(2);
  });
});
