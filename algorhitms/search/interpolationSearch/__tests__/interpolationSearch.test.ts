import interpolationSearch from '../interpolationSearch';

describe('interpolation search tests', () => {
  test('testing interpolation search with numbers array', () => {
    const input = [1, 1, 3, 4, 6, 7, 7, 8, 9, 100];
    const oneIndex = interpolationSearch(input, 1);
    const fourIndex = interpolationSearch(input, 4);
    const lastIndex = interpolationSearch(input, 100);
    const nonExistIndex = interpolationSearch(input, 101);

    expect(oneIndex).toBe(0);
    expect(fourIndex).toBe(3);
    expect(lastIndex).toBe(9);
    expect(nonExistIndex).toBe(-1);
  });
});
