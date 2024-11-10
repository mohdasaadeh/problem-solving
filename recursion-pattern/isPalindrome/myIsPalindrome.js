function myIsPalindrome(str) {
  let strReversed = "";

  function myIsPalindromeInner(index) {
    if (index < 0) return;

    strReversed += str[index];

    myIsPalindromeInner(index - 1);
  }

  myIsPalindromeInner(str.length - 1);

  return strReversed === str;
}

console.log(myIsPalindrome("awesome")); // false
console.log(myIsPalindrome("foobar")); // false
console.log(myIsPalindrome("tacocat")); // true
console.log(myIsPalindrome("amanaplanacanalpanama")); // true
console.log(myIsPalindrome("amanaplanacanalpandemonium")); // false
