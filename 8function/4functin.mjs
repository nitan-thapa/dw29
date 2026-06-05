let fun1 = function () {
  return 10;
  console.log("a");
};

let b = fun1();
console.log(b);

// return means return to the point where function is called
// and replace function call by function value

let sum = function (a, b) {
  return a + b;
};

console.log(sum(1, 2));
console.log(sum(3, 4));
console.log(sum(1, 1));
