"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Enqueue
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // DEQUEUE
  dequeue() {
    if (!this.first) return null;
    let tempNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return tempNode.value;
  }
}

const queue = new Queues();

// ENQUEUE
queue.enqueue("FIRST");
queue.enqueue("SECOND");
queue.enqueue("THIRD");
queue.enqueue("FOURTH");
queue.enqueue("FIFTH");
queue.enqueue("LAST");

console.log(queue);

// DEQUEUE
queue.dequeue();
console.log(queue);

/* BIG O of QUEUES
INSERTION -- O(1)
REMOVAL -- O(1)
Searching -- O(N)
ACCESS -- O(N)
 */
