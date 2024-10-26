function myCountUniqueValues(arr) {
  let i = 0;
  let j = 1;
  let count = 1;

  if (!arr.length) return 0;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i = j;

      count++;
    }

    j++;
  }

  return count;
}

console.log(myCountUniqueValues([1, 1, 1, 2, 3, 4, 4, 7, 7]));
console.log(myCountUniqueValues([-1, -1, 1, 2, 4, 4]));
console.log(myCountUniqueValues([]));
