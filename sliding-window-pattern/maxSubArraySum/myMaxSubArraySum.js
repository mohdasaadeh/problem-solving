function myMaxSubArraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0;
  let tempMax = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  tempMax = max;

  for (let i = 1; i < arr.length; i++) {
    tempMax = tempMax - arr[i - 1] + arr[i + num - 1];

    if (tempMax > max) {
      max = tempMax;
    }
  }

  return max;
}

console.log(myMaxSubArraySum([100, 200, 300, 400], 2)); // 700
console.log(myMaxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(myMaxSubArraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(myMaxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(myMaxSubArraySum([2, 3], 3)); // null
