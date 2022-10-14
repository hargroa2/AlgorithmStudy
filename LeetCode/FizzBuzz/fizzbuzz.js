let fizzBuzz = (n) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    string = String(i);
    answer.push(string);
    //if i % 3 == 0, replace "3" with "Fizz"
    if (i % 3 == 0) {
      answer.splice(i - 1, 1, "Fizz");
    }
    //if i % 5 == 0, replace "5" with "Buzz"
    if (i % 5 == 0) {
      answer.splice(i - 1, 1, "Buzz");
    }
    //if i % 3 == 0 && i % 5 == 0, replace i with "FizzBuzz"
    if (i % 3 == 0 && i % 5 == 0) {
      answer.splice(i - 1, 1, "FizzBuzz");
    }
  }
  console.log(answer);
  //   return answer;
};

fizzBuzz(15);
