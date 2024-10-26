function mySumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }

  return undefined;
}

console.log(mySumZero([-2, -1, 0, 2, 4]));
console.log(mySumZero([-1, 0, 3]));
