'use strict';

//Stack using singly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Add value to stack
  push(val) {
    let newNode = new Node(val);

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

  //Return and remove the top most value of stack
  pop() {
    if (this.head === null) return 'Stack Underflow';

    let current = this.head;
    let previous = null;

    if (current.next === null) {
      this.head = null;
    } else {
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }

      previous.next = null;
    }

    this.length--;
    return current.val;
  }

  //Return the top most value of stack
  peek() {
    if (this.head === null) return 'Stack Underflow';

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    return current.val;
  }

  //Return stack size
  size() {
    return this.length;
  }

  //Check whether stack is empty or not
  isEmpty() {
    return this.head === null;
  }

  //Print stack
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

console.log('Peek: ' + stack.peek(), 'Size: ' + stack.size());*/
