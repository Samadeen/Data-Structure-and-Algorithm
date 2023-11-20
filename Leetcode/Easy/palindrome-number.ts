/**Given an integer x, return true if x is a 
palindrome
, and false otherwise. */

var isPalindrome = function (x: { toString: () => any }) {
  const strX = x.toString();

  for (let i = 0; i < Math.floor(strX.length / 2); i++) {
    if (strX[i] !== strX[strX.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
