function fibonacci(n) {
  const sums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    sums[i] = sums[i - 1] + sums[i - 2];
  }

  return sums[n];
}

console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55
console.log(fibonacci(28)); // 317811
console.log(fibonacci(35)); // 9227465
console.log(fibonacci(100));
