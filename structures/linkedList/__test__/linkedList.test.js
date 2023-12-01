import LinkedList from '../linkedList';

describe('linked list testing', () => {
  test('check linkedList inserting methods', () => {
    const numberList = new LinkedList();
    numberList.prepend(0);
    numberList.add(1);
    numberList.add(2);

    expect(numberList.head.value).toBe(0);
    expect(numberList.head.next.value).toBe(1);
    expect(numberList.tail.value).toBe(2);
  });

  test('check searching value in linked list', () => {
    const firstList = new LinkedList();
    const secondList = new LinkedList();

    firstList.add(1);
    firstList.add(2);
    firstList.add(5);
    firstList.prepend(0);
    secondList.prepend(0);
    secondList.add(7);

    expect(firstList.search(7)).toBe(false);
    expect(firstList.search(5)).toBe(true);
    expect(secondList.search(0)).toBe(true);
    expect(secondList.search(5)).toBe(false);
  });

  test('check remove method', () => {
    const numberList = new LinkedList();

    numberList.add(1);
    numberList.add(2);
    numberList.add(3);
    numberList.add(4);
    numberList.add(5);

    numberList.remove(1);
    numberList.remove(5);
    numberList.remove(3);

    expect(numberList.search(1)).toBe(false);
    expect(numberList.search(5)).toBe(false);
    expect(numberList.search(3)).toBe(false);
  });

  test('check insert method', () => {
    const numberList = new LinkedList();

    numberList.insert(0, -5);
    numberList.insert(1, 5);
    numberList.add(2);
    numberList.add(3);
    numberList.insert(5, 3);

    expect(numberList.search(0)).toBe(true);
    expect(numberList.search(1)).toBe(true);
    expect(numberList.search(5)).toBe(true);
  });

  test('check delete head method', () => {
    const numberList = new LinkedList();

    expect(numberList.deleteHead()).toBe(false);

    numberList.add(0);
    numberList.add(1);
    numberList.add(2);
    numberList.deleteHead();
    numberList.deleteHead();

    expect(numberList.search(0)).toBe(false);
    expect(numberList.search(1)).toBe(false);
    expect(numberList.search(2)).toBe(true);
  });

  test('check to array method', () => {
    const abcList = new LinkedList();

    abcList.add('a');
    abcList.add('b');
    abcList.add('c');

    const abcArray = abcList.toArray();

    expect(abcArray.length).toBe(3);
    expect(abcArray).toEqual(expect.arrayContaining(['a', 'b', 'c']));
  });
});
