//Given an array of integers, find the sum of its elements.

function simpleArraySum(ar: number[]) {
  // Write your code here
  return ar.reduce((a, b) => a + b, 0);
}
