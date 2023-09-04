"use strict";
// Doubly Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let pushedNode = new Node(val);
    if (this.length === 0) {
      this.head = pushedNode;
      this.tail = pushedNode;
    } else {
      this.tail.next = pushedNode;
      pushedNode.prev = this.tail;
      this.tail = pushedNode;
    }
    this.length++;
    return this;
  }

  // POP ()
  pop(val) {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // SHIFTING()
  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shiftedNode;
  }

  // UNSHIFTING
  unshift(val) {
    let unshiftNode = new Node(val);
    if (this.length === 0) {
      this.head = unshiftNode;
      this.tail = unshiftNode;
    } else {
      this.head.prev = unshiftNode;
      unshiftNode.next = this.head;
      this.head = unshiftNode;
    }
    this.length++;
    return this;
  }

  // GET()
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    if (index <= this.length / 2) {
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count >= this.length / 2) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // SET()
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // INSERT()
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let insertNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = insertNode;
    insertNode.prev = beforeNode;

    insertNode.next = afterNode;
    afterNode.prev = insertNode;

    this.length++;
    return true;
  }

  // REMOVE
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}

const list = new doublyLinkedList();
// PUSH NODE
list.push("First Item");
list.push(25);
console.log(list);
list.push(50);
console.log(list);
list.push("LAST ITEM");
console.log(list);
list.push("FINAL ITEM");

// POP  NODE
list.pop();
console.log(list);

// SHIFTING Node
// The removed head should not have any thing next to it --> removedHead.next = null;
// THe new head(removedHead.next = newHead) should not have any thing previous to it --> newHead.prev = null(this shld be the starting point of the list)
list.shift();
console.log(list);

// UNSHIFTING
list.unshift("1st Unshift");
console.log(list);

// GET
console.log(list.get(2));

// INSERT
console.log(list.insert(2, "Hello Pardon"));

// REMOVE
console.log(list.remove(2));
