"use strict";

// Insertion Sort - Sort array from front to end

const insertionSort = function (arr) {
  let key, i, j;

  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort([4, 6, 41, 5, 1, 9]));
