// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution must have the time complexity of O(n)

/*
Examples:
sameFrequency(182, 281) // true
sameFrequency(31, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
*/

// Note: what if they only pass in one number or no numbers? Assume returns false

let sameFrequency = (num1, num2) => {
  // if the length of the first number is not the same as the second number, return false
  if (num1.length !== num2.length) {
    return false;
  }
  // create the objects for each integer
  let obj1 = {};
  let obj2 = {};
  // convert num1 into a string so that we can loop over the numbers as characters
  let str1 = num1.toString();
  // convert num2 into a string so that we can loop over the numbers as characters
  let str2 = num2.toString();
  // store each number inside objects as key-value pairs
  for (let val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  //   console.log(obj1);
  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  //   console.log(obj2);
  // loop over the object. if the values of the first integer equal the values of the second integer, return true
  for (let key in obj1) {
    if (!(key in obj1)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false

// ==== PRACTICE PROBLEM 2 ==== COMMENT

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

/*
Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

Time Complexity - O(n)
Space Complexity - O(n)

Bonus:
Time Complexity - O(n log n)
Space Complexity - O(1)
*/

// first, we need to use a rest operator so that we can pass in any amount of arguments into the function (...)
let areThereDuplicates = (...args) => {};

console.log(areThereDuplicates(1, 2, 2)); // true or false
