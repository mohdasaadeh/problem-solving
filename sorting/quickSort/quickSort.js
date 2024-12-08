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

  return startIndex + pivot;
}

function quickSort(arr) {
  let sortedArr = arr;

  function quickSortInner(arr, startIndex, endIndex) {
    if (endIndex < startIndex) return;

    let pivotIndex = pivot(arr, startIndex, endIndex);

    quickSortInner(arr, startIndex, pivotIndex - 1);
    quickSortInner(arr, pivotIndex + 1, endIndex);
  }

  quickSortInner(sortedArr, 0, sortedArr.length - 1);

  return sortedArr;
}

console.log(quickSort([5, 10, 20, 44, 2, 3, 16, 17, 50]));
console.log(quickSort([2, 6, 55, 1, 4]));
