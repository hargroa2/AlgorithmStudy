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

## Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well
- You usually have some sort of structure, like an array or string or doubly linked list, and search for a pair of values and use two references/variables to find specific values

### Example: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

```
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
```

### Naive Solution:

```
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
};
```

- Time complexity: O(n^2^);
- Space complexity: O(1)

### Refactored Solution:

```
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
};
```

- Time Complexity: O(n)
- Space Complexity: O(1)

### Example 2: Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

```
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
```

```
  // compare the two pointers and compare how many times they're not equal. Could make a variable for this. If the numbers are the same, move j forward but leave i where it is. If the numbers are different, move i forward and put the counter into the index of that array.

let countUniqueValues = (arr) => {
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

console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));
```

- Time Complexity: O(n)
- Space Complexity: O(1)

## Sliding Window

- This pattern involves creating a window which can either be an array or number from on eposition to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc. that is continuous in some way.

### Example: write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null
```

### Naive Solution:

```
let maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
```

### Refactored Solution:

```
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
```

- Time Complexity: O(n)
