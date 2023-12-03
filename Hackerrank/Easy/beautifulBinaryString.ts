/**
 Alice has a binary string. She thinks a binary string is beautiful if and only if it doesn't contain the substring . "010"

In one step, Alice can change a 0 to a 1 or vice versa. 
Count and print the minimum number of steps needed to make Alice see the string as beautiful.
 */

function beautifulBinaryString(b: string) {
  let count = 0;
  for (let i = 0; i < b.length - 2; i++) {
    if (b.substr(i, 3) === '010') {
      count++;
      i += 2;
    }
  }
  return count;
}
