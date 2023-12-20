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

  push(value) {
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
