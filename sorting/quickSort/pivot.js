function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let pivot = 0;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < arr[startIndex]) {
      pivot++;

      [arr[startIndex + pivot], arr[i]] = [arr[i], arr[startIndex + pivot]];
    }
  }

  [arr[startIndex + pivot], arr[startIndex]] = [
    arr[startIndex],
    arr[startIndex + pivot],
  ];

  console.log(arr);

  return startIndex + pivot;
}

console.log(pivot([5, 1, 10, 3, 2, 7]));
console.log(pivot([5, 1, 10, 3, 2, 7], 6));
