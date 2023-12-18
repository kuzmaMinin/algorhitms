import LinkedListNode from '../LinkedListNode';

describe('testing LinkedListNode instance', () => {
  test('check node when value is number', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
  });

  test('check LinkedListNode when value is string', () => {
    const node = new LinkedListNode('1');

    expect(node.value).toBe('1');
  });

  test('check LinkedListNode when value is object', () => {
    const node = new LinkedListNode({ a: '1', b: 2 });

    expect(node.value.a).toBe('1');
    expect(node.value.b).toBe(2);
  });

  test('check LinkedListNode when value is array', () => {
    const node = new LinkedListNode(['a', 'b', 'c']);

    expect(node.value.length).toBe(3);
    expect(node.value[0]).toBe('a');
  });

  test('check LinkedListNode when next is defined', () => {
    const node = new LinkedListNode(1, new LinkedListNode({ a: 1, b: '2' }));

    expect(node.next).toBeDefined();
    expect(node.next?.value.a).toBe(1);
    expect(node.next?.value.b).toBe('2');
    expect(node.next?.next).toBeNull();
  });

  test('check LinkedListNode when next is not defined', () => {
    const node = new LinkedListNode('x');

    expect(node.next).toBe(null);
  });

  test('check LinkedListNode.toString() method without callback', () => {
    const node = new LinkedListNode(1);

    expect(node.toString()).toBe('1');
  });

  test('check LinkedListNode.toString() method with callback', () => {
    const node = new LinkedListNode({ a: 1, b: 2 });
    const fromObjectToString = (value) => `${value.a}, ${value.b}`;

    expect(node.toString(fromObjectToString)).toBe('1, 2');
  });
});
