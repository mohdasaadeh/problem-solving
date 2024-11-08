function myFactorial(num) {
  if (num === 0) return 1;

  return num * myFactorial(num - 1);
}

console.log(myFactorial(1)); // 1
console.log(myFactorial(2)); // 2
console.log(myFactorial(4)); // 24
console.log(myFactorial(7)); // 5040
