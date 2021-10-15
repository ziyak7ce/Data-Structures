'use strict';

//Binary Search - Returns the array index, and if value's not present, then -1
//Note: Works for already sorted array only

const binarySearch = function (arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) return middle;

    if (val < arr[middle]) {
      right = --middle;
    } else {
      left = ++middle;
    }
  }
  return -1;
};

const array = [1, 2, 4, 5, 7];
console.log(binarySearch(array, 2));

//----------------------------------------------------------------------------------

//Another Implementation

const binarySearch_ = function(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
}

console.log(binarySearch_(array, 4));