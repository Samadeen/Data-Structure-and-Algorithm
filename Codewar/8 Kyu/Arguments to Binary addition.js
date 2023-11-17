// Given an array add all the number elements and return the binary equivalent of that sum;
// to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

function arr2bin(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }

  let sum = 0;

  // Iterate through each element in the array
  for (const element of array) {
    // If the element is a number, add it to the sum
    // If it's not a number, treat it as 0
    sum += typeof element === 'number' ? element : 0;
  }

  // Convert the sum to binary and return it
  return sum.toString(2);
}
