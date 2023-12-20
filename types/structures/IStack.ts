import LinkedList from '../../structures/LinkedList/LinkedList';

export interface IStack {
  linkedList: LinkedList;
  push: (value: unknown) => unknown;
  pop: () => void;
  peek: () => unknown | null;
  isEmpty: () => boolean;
  toArray: () => unknown[];
}
