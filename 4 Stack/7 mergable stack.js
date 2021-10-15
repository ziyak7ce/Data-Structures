'use strict';

/*If we use array implementation of the stack, then merge is not possible to do in O(1)
time as we have to do the following steps. 
a) Delete old arrays. 
b) Create a new array for s1 with a size equal to the size of the old array for s1 plus
size of s2. 
c) Copy old contents of s1 and s2 to new array for s1 
The above operations take O(n) time.*/

//-----------------------------------------------------------------------------------

//We can use doubly linked list to achieve O(1) merge operation
//merge(): Link the tail of second list to head of first list, and make head of second
//list as head of the whole

//We can also use circular linked list
//merge(): Link the top (next of last) of the second list to the top (next of last) of
//the first list. And makes last of the second list as last of the whole list.

//Using Doubly Linked List
//Same as "4 Doubly Linkedlist Implementation.js" - new is merge() method
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

  //Return and remove top most value from stack
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

  //Merge two list into one and destroy s1 and s2 to make s1 = s2 + s1 (s2 comes before s1)
  merge(stackTwo) {
    //linking two lists
    this.head.prev = stackTwo.tail;
    stackTwo.tail.next = this.head;
    this.head = stackTwo.head;

    //destroying s2 - reference of s2.tail is alive in s1 + s2
    stackTwo.tail = null;
    stackTwo.head = null;
    stackTwo.length = 0;
  }

  //Return the top most value from stack
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

/*let ms1 = new Stack();
let ms2 = new Stack();

ms1.push(1);
ms1.push(2);
ms1.push(3);

ms2.push(10);
ms2.push(20);
ms2.push(30);

ms1.merge(ms2);

console.log(ms1.printStack());*/
