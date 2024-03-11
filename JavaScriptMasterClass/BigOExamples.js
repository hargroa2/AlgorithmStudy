// ==== Add the sum of numbers for n REFERENCE ====

let addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
// console.log(addUpTo(3)); // O(n) linear time

// ==== Add the sum of numbers version 2 REFERENCE ====
let addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};
// console.log(addUpTo2(6)); // O(1) constant time

// ==== Counts up and down with n as its peak REFERENCE ====
let countUpAndDown = (n) => {
  console.log("Going up!");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("At the top! \nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
};

// console.log(countUpAndDown(9)); // O(n) linear time

// ==== Prints all pairs up to n REFERENCE ====
let printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      // O(n)
      console.log(i, j);
    }
  }
};

// console.log(printAllPairs(2)); // O(n^2^) quadratic time

let logAtLeast5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    // Math.max returns the largest of the numbers given within the parentheses.
    console.log(i);
  }
};

// console.log(logAtLeast5(3)); // O(n)

let logAtMost5 = (n) => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

// console.log(logAtMost5(6)); // O(1), at max 5 operations

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

// console.log(subtotals([1, 2, 3, 4])); // O(n^2^)
// [ 1, 3, 6, 10] --> Adds up totals until it gets to the end of the array

let sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
// console.log(sum([1, 2, 3])); // O(1)

let double = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};
// console.log(double([1, 2, 3, 4]));

// PROBLEM SOLVING EXAMPLE
let charCount = (str) => {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

let isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
};

// console.log(charCount("Hello WORLD hi!!!"));
