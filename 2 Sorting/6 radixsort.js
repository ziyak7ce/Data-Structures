'use strict';

//Radix Sort

//Returns digit at specified index(n), eg, 4953, 2 -> 9
const getDigit = function (num, n) {
  return Math.floor(Math.abs(num) / Math.pow(10, n)) % 10;
};
// getDigit(4953, 2) 4953 / 100 = 49 % 10 = 9

//Return number of digits in number, eg, 512 -> 3
const digitCount = function (num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

//Return the digit with most digits in it amoung array of digits
const mostDigits = function (arr) {
  let maxDigits = arr[0];

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
};

//Radix Sort - Implementation
const radixSort = function (arr) {
  const n = mostDigits(arr);

  for (let k = 0; k < n; k++) {
    const bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      bucket[digit].push(arr[i]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
};

let array = [1, 52, 235, 97241, 453, 12476, 228, 99, 33, 553];
console.log(radixSort(array));
