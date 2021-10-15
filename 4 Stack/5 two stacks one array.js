'use strict';

/*Implementation of twoStacks should use only one array, i.e., both stacks should use
the same array for storing elements.

Following functions must be supported by twoStacks.
push1(int x) –> pushes x to first stack 
push2(int x) –> pushes x to second stack
pop1() –> pops an element from first stack and return the popped element 
pop2() –> pops an element from second stack and return the popped element*/

// Method 1: Divide the space in two halves
/*The problem with this method is inefficient use of array space. A stack push
operation may result in stack overflow even if there is space available in arr[].
For example, say the array size is 6 and we push 3 elements to stack1 and do not
push anything to second stack2. When we push 4th element to stack1, there will be
overflow even if we have space for 3 more elements in array.*/

class TwoStacks {
  constructor(n) {
    this.arr = new Array(n);
    this.size = n;
    this.top1 = Math.floor(n / 2) + 1;
    this.top2 = Math.floor(n / 2);

    /*for n = 5, top1 = 3 and top2 = 2
    push1 -> top1: arr[--top1] ie arr[2] till > 0
    push2 -> top2: arr[++top2] ie arr[3] till < n*/
  }

  push1(val) {
    // There is at least one empty space for new element

    if (this.top1 > 0) {
      this.top1--;
      this.arr[this.top1] = val;
    } else {
      console.log('Stack Overflow');
      return;
    }
  }

  push2(val) {
    // There is at least one empty space for new element

    if (this.top2 < this.size - 1) {
      this.top2++;
      this.arr[this.top2] = val;
    } else {
      console.log('Stack Overflow');
      return;
    }
  }

  pop1() {
    if (this.top1 <= this.size / 2) {
      let result = this.arr[this.top1];
      this.arr[this.top1] = Infinity;
      this.top1++;
      return result;
    } else {
      return 'Stack Underflow';
    }
  }

  pop2() {
    if (this.top2 >= Math.floor(this.size / 2) + 1) {
      let result = this.arr[this.top2];
      this.arr[this.top2] = Infinity;
      this.top2--;
      return result;
    } else {
      return 'Stack Underflow';
    }
  }
}

/*const ts = new TwoStacks(5);
ts.push1(10);
ts.push2(5555);
ts.pop1();
ts.pop2();
console.log(ts.arr);*/

//-----------------------------------------------------------------------------------

//Method 2: A space efficient solution
/*It doesn’t cause an overflow if there is space available in arr[].
-> The idea is to start two stacks from two extreme corners of arr[].
-> stack1 starts from the leftmost element, the first element in stack1 is pushed
at index 0.
-> The stack2 starts from the rightmost corner, the first element in stack2 is pushed
at index (n-1).
-> Both stacks grow (or shrink) in opposite direction. To check for overflow, all we need
to check is for space between top elements of both stacks*/

class TwoStacksEfficient {
  constructor(n) {
    this.arr = new Array(n);
    this.size = n;
    this.top1 = -1;
    this.top2 = this.size;
  }

  push1(val) {
    // There is at least one empty space for new element
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = val;
    } else {
      console.log('Stack Overflow');
      return;
    }
  }

  push2(val) {
    // There is at least one empty space for new element
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = val;
    } else {
      console.log('Stack Overflow');
      return;
    }
  }

  pop1() {
    if (this.top1 >= 0) {
      let result = this.arr[this.top1];
      this.arr[this.top1] = Infinity;
      this.top1--;
      return result;
    } else {
      console.log('Stack Underflow');
      return;
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      let result = this.arr[this.top2];
      this.arr[this.top2] = Infinity;
      this.top2++;
      return result;
    } else {
      console.log('Stack Underflow');
      return;
    }
  }
}

/*const tsEfficient = new TwoStacksEfficient(5);
tsEfficient.push1(10);

tsEfficient.push2(20);
tsEfficient.push2(30);

tsEfficient.push1(40);

tsEfficient.push2(50);
//10, 40, 50, 30, 20

console.log(tsEfficient.arr);

tsEfficient.pop1();

console.log(tsEfficient.arr);

tsEfficient.push2(9999);

console.log(tsEfficient.arr);*/
