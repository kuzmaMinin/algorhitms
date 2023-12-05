import { ILinkedListNode } from '../../types/ILinkedListNode';

export default class LinkedListNode implements ILinkedListNode {
  next: LinkedListNode | null = null;

  constructor(public value: unknown) {}
}
