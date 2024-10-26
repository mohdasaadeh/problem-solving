function myMatchIntegers(int1, int2) {
  const int1Stringified = int1.toString();
  const int2Stringified = int2.toString();

  const matchObj = {};

  if (int1Stringified.length !== int2Stringified.length) return false;

  for (let i = 0; i < int1Stringified.length; i++) {
    if (!matchObj[int1Stringified[i]]) {
      matchObj[int1Stringified[i]] = 1;
    } else {
      matchObj[int1Stringified[i]]++;
    }
  }

  for (let i = 0; i < int2Stringified.length; i++) {
    if (!matchObj[int2Stringified[i]]) {
      return false;
    } else {
      matchObj[int2Stringified[i]]--;
    }
  }

  return true;
}

console.log(myMatchIntegers(182, 281));
console.log(myMatchIntegers(34, 14));
console.log(myMatchIntegers(3589578, 5879385));
console.log(myMatchIntegers(22, 222));
