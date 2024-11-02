// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
function findAverage(nums: number[]) {
  // Code here
  return nums.reduce((sum: number, num: number) => sum + num, 0) / nums.length;
}
