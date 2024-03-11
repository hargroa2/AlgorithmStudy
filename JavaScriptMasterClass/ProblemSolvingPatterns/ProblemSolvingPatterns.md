# Problem Solving Patterns

- While these patterns will help you identify how to solve a myriad of problems, they will likely help you 1 out of 5 or 10 problems that you solve. They will not be the cure to all of your solutions, but they are helpful and worth knowing.

- Some patterns, and many more to come:
  - Frequency Counter
  - Multiple Pointers
  - Sliding Window
  - Divide and Conquer
  - Dynamic Programming
  - Greedy Algorithms
  - Backtracking

## Frequency Counters

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n^2^) operations with arrays/strings
- Great for problems where you have multiple inputs and need to compare them to see if they consist of similar values or are anagrams, or if a value is contained inside of another value. Just anytime you're comparing pieces of data to inputs and frequencies of certain things occurring

### Example: Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

```
same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

// naive solution
let same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) { // its not in there
            return false;
        }
        arr2.splice(correctIndex, 1) // removes it from the array
    }
    return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
```

- This is the naive approach beecause it takes O(n^2^) quadratic time to perform.

```
let same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4])
```

- The frequency counter objects tell us how many times a number is within the array. So there is one 1, two 2s, one 3.
- We use the objects to compare what is within the arrays by breaking them down and seeing how often its items occur, and see if they are the same or if they are alike somehow.
- This solution is O(3n), which simplifies to O(n) since we are not nesting any loops like how the naive example previoiusly has indexof() within the for loop.

### Example 2: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

### My Solution:

```
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
  // loop over the second string to create the object
  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
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

console.log(validAnagram("anagram", "nagaram")); // true or false
```

### Colt Steele's Solution:

```
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

console.log(validAnagram2("hiya", "ihaa"));
```
