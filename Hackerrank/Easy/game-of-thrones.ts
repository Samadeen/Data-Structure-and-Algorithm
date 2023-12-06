/**
Dothraki are planning an attack to usurp King Robert's throne. 
King Robert learns of this conspiracy from Raven and plans to lock the single door through which the enemy can enter his kingdom.
But, to lock the door he needs a key that is an anagram of a palindrome. He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome.
Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO.
*/

function gameOfThrones(s: string | any[]) {
  // Write your code here
  const freq = new Map();
  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) || 0) + 1);
  }

  let oddCOunt = 0;
  for (let count of freq.values()) {
    if (count % 2 !== 0) {
      oddCOunt++;
    }
  }

  if (s.length % 2 === 0 && oddCOunt === 0) {
    return 'YES';
  } else if (s.length % 2 !== 0 && oddCOunt === 1) {
    return 'YES';
  } else {
    return 'NO';
  }
}

// function gameOfThrones(s) {
//   const freq = {};
//   for (let i = 0; i < s.length; i++) {
//     freq[s[i]] = (freq[s[i]] || 0) + 1;
//   }
//   let oddCount = 0;
//   for (let char in freq) {
//     if (freq[char] % 2 !== 0) {
//       oddCount++;
//     }
//   }
//   return oddCount <= 1 ? 'YES' : 'NO';
// }
