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
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
}
```
