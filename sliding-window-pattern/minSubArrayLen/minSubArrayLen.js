function minSubArrayLen(arr, sum) {
  if (!arr.length) return 0;

  let tempMin = 0;
  let subArrLen = Infinity;
  let start = 0;
  let end = 0;

  while (start < arr.length) {
    if (tempMin < sum && end < arr.length) {
      tempMin += arr[end];
      end++;
    } else if (tempMin >= sum) {
      subArrLen = Math.min(subArrLen, end - start);
      tempMin -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return subArrLen !== Infinity ? subArrLen : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
