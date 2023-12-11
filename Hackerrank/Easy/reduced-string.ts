/**Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
 In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String */
function superReducedString(s: []) {
  // Write your code here
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('') || 'Empty String';
}
