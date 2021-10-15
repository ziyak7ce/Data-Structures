'use strict';

//Doubly Linked List

//Node Class - To create Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//DLL Class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Add node to the end of the list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //Remove node form the end of the list
  pop() {
    if (!this.head) {
      return null;
    }
    const temp = this.tail;
    if (this.head === this.tail) {
      //or this.length === 1
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev; //this.tail.prev
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  //Add node to the front of the list
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Remove node from starting of the list
  shift() {
    if (!this.head) {
      return null;
    }
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next; //this.head.next
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return this;
  }

  //Get node at specific index
  get(index) {
    if (index < 0 || index > this.length) return null;
    if (!this.head) return null;

    //To decide to start from head or tail for faster performance
    if (index <= Number.parseInt(this.length / 2)) {
      let current = this.head;
      let count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let current = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  //Update node at specific index
  set(val, index) {
    const nodeToUpdate = this.get(index);
    if (nodeToUpdate !== null) {
      nodeToUpdate.val = val;
      return true;
    }
    return false;
  }

  //Insert new node at specific index
  insert(val, index) {
    if (index < 0 || index > this.length) return null;
    if (!this.head) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val); //if as a last item and not THE last item

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);

    this.length++;
    return this;
  }

  //Remove node from specific index
  remove(index) {
    if (index < 0 || index >= this.length) return 'Invalid Index';
    if (!this.head) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop(); //if as a last item and not THE last item

    const beforeNode = this.get(index - 1);
    const current = beforeNode.next;

    beforeNode.next = current.next;
    current.next.prev = beforeNode;
    current.next = null;
    current.prev = null;

    this.length--;
    return this;
  }

  //Clear List
  clearList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const list = new DoublyLinkedList();

list.push(20);
console.log(list);

list.remove(0);
console.log(list);
