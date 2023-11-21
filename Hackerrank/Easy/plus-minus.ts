//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
//Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr: number[]) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

function plusMinus1(arr: number[]) {
  // Write your code here
  let positive: number[] = [];
  let negative: number[] = [];
  let zero: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      zero.push(arr[i]);
    }
  }

  const positiveNum = (positive.length / arr.length).toFixed(5);
  const negativeNum = (negative.length / arr.length).toFixed(5);
  const zeroNum = (zero.length / arr.length).toFixed(5);
  return console.log(positiveNum, '\n', negativeNum, '\n', zeroNum);
}

function plusMinus2(arr: {
  length: any;
  filter: (arg0: {
    (num: any): boolean;
    (num: any): boolean;
    (num: any): boolean;
  }) => { (): any; new (): any; length: number };
}) {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }

  // Calculate the ratios
  const total = arr.length;
  const positive = arr.filter((num: number) => num > 0).length / total;
  const negative = arr.filter((num: number) => num < 0).length / total;
  const zero = arr.filter((num: number) => num === 0).length / total;

  // Print the ratios with 6 decimal places
  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zero.toFixed(6));
}
