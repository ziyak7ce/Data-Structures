'use strict';

//Singly Linked List - Using only one pointer (head)

//Node Class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//SLL Class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Insert node at the end of the SinglyLinkedList, insertAtEnd
  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  //Remove node from the end of the SinglyLinkedList, removeFromEnd
  pop() {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    let previous = null;

    //For case when there is only one node, else later "previous.next" will throw error
    if (current.next === null) {
      this.head = null;
      this.length--;
      return current;
    }

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.length--;
    return current;
  }

  //Insert node at the beginning of the SinglyLinkedList, insertAtBegin
  unshift(val) {
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //Remove node from the beginning of the SinglyLinkedList, removeFromBegin
  shift() {
    let current = this.head;

    if (current) {
      this.head = current.next;
      current.next = null;
      this.length--;
    }
    return current;
  }

  //Insert node at certain position
  insert(val, pos) {
    if (pos < 0) {
      pos = 0;
    }
    if (pos > this.length) {
      pos = this.length;
    }

    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else if (pos === 0) {
      //Add to the beginning
      newNode.next = this.head;
      this.head = newNode;
    } else {
      //Add at specified location
      let current = this.head;
      for (let i = 1; i < pos; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }

    this.length++;
  }

  //Remove first matched node from the SinglyLinkedList
  removeMatched(val) {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    let previous = null;

    //Removing first node
    if (current.val === val) {
      this.head = current.next;
      current.next = null;
      this.length--;
      return current;
    }

    //Removing node in between
    while (current.next !== null) {
      previous = current;
      current = current.next;

      if (current.val === val) {
        previous.next = current.next;
        current.next = null;
        this.length--;
        return current;
      }
    }

    return -1;
  }

  //Remove the node at given position
  remove(pos) {
    if (this.head === null) {
      return null;
    }

    if (pos < 0) {
      pos = 0;
    }
    if (pos >= this.length) {
      pos = this.length - 1;
    }

    if (pos === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 1; i < pos; i++) {
        console.log(current.val);
        current = current.next;
      }
      console.log(current.val);

      current.next = current.next.next;
    }
    this.length--;
  }

  //Return current length of the SinglyLinkedList
  getLength() {
    return this.length;
  }

  //Calculate Length - Using iteration
  findLengthIterative() {
    let current = this.head;
    let len = 0;

    while (current !== null) {
      len++;
      current = current.next;
    }

    return len;
  }

  //Calculate Length - Using recursion
  findLengthRecursive(node) {
    if (node === null) return 0;

    return 1 + this.findLengthRecursive(node.next);
  }

  //Find first value and return its position - iteration
  getPositionIteration(val) {
    if (this.head === null) {
      return -1;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (val === current.val) {
        return count;
      }
      count++;
      current = current.next;
    }

    return -1;
  }

  //Find first value and return its position - recursion
  searchPositionRecursion(node, val) {
    if (node === null) {
      return false;
    }

    if (node.val === val) {
      return true;
    }

    return this.getPositionRecursion(node.next, val);
  }

  //Return a string representation of the SinglyLinkedList
  getList() {
    let list = '[';

    if (this.head === null) {
      return list + ']';
    }

    let current = this.head;

    while (current) {
      list += `${current.val},`;
      current = current.next;
    }

    return list + ']';
  }

  //Remove everything and reset SinglyLinkedList
  clearList() {
    this.head = null;
    this.length = 0;
  }

  //Reverse the entire list - in place
  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
    return this;
  }
}

//10 -> 20 -> 30

const list = new SinglyLinkedList();

list.unshift(10);
list.unshift(30);

list.push(40);

list.insert(44, 20);

console.log(list.getList());

list.reverse();

console.log(list.getList());
