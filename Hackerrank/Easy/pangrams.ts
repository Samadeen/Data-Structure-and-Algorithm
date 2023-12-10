/**
A pangram is a string that contains every letter of the alphabet.
Given a sentence determine whether it is a pangram in the English alphabet.
Ignore case. Return either pangram or not pangram as appropriate.
 */

function pangrams(s) {
  // Write your code here
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseSentence = s.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!lowerCaseSentence.includes(alphabet[i])) {
      return 'not pangram';
    }
  }
  return 'pangram';
}

// function pangrams(s) {
//   // Write your code here
//     const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
//     const lowerCaseSentence = s.toLowerCase();
//     for (let i = 0; i < lowerCaseSentence.length; i++) {
//       alphabet.delete(lowerCaseSentence[i]);
//       if (alphabet.size === 0) {
//         return 'pangram';
//       }
//     }
//     return 'not pangram';
// }
