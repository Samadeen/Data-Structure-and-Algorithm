/**
 * Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
 */
function sameCase(a: any, b: any) {
  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }
  if (
    (a.toLowerCase() === a && b.toLowerCase() === b) ||
    (a.toUpperCase() === a && b.toUpperCase() === b)
  ) {
    return 1;
  }

  // Both characters are letters, but not the same case
  return 0;
}
function isLetter(x: string) {
  return /^[a-zA-Z]$/.test(x);
}
