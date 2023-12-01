import LinkedListNode from './linkedListNode';

export default class LinkedList {
  head = null;

  tail = null;

  add(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value) {
    const node = new LinkedListNode(value);

    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  search(value) {
    let node = this.head;

    while (node !== null && node.value !== value) {
      node = node.next;
    }

    return node !== null;
  }

  remove(value) {
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
}
