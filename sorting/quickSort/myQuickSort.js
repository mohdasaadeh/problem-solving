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

function myQuickSort(arr) {
  let sortedArr = arr;

  function myQuickSortInner(arr, startIndex, endIndex) {
    if (startIndex >= arr.length - 1 || endIndex <= startIndex) return;

    let pivotIndex = pivot(arr, startIndex, endIndex);

    myQuickSortInner(arr, startIndex, pivotIndex - 1);
    myQuickSortInner(arr, pivotIndex + 1, arr.length - 1);
  }

  myQuickSortInner(sortedArr, 0, sortedArr.length - 1);

  return sortedArr;
}

console.log(myQuickSort([5, 10, 20, 44, 2, 3, 16, 17, 50]));
console.log(myQuickSort([2, 6, 55, 1, 4]));
