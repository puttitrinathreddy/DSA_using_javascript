"use strict";

// Singly Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push Method
  push(val) {
    let newPushNode = new Node(val);
    if (!this.head) {
      this.head = newPushNode;
      this.tail = this.head;
    } else {
      this.tail.next = newPushNode;
      this.tail = newPushNode;
    }
    this.length++;
    return this;
  }

  // Pop Method
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Shift
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // Unshift
  unshift(val) {
    let newUnshiftNode = new Node(val);
    if (!this.head) {
      this.head = newUnshiftNode;
      this.tail = this.head;
    } else {
      newUnshiftNode.next = this.head;
      this.head = newUnshiftNode;
    }
    this.length++;
    return this;
  }

  // Get
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Set
  set(index, val) {
    let foundIndex = this.get(index);
    if (foundIndex) {
      foundIndex.val = val;
      return true;
    }
    return false;
  }

  // INSERT
  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let insertNode = new Node(val);
    let insertPrevNode = this.get(index - 1);
    let tempNode = insertPrevNode.next;

    insertPrevNode.next = insertNode;

    insertNode.next = tempNode;
    this.length++;
    return true;
  }

  // Remove
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevRemoveNode = this.get(index - 1);
    let removedNode = prevRemoveNode.next;
    prevRemoveNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // Reverse
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let nextNode;
    let prevNode = null;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

// push
// list.push("Hello");
// list.push("EveryOne");
// list.push("Have");
// list.push("a good-day");
// pop
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// console.log(list);
///////////////////

// Shift
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// console.log(list);

// // Unshift
// list.unshift("hlw");
// list.unshift(":)");

// GET()
// console.log(list.length);
// console.log(list);
// console.log(list.get(4));

// SET()
// console.log(list.set(4, "HELLO :P"));
// console.log(list.get(4));

//INSERT();
// list.insert(6, "LAST ONE");
// console.log(list);
// console.log(list.get(0));

// REMOVE()
// list.remove();
// list.remove(2);
// console.log(list);

list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
// REVERSE()
list.print();
list.reverse();
list.print();

// The wrong way of assigning the value for the next node ↓

// const trial = new Node("hello");
// console.log(trial);
// trial.next = new Node("how");
// trial.next.next = new Node("are");
// trial.next.next.next = new Node("you");
// console.log(trial);
