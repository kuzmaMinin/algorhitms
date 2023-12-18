import { ILinkedListNode } from '../../types/ILinkedListNode';

export default class LinkedListNode implements ILinkedListNode {
  constructor(
    public value: unknown,
    public next: ILinkedListNode | null = null,
  ) {}

  toString(callback?: (value: unknown) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
