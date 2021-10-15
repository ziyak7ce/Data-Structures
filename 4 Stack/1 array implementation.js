'use strict';

//Dynamic Stack Implementation - Size of stack increase with data added
//LIFO

class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  //Add value to stack
  push(val) {
    this.top++;
    this.stack[this.top] = val;
  }

  //Return and remove top most value of stack
  pop() {
    if (this.top < 0) return 'Stack Underflow';

    let result = this.stack[this.top];
    this.stack.length--;
    this.top--;
    return result;
  }

  //Return the top most value of stack
  peek() {
    if (this.top < 0) return 'Stack Underflow';

    return this.stack[this.top];
  }

  //Return stack size
  size() {
    return this.top + 1;
  }

  //Check whether stack is empty or not
  isEmpty() {
    return this.top < 0;
  }

  //Print Stack
  printStack() {
    if (this.top < 0) {
      return 'Stack is empty';
    }
    let result = '';
    for (let i = 0; i <= this.top; i++) {
      result += this.stack[i] + ' ';
    }
    return result;
  }
}

/* let stack = new Stack();
console.log(stack.isEmpty());
console.log('Stack: ' + stack.printStack());ṇ

console.log('Push');
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size());
console.log('Stack: ' + stack.printStack());

console.log('Pop');
console.log(stack.pop());
console.log(stack.pop());

console.log('Stack: ' + stack.printStack());

console.log('Pop');
console.log(stack.pop());
console.log(stack.pop()); */
