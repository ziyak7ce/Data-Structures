'use strict';

//Stack using doubly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Add value to stack
  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  //Return and remove top most value of stack
  pop() {
    if (this.head === null) return 'Stack Underflow';

    let result = this.tail;
    if (this.head === this.tail) {
      //or this.length === 1 only one elmeent
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      result.prev = null;
    }
    this.length--;
    return result;
  }

  //Return top most value of stack
  peek() {
    if (this.head === null) return 'Stack Underflow';

    return this.tail.val;
  }

  //Return stack size
  size() {
    return this.length;
  }

  //Check whether stack is empty or not
  isEmpty() {
    return this.head === null;
  }

  //Print Stack
  printStack() {
    let current = this.head;
    let result = '';

    while (current !== null) {
      result += current.val + ' ';
      current = current.next;
    }

    return result;
  }
}

/*const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log('Peek: ' + stack.peek());
console.log(stack.printStack());

stack.pop();
stack.pop();

console.log(stack.printStack());

stack.push(40);
stack.push(50);

console.log(stack.printStack());

stack.pop();

console.log(stack.printStack());

console.log('Peek: ' + stack.peek());*/
