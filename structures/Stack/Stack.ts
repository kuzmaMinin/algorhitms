import LinkedList from '../LinkedList/LinkedList';
import { IStack } from '../../types/structures/IStack';

export default class Stack implements IStack {
  linkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  peek() {
    return this.isEmpty() ? null : this.linkedList.head?.value;
  }

  push<T>(value: T) {
    this.linkedList.add(value);
  }

  pop() {
    return this.linkedList.deleteTail();
  }

  isEmpty() {
    return this.linkedList.head === null;
  }

  toArray() {
    return this.linkedList.toArray();
  }
}

/**
 * Time complexity:
 *    Access  O(n)
 *    Search  O(n)
 * Insertion  O(1)
 *  Deletion  O(1)
 */
