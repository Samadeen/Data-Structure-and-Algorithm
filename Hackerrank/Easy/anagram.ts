// Given a string, split it into two contiguous substrings of equal length.
// Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

function anagram(s: string | any[]) {
  // Write your code here
  const n = s.length;
  if (n % 2 !== 0) return -1; // odd length strings can't be split evenly

  const freq = {};
  let count = 0;

  // count characters in first half of string
  for (let i = 0; i < n / 2; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  // calculate difference with second half of string
  for (let i = 0; i < n / 2; i++) {
    if (freq[s[i]]) {
      freq[s[i]]--;
    } else {
      count++;
    }
  }

  return count;
}
