import Stack from '../Stack';

describe('testing Stack structure methods', () => {
  test('check Stack.push() method', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.linkedList.head.value).toBe(1);
    expect(stack.linkedList.head.next.value).toBe(2);
  });

  test('check Stack.pop() method', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();

    expect(stack.linkedList.head.next).toBeNull();
  });

  test('check Stack.peek() method', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(1);
  });

  test('check Stack.isEmpty() method', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);

    expect(stack.isEmpty()).toBeFalsy();
  });

  test('check Stack.toArray() method', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.toArray()).toEqual(expect.arrayContaining([1, 2]));
  });
});
