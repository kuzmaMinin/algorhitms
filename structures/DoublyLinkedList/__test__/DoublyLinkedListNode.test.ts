import DoublyLinkedListNode from '../DoublyLinkedListNode';

describe('testing DoublyLinkedListNode instance', () => {
  test('check DoublyLinkedListNode when value is number', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.value).toBe(1);
  });

  test('check DoublyLinkedListNode when value is string', () => {
    const node = new DoublyLinkedListNode('1');

    expect(node.value).toBe('1');
  });

  test('check DoublyLinkedListNode when value is object', () => {
    const inputValue = { a: '1', b: 2 };
    const node = new DoublyLinkedListNode(inputValue);

    const { a } = node.value as typeof inputValue;
    const { b } = node.value as typeof inputValue;

    expect(a).toBe('1');
    expect(b).toBe(2);
  });

  test('check DoublyLinkedListNode when value is array', () => {
    const inputValue = ['a', 'b', 'c'];
    const node = new DoublyLinkedListNode(['a', 'b', 'c']);
    const nodeValue = node.value as typeof inputValue;

    expect(nodeValue.length).toBe(3);
    expect(nodeValue[0]).toBe('a');
  });

  test('check DoublyLinkedListNode when next is defined', () => {
    const inputValue = { a: 1, b: '2' };
    const node = new DoublyLinkedListNode(1, new DoublyLinkedListNode(inputValue));

    expect(node.next).toBeDefined();
    expect((node.next?.value as typeof inputValue).a).toBe(1);
    expect((node.next?.value as typeof inputValue).b).toBe('2');
  });

  test('check DoublyLinkedListNode when next is not defined', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.next).toBeNull();
  });

  test('check DoublyLinkedListNode when prev and next are defined', () => {
    const prevNode = new DoublyLinkedListNode('a');
    const nextNode = new DoublyLinkedListNode('c');
    const node = new DoublyLinkedListNode('b', nextNode, prevNode);

    expect(node.value).toBe('b');
    expect(node.next!.value).toBe('c');
    expect(node.prev!.value).toBe('a');
  });

  test('check DoublyLinkedListNode.toString() method without callback', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.toString()).toBe('1');
  });

  test('check DoublyLinkedListNode.toString() method with callback', () => {
    const inputValue = { a: 1, b: 2 };
    const node = new DoublyLinkedListNode(inputValue);
    const fromObjectToString = (value: typeof inputValue) => `${value.a}, ${value.b}`;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(node.toString(fromObjectToString)).toBe('1, 2');
  });
});
