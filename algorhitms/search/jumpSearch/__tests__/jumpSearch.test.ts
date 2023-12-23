import jumpSearch from '../jumpSearch';

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

    const compareCallback = (a, b) => {
      if (a.id === b.id) {
        return 0;
      }

      return a.id > b.id ? 1 : -1;
    };

    const index = jumpSearch(input, { id: 100 }, compareCallback);

    expect(index).toEqual(2);
  });
});
