function myPivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let pivot = 0;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < arr[startIndex]) {
      pivot++;

      [arr[startIndex + pivot], arr[i]] = [arr[i], arr[startIndex + pivot]];
    }
  }

  if (pivot !== startIndex) {
    arr.splice(startIndex + pivot + 1, 0, arr[startIndex]);
    arr.splice(startIndex, 1);
  }

  return startIndex + pivot;
}

console.log(myPivot([5, 1, 10, 3, 2, 7]));
console.log(myPivot([5, 1, 10, 3, 2, 7], 2));
