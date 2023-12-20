import LinkedList from '../../structures/LinkedList/LinkedList';

export interface IQueue {
  linkedList: LinkedList;
  enqueue: (value: unknown) => unknown;
  dequeue: () => void;
  peek: () => unknown | null;
  isEmpty: () => boolean;
}
