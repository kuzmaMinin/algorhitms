import { IDoublyLinkedListNode, ILinkedListNode } from './ILinkedListNode';
import { CompareType } from '../../utils/Comparator';

interface IBaseLinkedList<T, N> {
  head: N | null;
  tail: N | null;
  compare: CompareType;

  add(value: unknown): void;
  prepend(value: unknown): void;
  search(value: unknown): boolean;
  remove(value: unknown): boolean;
  insert(value: unknown, rawIndex: number): T;
  reverse(): T;
  deleteTail(): boolean;
  deleteHead(): boolean;
  fromArray(data: unknown[]): T;
  toArray(): unknown[];
}

export interface ILinkedList extends IBaseLinkedList<
ILinkedList, ILinkedListNode
> {}

export interface IDoublyLinkedList extends IBaseLinkedList<
IDoublyLinkedList, IDoublyLinkedListNode
> {}
