function myFibonacci(num) {
  if (num === 1 || num === 2) return 1;

  return myFibonacci(num - 1) + myFibonacci(num - 2);
}

console.log(myFibonacci(4)); // 3
console.log(myFibonacci(10)); // 55
console.log(myFibonacci(28)); // 317811
console.log(myFibonacci(35)); // 9227465
