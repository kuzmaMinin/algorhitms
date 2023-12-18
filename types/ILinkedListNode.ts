type CallbackType = (value: unknown) => string;

interface IBaseLinkedListNode<T> {
  next: T | null;
  value: unknown;
  toString: (callback?: CallbackType) => string;
}

export interface ILinkedListNode extends IBaseLinkedListNode<ILinkedListNode> {
}

export interface IDoublyLinkedListNode extends IBaseLinkedListNode<IDoublyLinkedListNode> {
  prev: IDoublyLinkedListNode | null;
}
