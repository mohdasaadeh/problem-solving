function isValidAnagram(text1, text2) {
  if (text1.length !== text2.length) return false;

  if (!text1 && !text2) return true;

  const textObj = {};

  for (const el of text1) {
    if (!textObj[el]) {
      textObj[el] = 1;
    } else {
      textObj[el]++;
    }
  }

  for (const el of text2) {
    if (!textObj[el]) {
      return false;
    } else {
      textObj[el]--;
    }
  }

  return true;
}

console.log(isValidAnagram("anagram", "naagram"));
console.log(isValidAnagram("", ""));
console.log(isValidAnagram("anagramm", "naagram"));
