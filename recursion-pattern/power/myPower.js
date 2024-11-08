function myPower(base, expo) {
  if (expo === 0) return 1;

  return base * myPower(base, expo - 1);
}

console.log(myPower(2, 0)); // 1
console.log(myPower(2, 2)); // 4
console.log(myPower(2, 4)); // 16
