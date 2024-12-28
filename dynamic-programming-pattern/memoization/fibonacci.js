function fibonacci(n, memo = []) {
  if (n === 1 || n === 2) return 1;

  if (memo[n]) return memo[n];

  const res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  memo[n] = res;

  return res;
}

console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55
console.log(fibonacci(28)); // 317811
console.log(fibonacci(35)); // 9227465
console.log(fibonacci(100));
