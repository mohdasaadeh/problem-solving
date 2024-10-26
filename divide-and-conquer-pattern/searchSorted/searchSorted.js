function searchSorted(arr, search) {
  let indexOffset = 0;
  let splitArrLength = arr.length;

  while (splitArrLength > 1) {
    const middle = Math.floor(splitArrLength / 2);

    const firstArrLastEl = arr[indexOffset + middle - 1];

    if (search > firstArrLastEl) {
      splitArrLength = splitArrLength - middle;

      indexOffset += middle;
    } else {
      splitArrLength = middle;
    }
  }

  if (arr[indexOffset] === search) {
    return indexOffset;
  } else {
    return -1;
  }
}

console.log(searchSorted([1, 2, 3, 4, 5], 5));
console.log(searchSorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(searchSorted([-10, -3, -2, 4, 5, 6, 7, 8, 9, 10], -2));
