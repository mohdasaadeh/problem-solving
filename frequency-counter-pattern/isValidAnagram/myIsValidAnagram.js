function myIsValidAnagram(text1, text2) {
  if (text1.length !== text2.length) return false;

  if (!text1 && !text2) return true;

  const text1Obj = {};

  for (const el of text1) {
    if (!text1Obj[el]) {
      text1Obj[el] = 1;
    } else {
      text1Obj[el]++;
    }
  }

  const text2Obj = {};

  for (const el of text2) {
    if (!text2Obj[el]) {
      text2Obj[el] = 1;
    } else {
      text2Obj[el]++;
    }
  }

  for (const el of text1) {
    if (text1Obj[el] !== text2Obj[el]) {
      return false;
    }
  }

  return true;
}

console.log(myIsValidAnagram("anagram", "naagram"));
console.log(myIsValidAnagram("", ""));
console.log(myIsValidAnagram("anagramm", "naagram"));
