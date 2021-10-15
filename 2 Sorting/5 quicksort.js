"use strict";

//Quick Sort - Using pivot element

const swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = function (arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (pivot > arr[j]) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

const quickSort = function (arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
};

const arr = [7, 8, 3, 6, 1, 4];
//          [3, 1, 4, 6, 8, 7] - first swap where 4 is sorter (pivot)
quickSort(arr, 0, arr.length - 1);
console.log(arr);
