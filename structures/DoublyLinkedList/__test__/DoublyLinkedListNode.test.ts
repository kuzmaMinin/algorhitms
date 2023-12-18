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
    const node = new DoublyLinkedListNode({ a: '1', b: 2 });

    expect(node.value.a).toBe('1');
    expect(node.value.b).toBe(2);
  });

  test('check DoublyLinkedListNode when value is array', () => {
    const node = new DoublyLinkedListNode(['a', 'b', 'c']);

    expect(node.value.length).toBe(3);
    expect(node.value[0]).toBe('a');
  });

  test('check DoublyLinkedListNode when next is defined', () => {
    const node = new DoublyLinkedListNode(1, new DoublyLinkedListNode({ a: 1, b: '2' }));

    expect(node.next).toBeDefined();
    expect(node.next?.value.a).toBe(1);
    expect(node.next?.value.b).toBe('2');
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
    const node = new DoublyLinkedListNode({ a: 1, b: 2 });
    const fromObjectToString = (value) => `${value.a}, ${value.b}`;

    expect(node.toString(fromObjectToString)).toBe('1, 2');
  });
});
