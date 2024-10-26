function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    const tempMax = max - arr[i - 1] + arr[i + num - 1];

    if (tempMax > max) {
      max = tempMax;
    }
  }

  return max;
}

console.log(maxSubArraySum([1, 2, 3, 4, 5, 6], 3));
console.log(maxSubArraySum([1, 1, 2, 2, 3, 3], 2));
