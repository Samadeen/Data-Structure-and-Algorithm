// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

const squareOrSquareRoot0 = (array) => {
  //check if it's an array
  if (!Array.isArray(array)) {
    throw new Error('Not an array');
  }

  // Process each number in the array
  const res = array.map((number) => {
    if (Math.sqrt(number) % 1 === 0) {
      return Math.sqrt(number);
    } else {
      return number * number;
    }
  });

  return res;
};

const squareOrSquareRoot = (array) => {
  //check if it's an array
  if (!Array.isArray(array)) {
    throw new Error('Not an array');
  }

  // Process each number in the array
  const resultArray = inputArray.map((number) => {
    const squareRoot = Math.sqrt(number);
    return Number.isInteger(squareRoot) ? squareRoot : number * number;
  });

  return resultArray;
};

function squareOrSquareRoot(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
    return r % 1 == 0 ? r : x * x;
  });
}
