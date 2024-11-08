function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0;
  let tempMax = 0;
  let start = 0;
  let end = num;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  tempMax = max;

  while (end < arr.length) {
    tempMax = tempMax + arr[end] - arr[start];

    if (tempMax > max) {
      max = tempMax;
    }

    end++;
    start++;
  }

  return max;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubArraySum([2, 3], 3)); // null
