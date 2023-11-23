//We need a function that can transform a number (integer) into a string.
//What ways of achieving this do you know?

function numberToString(num: { toString: () => any }) {
  // Return a string of the number here!
  return num.toString();
}
