// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
/*
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

Note: no spacing, punctation, or anything other than lowercase lettering characters
*/
// ==== MY SOLUTION ==== REFERENCE

let validAnagram = (str1, str2) => {
  // if the length of string 1 is not the same as string 2, return false
  if (str1.length !== str2.length) {
    return false;
  }
  // create 2 objects as frequency counters
  let obj1 = {};
  let obj2 = {};
  // loop over the first string to create the object
  for (let val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  //   console.log(obj1);
  // loop over the second string to create the object
  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  //   console.log(obj2);
  // compare the two strings and see if the first string's characters have the same frequency of occurrences as the second string
  for (let key in obj1) {
    // if the character is not in the first object, return false
    if (!(key in obj1) || !(key in obj2)) {
      return false;
    }
    // if the frequency of characters are not the same, return false
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// console.log(validAnagram("anagram", "nagaram")); // true or false

// ==== COLT'S SOLUTION ==== REFERENCE

function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// console.log(validAnagram2("hiya", "ihaa"));

//==== MULTIPLE POINTERS ==== REFERENCE
/*
Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

```
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
*/

let countUniqueValues = (arr) => {
  // compare the two pointers and compare how many times they're not equal. Could make a variable for this. If the numbers are the same, move j forward but leave i where it is. If the numbers are different, move i forward and put the counter into the index of that array.
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));

let maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
