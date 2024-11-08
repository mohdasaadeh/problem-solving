function myRecursiveRange(num) {
  if (num === 0) return 0;

  return num + myRecursiveRange(num - 1);
}

console.log(myRecursiveRange(6)); // 21
console.log(myRecursiveRange(10)); // 55
