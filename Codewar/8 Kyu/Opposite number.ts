//Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number: number) {
  return number > 0
    ? -Math.abs(number)
    : number < 0
    ? Math.abs(number)
    : number;
}

// function opposite(number: number) {
//   return -number;
// }
