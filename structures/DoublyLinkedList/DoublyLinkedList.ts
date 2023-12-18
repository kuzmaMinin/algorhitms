import { IDoublyLinkedList } from '../../types/ILinkedList';
import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/Comparator';

export default class DoublyLinkedList implements IDoublyLinkedList {
  head: DoublyLinkedListNode | null;

  tail: DoublyLinkedListNode | null;

  compare;

  constructor(compareCallback?) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(compareCallback);
  }

  add(value) {
    const node = new DoublyLinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;

      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  insert(value, rawIndex) {
    const targetIndex = rawIndex < 0 ? 0 : rawIndex;
    if (targetIndex === 0) {
      this.prepend(value);
    } else {
      let index = 1;
      const targetNode = new DoublyLinkedListNode(value);
      let currentNode = this.head;

      while (currentNode && index !== targetIndex) {
        currentNode = currentNode.next;
        index += 1;
      }

      if (currentNode) {
        targetNode.next = currentNode.next;
        currentNode.next!.prev = targetNode;
        targetNode.prev = currentNode;
        currentNode.next = targetNode;
      } else if (this.tail) {
        this.tail.next = targetNode;
        targetNode.prev = this.tail;
        this.tail = currentNode;
      } else {
        this.head = targetNode;
        this.tail = targetNode;
      }
    }

    return this;
  }

  prepend(value) {
    const node = new DoublyLinkedListNode(value, this.head);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;

      return;
    }

    this.head.prev = node;
    this.head = node;
  }

  remove(value) {
    if (!this.head) {
      return false;
    }

    let current: DoublyLinkedListNode | null = this.head;

    while (current && current.value !== value) {
      current = current.next;
    }

    if (current) {
      if (current === this.head) {
        this.head = this.head.next;
        this.head!.prev = null;

        return true;
      }

      if (current === this.tail) {
        this.tail = this.tail.prev;
        this.tail!.next = null;

        return true;
      }

      const prevNode = current.prev;
      const nextNode = current.next;

      prevNode!.next = nextNode;
      nextNode!.prev = prevNode;
    }

    return false;
  }

  search(value) {
    if (!this.head) {
      return false;
    }

    let node: DoublyLinkedListNode | null = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }

      node = node.next;
    }

    return false;
  }

  reverse() {
    let current = this.head;
    let prev: DoublyLinkedListNode | null = null;
    let next: DoublyLinkedListNode | null = null;

    while (current) {
      prev = current.prev;
      next = current.next;

      current.prev = next;
      current.next = prev;

      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }

  deleteHead() {
    if (!this.head) {
      return false;
    }

    if (!this.head.next) {
      this.head = null;
      this.tail = null;

      return true;
    }

    this.head = this.head.next;
    this.head.prev = null;

    return true;
  }

  deleteTail() {
    if (!this.tail) {
      return false;
    }

    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }

    return true;
  }

  fromArray(data) {
    data.forEach((item) => this.add(item));
    return this;
  }

  toArray() {
    const resultArray = [];

    if (!this.head) {
      return resultArray;
    }

    let node: DoublyLinkedListNode | null = this.head;

    while (node) {
      resultArray.push(node.value);
      node = node.next;
    }

    return resultArray;
  }
}
