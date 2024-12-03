function myInsertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      let index;

      for (let j = 0; j <= i; j++) {
        if (arr[i + 1] < arr[j]) {
          index = j;

          break;
        }
      }

      if (index !== undefined) {
        arr.splice(index, 0, arr[i + 1]);
        arr.splice(i + 2, 1);
      }
    }
  }

  return arr;
}

console.log(myInsertionSort([2, 5, 10, 3, 2, 1]));
console.log(myInsertionSort([2, 1, 9, 76, 4]));
