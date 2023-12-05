import LinkedListNode from './linkedListNode';
import { ILinkedList } from '../../types/ILinkedList';
import { ILinkedListNode } from '../../types/ILinkedListNode';

export default class LinkedList implements ILinkedList {
  head: ILinkedListNode | null = null;

  tail: ILinkedListNode | null = null;

  add(value: unknown) {
    const node = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value: unknown) {
    const node = new LinkedListNode(value);

    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  search(value: unknown) {
    let node = this.head;

    while (node !== null && node.value !== value) {
      node = node.next;
    }

    return node !== null;
  }

  remove(value: unknown) {
    if (this.head === null) {
      return false;
    }

    let node = this.head;

    if (node.value === value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return true;
    }

    while (node.next && node.next.value !== value) {
      node = node.next;
    }

    if (node.next) {
      if (node.next === this.tail) {
        this.tail = node;
        this.tail.next = null;
      } else {
        node.next = node.next.next;
      }
    }
    return false;
  }

  insert(value: unknown, rawIndex: number) {
    const index = rawIndex < 0 ? 0 : rawIndex;

    if (rawIndex === 0) {
      this.prepend(value);
    } else {
      let counter = 1;
      const targetNode = new LinkedListNode(value);
      let currentNode = this.head;

      while (currentNode && counter !== index) {
        currentNode = currentNode.next;
        counter += 1;
      }

      if (currentNode) {
        targetNode.next = currentNode.next;
        currentNode.next = targetNode;
      } else if (this.tail) {
        this.tail.next = targetNode;
        this.tail = targetNode;
      } else {
        this.head = targetNode;
        this.tail = targetNode;
      }
    }
    return this;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }

  deleteTail() {
    if (!this.tail) {
      return false;
    }

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    }

    let node = this.head;

    while (node?.next && node.next.next !== null) {
      node = node.next;
    }

    if (node) {
      node.next = null;
      this.tail = node;
      return true;
    }

    return false;
  }

  deleteHead() {
    if (this.head === null) {
      return false;
    }

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return true;
  }

  fromArray(data) {
    data.forEach((item) => this.add(item));

    return this;
  }

  toArray() {
    const linkedListArray = [];

    if (this.head === null) {
      return linkedListArray;
    }

    let node: ILinkedListNode | null = this.head;

    while (node) {
      linkedListArray.push(node.value);
      node = node.next;
    }

    return linkedListArray;
  }
}
