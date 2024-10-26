function myFindAveragePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const arrAvg = (arr[left] + arr[right]) / 2;

    if (arrAvg === avg) {
      return true;
    } else if (arrAvg > avg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.log(myFindAveragePair([1, 2, 3], 2.5));
console.log(myFindAveragePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(myFindAveragePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(myFindAveragePair([], 4));
