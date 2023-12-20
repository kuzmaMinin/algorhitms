import { IQueue } from '../../types/structures/IQueue';
import LinkedList from '../LinkedList/LinkedList';

export default class Queue implements IQueue {
  linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  peek() {
    return this.isEmpty() ? null : this.linkedList.head?.value;
  }

  enqueue(value) {
    this.linkedList.add(value);
  }

  dequeue() {
    return this.linkedList.deleteHead();
  }

  isEmpty() {
    return this.linkedList.head === null;
  }
}
