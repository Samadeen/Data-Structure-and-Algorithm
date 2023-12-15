// Given two strings, determine if they share a common substring. A substring may be as small as one character.
function twoStrings(s1: string | any[], s2: string | any[]) {
  // Write your code here
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      return 'YES';
    }
  }
  return 'NO';
}
