function myProductOfArray(arr) {
  if (!arr.length) return 0;

  if (arr.length === 1) return arr[0];

  return arr[0] * myProductOfArray(arr.slice(1));
}

console.log(myProductOfArray([1, 2, 3])); // 6
console.log(myProductOfArray([1, 2, 3, 10])); // 60
