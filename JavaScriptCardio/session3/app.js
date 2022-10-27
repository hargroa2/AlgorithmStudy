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
const sortByHeight = (a) => {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => {
    if (val === -1) {
      arr1.push(i);
    } else {
      arr2.push(val);
    }
  });
  const sortArr = arr2.sort((a, b) => a - b); //sorts it lowest to highest. Highest to lowest would be b - a
  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1)); //putting the -1 into its correct position
  console.log(sortArr);
};
const a = [-1, 150, 190, 170, -1, -1, 160, 180];
// sortByHeight(a);

// ====== CHALLENGE 5: MISSING LETTERS ====== COMMENT
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex. missingLetters("abce") == "d"
// ex. missingLetters("abcdefghjklmno") == "i"
// ex. missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
const missingLetters = (str) => {
  let compare = str.charCodeAt(0);
  let missing;
  //map is similar to forEach but returns an array
  str.split("").map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  console.log(missing);
};
// missingLetters("abcdefgi");

// ====== CHALLENGE 6: EVEN & ODD SUMS ====== COMMENT
// Take in an array and return an array of the sums of even and odd numbers
// ex. evenOddSums([50, 60, 60, 25, 71]) == [170, 116]
const evenOddSums = (arr) => {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  console.log([evenSum, oddSum]);
};
// evenOddSums([50, 60, 60, 45, 71]);
