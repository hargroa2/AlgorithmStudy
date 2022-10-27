// ====== CHALLENGE 1: ADD ALL NUMBERS ======
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

// ====== CHALLENGE 2: SUM ALL PRIMES ======
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

// ====== CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
const seekAndDestroy = () => {};
