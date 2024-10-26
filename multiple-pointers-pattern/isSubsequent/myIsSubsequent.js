function myIsSubsequent(str1, str2) {
  let i = 0;
  let j = 0;

  let found = "";

  while (j < str2.length && i < str1.length) {
    if (str1[i] === str2[j]) {
      found = found + str1[i];

      i++;
    }

    j++;
  }

  if (found === str1) {
    return true;
  }

  return false;
}

console.log(myIsSubsequent("hello", "hello world"));
console.log(myIsSubsequent("sing", "sting"));
console.log(myIsSubsequent("abc", "abracadabra"));
console.log(myIsSubsequent("abc", "acb"));
