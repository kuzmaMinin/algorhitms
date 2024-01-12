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
    const input = { a: '1', b: 2 };
    const node = new LinkedListNode(input);

    expect((node.value as typeof input).a).toBe('1');
    expect((node.value as typeof input).b).toBe(2);
  });

  test('check LinkedListNode when value is array', () => {
    const input = ['a', 'b', 'c'];
    const node = new LinkedListNode(['a', 'b', 'c']);

    expect((node.value as typeof input).length).toBe(3);
    expect((node.value as typeof input)[0]).toBe('a');
  });

  test('check LinkedListNode when next is defined', () => {
    const input = { a: 1, b: '2' };
    const node = new LinkedListNode(1, new LinkedListNode({ a: 1, b: '2' }));

    expect(node.next).toBeDefined();
    expect((node.next?.value as typeof input).a).toBe(1);
    expect((node.next?.value as typeof input).b).toBe('2');
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
    const input = { a: 1, b: 2 };
    const node = new LinkedListNode({ a: 1, b: 2 });
    const fromObjectToString = (value: typeof input) => `${value.a}, ${value.b}`;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(node.toString(fromObjectToString)).toBe('1, 2');
  });
});
