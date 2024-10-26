function myMatchArraysOfNumbers(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const arr1Obj = {};

  for (const el of arr1) {
    if (!arr1Obj[el]) {
      arr1Obj[el] = 1;
    } else {
      arr1Obj[el]++;
    }
  }

  const arr2Obj = {};

  for (const el of arr2) {
    const calcEl = Math.sqrt(el);

    if (!arr2Obj[calcEl]) {
      arr2Obj[calcEl] = 1;
    } else {
      arr2Obj[calcEl]++;
    }
  }

  for (const el of arr1) {
    if (arr1Obj[el] !== arr2Obj[el]) {
      return false;
    }
  }

  return true;
}

myMatchArraysOfNumbers([1, 2, 3], [1, 4, 9]);
myMatchArraysOfNumbers([1, 2], [1, 4, 9]);
myMatchArraysOfNumbers([1, 2, 3], [1, 4, 4]);
myMatchArraysOfNumbers([1, 2, 2], [1, 4, 4]);
