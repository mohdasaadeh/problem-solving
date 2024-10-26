function myDuplicateArguments(...args) {
  const matchObj = {};

  for (const arg of args) {
    if (!matchObj[arg]) {
      matchObj[arg] = 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(myDuplicateArguments(1, 2, 3));
console.log(myDuplicateArguments(1, 2, 2));
console.log(myDuplicateArguments("a", "b", "c", "a"));
