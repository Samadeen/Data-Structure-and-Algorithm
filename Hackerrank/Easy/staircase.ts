/** This is a staircase of size n = 4:
     #
    ##
   ###
  ####

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size n.
 */

function staircase(n: number) {
  for (let i = 0; i < n; i++) {
    let stair = '';
    for (let j = 0; j < n; j++) {
      if (j < n - i - 1) {
        stair += ' ';
      } else {
        stair += '#';
      }
    }
    console.log(stair);
  }
}

function staircase2(n: number) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}
