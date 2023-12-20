import Queue from '../Queue';

describe('testing Queue structure methods', () => {
  test('check Queue.enqueue() method', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.linkedList.head?.value).toBe(1);
    expect(queue.linkedList.head?.next?.value).toBe(2);
    expect(queue.linkedList.tail?.value).toBe(3);
  });

  test('check Queue.dequeue() method', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();

    expect(queue.linkedList.head?.value).toBe(3);
    expect(queue.linkedList.head?.next).toBeNull();
  });

  test('check Queue.peek() method', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
  });

  test('check Queue.isEmpty() method', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });
});
