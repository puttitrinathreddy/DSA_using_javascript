"use strict";
// // // Checking palindrome using stacks
// // const letters = [];
// // const word = "racecar";
// // let rWord = "";

// // for (let i = 0; i < word.length; i++) {
// //   letters.push(word[i]);
// // }

// // console.log(letters);

// // for (let i = 0; i < word.length; i++) {
// //   rWord += letters.pop();
// // }
// // if (rWord === word) {
// //   console.log("It is a palindrome");
// // } else {
// //   console.log("it is not a palindrome");
// // }
// // console.log(rWord);

// // // const addUpTo = function (n) {
// // //   let total = 0;
// // //   for (let i = 0; i <= n; i++) {
// // //     total += i;
// // //   }
// // //   console.log(total);
// // // };

// // // addUpTo(10);

// // // BIG O Notation

// // const pair = function (n) {
// //   for (let i = 0; i < n; i++) {
// //     for (let j = 0; j < n; j++) {
// //       console.log(i, j);
// //     }
// //   }
// // };

// // pair(5); // BIG O(n‸2) O(n*n)

// // const logAtLeast5 = function (n) {
// //   for (let i = 1; i <= Math.min(5, n); i++) {
// //     console.log(i);
// //   }
// // };
// // logAtLeast5(10); // BIG O(1)

// // const logAtLeast10 = function (n) {
// //   for (let i = 1; i <= Math.max(10, n); i++) {
// //     console.log(i);
// //   }
// // };
// // logAtLeast10(10); // BIG O(n)

// // function onlyElementsAtEvenIndex(array) {
// //   console.log(array.length);
// //   var newArray = Array(Math.ceil(array.length / 2));
// //   console.log(newArray);
// //   for (var i = 0; i < array.length; i++) {
// //     if (i % 2 === 0) {
// //       newArray[i / 2] = array[i];
// //     }
// //   }
// //   return newArray;
// // }

// // console.log(onlyElementsAtEvenIndex([2, 5, 4, 8, 5, 7])); // O(n)

// // const arrTotal = function (arr) {
// //   let total = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     total += arr[i];
// //   }
// //   return total;
// // };

// // console.log(arrTotal([2, 1, 3, 7, 6]));

// // class student {
// //   constructor(firstName, lastName, year) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.grade = year;
// //   }
// // }

// // let firstStudent = new student("trinath", "reddy", 4);
// // let secondStudent = new student("sumit", "kumar", 3);

// class student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.lates = 0;
//     this.scores = [];
//   }
//   fullName() {
//     return `Your full name is ${this.firstName} ${this.lastName}.`;
//   }
//   lateCounts() {
//     this.lates += 1;
//     if (this.lates >= 3) {
//       return `YOU ARE EXPELLED!!!`;
//     }
//     return `${this.firstName} ${this.secondName} was late ${this.lates} times`;
//   }
//   addScores(score) {
//     this.scores.push(score);
//     return this.scores;
//   }
//   calcAvg() {
//     let sum = this.scores.reduce((acc, sum) => (acc += sum), 0);
//     return sum / this.scores.length;
//   }
// }

// let myStudent = new student("trinath", "reddy", 4);

// console.log(myStudent.lateCounts());
// console.log(myStudent.lateCounts());
// console.log(myStudent.addScores(80));
// console.log(myStudent.addScores(70));
// console.log(myStudent.addScores(90));
// console.log(myStudent.calcAvg());

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;
//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(2, 2);
// const p2 = new Point(5, 5);

// console.log(Point.distance(p1, p2));

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
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let nextNode;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
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
