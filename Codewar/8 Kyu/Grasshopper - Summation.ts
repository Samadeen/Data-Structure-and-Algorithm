//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num: number) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const summation1 = (num: number) => {
  return (num * (num + 1)) / 2;
};
