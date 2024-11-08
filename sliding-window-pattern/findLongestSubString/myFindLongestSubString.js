function myFindLongestSubString(str) {
  let subString = {};
  let start = 0;
  let end = 0;
  let len = 0;

  while (end < str.length) {
    const char = str[end];

    if (!subString[char]) {
      subString[char] = 1;

      end++;

      const tempLen = end - start;

      if (tempLen > len) {
        len = tempLen;
      }
    } else {
      subString[str[start]]--;
      start++;
    }
  }

  return len;
}

console.log(myFindLongestSubString("")); // 0
console.log(myFindLongestSubString("rithmschool")); // 7
console.log(myFindLongestSubString("thisisawesome")); // 6
console.log(myFindLongestSubString("thecatinthehat")); // 7
console.log(myFindLongestSubString("bbbbbb")); // 1
console.log(myFindLongestSubString("longestsubstring")); // 8
console.log(myFindLongestSubString("thisishowwedoit")); // 6
