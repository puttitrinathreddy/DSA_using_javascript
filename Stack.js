"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
    this.first = null;
    this.size = 0;
  }

  // PUSH
  push(val) {
    let pushNode = new Node(val);
    if (!this.first) {
      this.first = pushNode;
      this.last = pushNode;
    } else {
      let tempNode = this.first;
      this.first = pushNode;
      pushNode.next = tempNode;
    }
    return ++this.size;
  }

  // POP
  pop() {
    if (!this.first) return null;
    let popNode = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popNode.next;
    }
    this.size--;
    return popNode;
  }
}

const stack = new Stack();
// STACK PUSH
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);

// STACK POP
console.log(stack.pop());
console.log(stack);

// BIG O of STACKS
// make sure pushing and popping both should have a constant time
// Insertion - o(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)
