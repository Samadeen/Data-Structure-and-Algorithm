/**
 Julius Caesar protected his confidential information by encrypting it using a cipher. 
 Caesar's cipher shifts each letter by a number of letters. 
 If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
 In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
 */
function caesarCipher(s, k) {
  // Write your code here
  let encodedMessage = '';
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const A = 'A'.charCodeAt(0);
  const Z = 'Z'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= a && charCode <= z) {
      charCode = ((charCode - a + k) % 26) + a;
    } else if (charCode >= A && charCode <= Z) {
      charCode = ((charCode - A + k) % 26) + A;
    } else {
      encodedMessage += s[i];
      continue;
    }
    encodedMessage += String.fromCharCode(charCode);
  }
  return encodedMessage;
}
