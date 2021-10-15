'use strict';

//Linear Search - Returns the array index, and if value's not present, then -1

const linearSearch = function (arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

const array = [1, 2, 4, 55, 3, 51];
console.log(linearSearch(array, 4));
