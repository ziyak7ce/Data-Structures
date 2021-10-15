'use strict';

//Bubble Sort - Sort and swap two values in each iteration
//Unoptimized, simple solution

const bubbleSortUOpt = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

//----------------------------------------------------------------------------------

//Optimized, noSwap solution
const bubbleSortOpt = function (arr) {
  let noSwap;

  for (let i = 0; i < arr.length - 1; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
};

const array = [52, 21, 53, 1, 3, 4];
console.log(bubbleSortOpt(array));
