'use strict';

//Stack Implementation - Using Helper Methods

class StackViaHelper {
  constructor() {
    this.stack = [];
  }

  //Add value to stack
  push(val) {
    this.stack.push(val);
  }

  //Return and remove top most value of stack
  pop(val) {
    if (this.stack.length === 0) return 'Stack Underflow';
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  //Return the top most value of stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  //Check whether stack is empty or not
  isEmpty() {
    return this.stack.length === 0;
  }

  //Print Stack
  printStack() {
    let result = '';

    for (let i = 0; i < this.stack.length; i++) {
      result += this.stack[i] + ' ';
    }

    return result;
  }
}

/*var stack = new StackViaHelper();

console.log(stack.isEmpty()); //true
console.log(stack.pop()); //underflow */
