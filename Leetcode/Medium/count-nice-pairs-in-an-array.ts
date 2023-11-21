/**
 You are given an array nums that consists of non-negative integers. 
 Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. 
 A pair of indices (i, j) is nice if it satisfies all of the following conditions:

0 <= i < j < nums.length
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
 */

// var countNicePairs = function (nums: number[]) {
//   const rev = (num: number) =>
//     parseInt(num.toString().split('').reverse().join(''), 10);

//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + rev(nums[j]) === nums[j] + rev(nums[i])) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

function countNicePairs(nums: any) {
  const reverseNumber = (num: { toString: () => string }) =>
    parseInt(num.toString().split('').reverse().join(''), 10);

  // Map to store the count of differences
  const differenceCountMap = new Map();

  let nicePairsCount = 0;

  for (const num of nums) {
    const difference = num - reverseNumber(num);
    const count = differenceCountMap.get(difference) || 0;

    // Update the count in the map
    differenceCountMap.set(difference, count + 1);

    // Calculate nice pairs based on the count
    nicePairsCount = (nicePairsCount + count) % 1_000_000_007;
  }

  return nicePairsCount;
}

// Example usage:
const nums = [42, 33, 60];
console.log(countNicePairs(nums)); // Output: 1
