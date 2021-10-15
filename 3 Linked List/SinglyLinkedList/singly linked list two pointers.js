'use strict';

//Singly Linked List - Via implementing two pointers

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
    this.tail = null;
    this.length = 0;
  }

  //Add node at the end of the list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //Remove node from the end of the list
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let previous = current;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //Add node to the front of the list
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Remove node from the front of the list
  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  //Return the node at specific index
  get(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  //Update node at specific index
  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      this.length++;
      return true;
    }
    return false;
  }

  //Add new node to specific index
  insert(val, index) {
    if (index < 0 || index > length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val); //if as a last item and not THE last item

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //Remove node at specific index
  remove(index) {
    if (index < 0 || index >= length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    const remove = prev.next;
    prev.next = remove.next;
    this.length--;
    return remove;
  }

  //Reverse List: in-place(no extra node)
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();

// list.push(1);
// list.push(2);
// list.push(10);

list.insert(10, 0);
list.insert(20, 1);
list.insert(30, 2);

console.log(list);
