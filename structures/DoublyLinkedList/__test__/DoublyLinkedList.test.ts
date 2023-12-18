import DoublyLinkedList from '../DoublyLinkedList';

describe('doubly linked list testing', () => {
  test('check add method', () => {
    const numberList = new DoublyLinkedList();
    numberList.add(1);
    numberList.add(2);
    numberList.add(3);

    expect(numberList.search(1)).toBe(true);
    expect(numberList.search(3)).toBe(true);
    expect(numberList.head?.next?.next?.value).toBe(3);
  });

  test('check search method', () => {
    const numberList = new DoublyLinkedList();
    numberList.add(1);
    numberList.add(2);

    expect(numberList.search(1)).toBe(true);
    expect(numberList.search(3)).toBe(false);
  });

  test('check prepend method', () => {
    const numberList = new DoublyLinkedList();
    numberList.add(1);
    numberList.add(2);

    expect(numberList.search(1)).toBe(true);
  });

  test('check deleteHead method', () => {
    const numberList = new DoublyLinkedList();

    expect(numberList.deleteHead()).toBe(false);

    numberList.add('a');
    numberList.add('b');
    numberList.deleteHead();

    expect(numberList.head?.value).toBe('b');
  });

  test('check deleteTail method', () => {
    const numberList = new DoublyLinkedList();

    expect(numberList.deleteTail()).toBe(false);

    numberList.add('a');
    numberList.add('b');
    numberList.deleteTail();

    expect(numberList.search('b')).toBe(false);
    expect(numberList.tail?.value).toBe('a');
  });

  test('check insert method', () => {
    const numberList = new DoublyLinkedList();
    numberList.add(1);
    numberList.add(2);
    numberList.add(4);
    numberList.insert(3, 2);

    expect(numberList.head!.next!.next!.value).toBe(3);
  });

  test('check DoublyLinkedList.toArray() method', () => {
    const abcList = new DoublyLinkedList();

    abcList.add('a');
    abcList.add('b');
    abcList.add('c');

    const abcArray = abcList.toArray();

    expect(abcArray.length).toBe(3);
    expect(abcArray).toEqual(expect.arrayContaining(['a', 'b', 'c']));
  });

  test('check DoublyLinkedList.fromArray() method', () => {
    const numberList = new DoublyLinkedList();
    const numbers = [0, 1, 2, 3];

    numberList.fromArray(numbers);

    expect(numberList.search(3)).toBe(true);
    expect(numberList.head?.next?.next?.value).toBe(2);
  });

  test('check DoublyLinkedListNode.reverse() method', () => {
    const numberList = new DoublyLinkedList();

    numberList.add(0);
    numberList.add(1);
    numberList.add(2);

    numberList.reverse();

    expect(numberList.head?.value).toBe(2);
    expect(numberList.head?.next?.value).toBe(1);
    expect(numberList.tail?.value).toBe(0);
  });

  test('check DoublyLinkedListNode.remove() method', () => {
    const numberList = new DoublyLinkedList();

    numberList.add(0);
    numberList.add(1);
    numberList.add(2);
    numberList.add(3);

    numberList.remove(1);

    expect(numberList.head?.next?.value).toBe(2);

    numberList.remove(0);
    numberList.remove(3);

    expect(numberList.head?.value).toBe(2);
    expect(numberList.tail?.value).toBe(2);
  });
});
