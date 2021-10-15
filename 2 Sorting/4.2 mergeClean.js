'use strict';

//Merge Sort - Using NO built in functions

function merge(arr, l, m, r) {
  //Suppose, arr.length = 5, so l = 0, m = 2, r = 4
  let n1 = m - l + 1; //2 - 0 + 1 = 3 (length of arr1 ie, 0, 1, 2)
  let n2 = r - m; //4 - 2 = 2 (length of arr2 ie, 3, 4)

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i]; //0, 1, 2 (l = 0)
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j]; //3, 4 (m = 2)
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let m = parseInt((l + r) / 2); //parseInt cz, js calc is imprecise

  //let m = l + parseInt((r - l) / 2); --- use this!!!
  /*It avoids overflow in this specific implementation, which operates under the guarantees that L and R are non-negative
    and L <= R. Under these guarantees it should be obvious that R - L does not overflow and L + ((R - L) / 2) does not
    overflow either.*/
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

const arr = [1, 9, 4, 2, 6, 8];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
