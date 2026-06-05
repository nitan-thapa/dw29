//   make  function named isEven, that takes 1 input, it must return true if given input is even else return false

const isEven = function (num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(isEven(10));
console.log(isEven(11));
