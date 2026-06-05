// make  function named canVote, that takes 1 input as age, it must return true if given age is greater than 18 else return false

const canVote = function (age) {
  if (age >= 18) {
    return "he/she can vote";
  } else {
    return "he/she can not vote";
  }
};

console.log(canVote(20));
console.log(canVote(14))