function mySomeRecursive(arr, cb) {
  if (!arr.length) return false;

  if (cb(arr[0])) return true;

  return mySomeRecursive(arr.slice(1), cb);
}

const isOdd = (val) => val % 2 !== 0;

console.log(mySomeRecursive([1, 2, 3, 4], isOdd)); // true
console.log(mySomeRecursive([4, 6, 8, 9], isOdd)); // true
console.log(mySomeRecursive([4, 6, 8], isOdd)); // false
console.log(mySomeRecursive([4, 6, 8], (val) => val > 10)); // false
