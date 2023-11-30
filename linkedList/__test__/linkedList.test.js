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
});
