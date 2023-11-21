/**Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 Example
const arr = [1,3,5,7,9]
The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 23. The function print 16 23*/

function miniMaxSum(arr: number[]) {
  // Sort the array numerically
  arr.sort((a, b) => a - b);

  let min = 0;
  let max = 0;

  // Calculate the minimum sum (excluding the last element)
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }

  // Calculate the maximum sum (excluding the first element)
  for (let i = 1; i < arr.length; i++) {
    max += arr[i];
  }

  // Print the results
  console.log(min, max);
}

function miniMaxSum1(arr: number[]) {
  // Write your code here
  const minSum = arr
    .sort((a: number, b: number) => a - b)
    .slice(0, arr.length - 1)
    .reduce((acc: number, b: number) => acc + b, 0);
  const MaxSum = arr
    .sort((a: number, b: number) => b - a)
    .slice(0, arr.length - 1)
    .reduce((acc: number, b: number) => acc + b, 0);
  console.log(minSum, MaxSum);
}
