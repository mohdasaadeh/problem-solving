function myMaxSortedSubArraySum(arr, num) {
  let max = null;

  if (arr.length < num) return null;

  for (let i = 0; i < arr.length; i++) {
    let tempMax = 0;

    for (let j = i; j < num + i; j++) {
      tempMax = tempMax + arr[j];
    }

    if (max === null || tempMax > max) {
      max = tempMax;
    }
  }

  return max;
}

console.log(myMaxSortedSubArraySum([1, 2, 3, 4, 5, 6], 3));
console.log(myMaxSortedSubArraySum([1, 1, 2, 2, 3, 3], 2));
