function myReverseString(str) {
  let strReversed = "";

  function myReverseStringInner(index) {
    if (index < 0) return;

    strReversed += str[index];

    myReverseStringInner(index - 1);
  }

  myReverseStringInner(str.length - 1);

  return strReversed;
}

console.log(myReverseString("awesome")); // 'emosewa'
console.log(myReverseString("rithmschool")); // 'loohcsmhtir'
