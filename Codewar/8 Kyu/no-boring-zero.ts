// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(n: number) {
  // Check if the input is zero, return it directly
  if (n === 0) return 0;

  // Convert number to string, remove trailing zeros, and convert back to number
  return parseInt(n.toString().replace(/0+$/, ''), 10);
}
