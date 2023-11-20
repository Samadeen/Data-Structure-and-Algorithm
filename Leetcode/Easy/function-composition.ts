/**
 Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

var compose = function (functions: string | any[]) {
  return function (x: any) {
    let res = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      res = functions[i](res);
    }
    return res;
  };
};

type FunctionType = (x: number) => number;

function composeFunctions(functions: FunctionType[]): FunctionType {
  if (functions.length === 0) {
    return (x: number) => x;
  }

  return functions.reduceRight(
    (prevFn, currentFn) => (x: number) => currentFn(prevFn(x))
  );
}

// Example usage:
const f1: FunctionType = (x) => x * 2;
const f2: FunctionType = (x) => x + 3;
const f3: FunctionType = (x) => x - 5;

const composedFunction = composeFunctions([f1, f2, f3]);

console.log(composedFunction(10)); // Output: ((10 - 5) + 3) * 2 = 16
