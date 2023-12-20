import { IDoublyLinkedListNode } from '../../types/structures/ILinkedListNode';

export default class DoublyLinkedListNode implements IDoublyLinkedListNode {
  constructor(
    public value: unknown,
    public next: DoublyLinkedListNode | null = null,
    public prev: DoublyLinkedListNode | null = null,
  ) {}

  toString(callback?: (value: unknown) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
