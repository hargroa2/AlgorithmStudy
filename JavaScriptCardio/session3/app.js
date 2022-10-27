// ====== CHALLENGE 1: ADD ALL NUMBERS ====== COMMENT
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
//ex. addAll(2, 5, 6, 7) === 20
const addAll = (...numbers) => {
  //rest operator gives all of the parameters in an array
  //... SOLUTIONS: rest and reduce/forEach
  //   let total = 0;
  //   numbers.forEach((num) => {
  //     total += num;
  //   });
  //   console.log(total);
  console.log(numbers.reduce((acc, cur) => acc + cur));
};
// addAll(2, 5, 6, 7, 5);

// ====== CHALLENGE 2: SUM ALL PRIMES ====== COMMENT
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex, sumAllPrimes(10) == 17
const sumAllPrimes = (num) => {
  let total = 0;
  const checkForPrime = (i) => {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  console.log(total);
};
// sumAllPrimes(10);

// ====== CHALLENGE 3: SEEK & DESTROY ====== COMMENT
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// destroys the 2s and the 6s vvv
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
const seekAndDestroy = (arr, ...rest) => {
  //solution: ...rest, filter and includes
  console.log(arr.filter((val) => !rest.includes(val)));
};
// seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);

// ====== CHALLENGE 4: SORT BY HEIGHT ====== COMMENT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex. a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
const sortByHeight = () => {};
sortByHeight();
