// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    debugger;
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowFib);

// fib(20);
module.exports = fib;

// let series = [0, 1];
// for (i = 2; i <= n; i++) {
//   series.push(series[i - 2] + series[i - 1]);
// }
// return series[n];

//let series = [];
// let first = 0,
// second = 1,
// sum;
// for (i = 0; i < n; i++) {
// if (i < 2) {
//   series.push(i);
// } else {
//   sum = first + second;
//   first = second;
//   second = sum;
//   series.push(sum);
// }
// }
// return series;
