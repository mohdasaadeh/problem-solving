function matchArraysOfNumbers(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const arrObj = {};

  for (const el of arr1) {
    if (!arrObj[el]) {
      arrObj[el] = 1;
    } else {
      arrObj[el]++;
    }
  }

  for (const el of arr2) {
    const calcEl = Math.sqrt(el);

    if (!arrObj[calcEl]) {
      return false;
    } else {
      arrObj[calcEl]--;
    }
  }

  return true;
}

console.log(matchArraysOfNumbers([1, 2, 3], [1, 4, 9]));
console.log(matchArraysOfNumbers([1, 2], [1, 4, 9]));
console.log(matchArraysOfNumbers([1, 2, 3], [1, 4, 4]));
console.log(matchArraysOfNumbers([1, 2, 2], [1, 4, 4]));
