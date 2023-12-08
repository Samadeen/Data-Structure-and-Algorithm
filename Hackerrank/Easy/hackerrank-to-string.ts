/**
We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank.
Remember that a subsequence maintains the order of characters selected from a sequence.
 */
function hackerrankInString(s) {
  // Write your code here
  const target = 'hackerrank';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == target[count]) {
      count++;
    }
  }
  return count === 10 ? 'YES' : 'NO';
}
hackerrankInString('hackerrank');
