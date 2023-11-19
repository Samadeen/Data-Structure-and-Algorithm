//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr: []) {
  return arr.reduce((sum, num) => {
    if (num > 0) {
      return sum + num;
    } else {
      return sum;
    }
  }, 0);
}

// function positiveSum(arr) {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }

// function positiveSum(arr) {
//   return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
// }
