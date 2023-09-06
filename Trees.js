"use strict";
/* WHAT IS A TREE?
--> A data structure that consists of nodes in a parent / child 👩‍👦 relationship and the connections between these nodes are known as branches.
---> TREE TERMINOLOGY<---
** ROOT -- The top node in a tree.
** Child -- A node directly connected to another node when moving away from the Root.
** Parent -- The converse notion of a child.
** Siblings - A group of nodes with the same parent.
** Leaf -- A node with no children.
** Edge -- The connection between one node and another.

---> TREES Applications~ <---
* HTML DOM Tree.
* Network routing.
* Abstract Syntax Tree
* Artificial Intelligence
* Folders in operating system
* Json files

---->BINARY SEARCH TREES<----
===HOW BSTS WORK===
* Every parent node has at most two children.
* Every node to the left of a parent node is always less than < the parent.
* Every node to the right of a parent node is always greater > than the parent.

/// BINARY TREE PSEUDOCODE ///
==>> INSERTING A NODE <<==
-- Steps - Iteratively or Recursively --

  + Create a new node
  + Starting at the root
    * Check if there is a root, if not- the root now becomes that new node!
    * If there is a root, check if the value of the new node is greater than or less than the value of the root
    * If it is greater
      . Check to see if there is a node to the right
       . If there is, move to that node and repeat these steps
       . If there is not, add that node as the right property
    * If it is less
       . Check to see if there is a node to the left
        . If there is, move to that node and repeat these steps
        . If there is not, add that node as the left property
    * Return the newly modified tree

==>> FINDING A NODE IN A BST <<==
-- Steps - Iteratively or Recursively --
# Starting at the root
  * Check if there is a root, if not - we're done searching!
  * If there is a root, check if the value of the new node is the value we are looking for, if we found it, we're done!
  * If not, check to see if the value is greater than or less than the value of the root
  * If it is greater
    . Check to see if there is a node to the right
      . If there is, move to that node and repeat these steps
      . If there is not, we're done searching!
  * If it is less
      . Check to see if there is a node to the left
       . If there is, move to that node and repeat these steps
       . If there is not, we're done searching!
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return `NOT FOUND`;
    return current;
  }
}

const tree = new BinarySearchTree();

// INSERTING A NODE
tree.insert(10);
tree.insert(3);
tree.insert(50);
tree.insert(7);
tree.insert(20);
tree.insert(1);
tree.insert(15);
tree.insert(100);
console.log(tree);

// FINDING A NODE
console.log(tree.find(10));

/* BIG O of BST
 -- INSERTION - O(log n)
 -- SEARCHING - O(log n)
 
  not guaranteed only if the tree is sorted
*/
