function searchSortedV2(arr, search) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start !== end) {
    if (search <= arr[middle]) {
      end = middle;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === search) return middle;

  return -1;
}

console.log(searchSortedV2([1, 2, 3, 4, 5], 5));
console.log(searchSortedV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(searchSortedV2([-10, -3, -2, 4, 5, 6, 7, 8, 9, 10], -2));
console.log(searchSortedV2([-10, -3, -2, 4, 5, 6, 7, 8, 9, 10], -20));
