# Fizz Buzz

This algorithm was completed on [LeetCode](https://leetcode.com/problems/fizz-buzz/).

Given an integer n, return a string array answer (1-indexed) where:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.

Example 1:

```
Input: n = 3
Output: ["1","2","Fizz"]
```

Example 2:

```
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
```

Example 3:

```
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

Constraints:

1 <= n <= 104

---

## Breakdown

FizzBuzz is an algorithm where you return an array of string elements that contain numbers 1 through n and replace (or splice) whatever is divisible by 3, 5, or both 3 and 5 with the words "Fizz", "Buzz", or "FizzBuzz".

First, in order to iterate and print out numbers, you need to use a for loop.

```
for (let i = 1; i <= n; i++) {
    console.log(i); //will return numbers 1 through n, but not in an array format
}
```

In order to print out an **array** of numbers parsed into strings, you need to declare an array with the variable name of `answer` and push the numbers within `i` into it.

```
let answer = [];
for (let i = 1; i <= n; i++) {
    string = String(i); //converts numbers to strings
    answer.push(string) //pushes strings to end of array
}

//output: ["1", "2", "3"] if n = 3
```

Now we need to make the conditionals. In order to check if a number is divisible by a certain number, we have to use the remainder operator `%`. That number must have a remainder of 0 in order for it to be divisible, so we must use that in our if statements.

Take the divisible by 3 condition, for example:

```
//if i % 3 == 0, replace "3" with "Fizz"
    if (i % 3 == 0) {
      answer.splice(i - 1, 1, "Fizz");
    }
```

In order to replace that element with the word Fizz, we have to use the splice() method. Splice() allows you to delete existing elements, insert new elements, and replace them in an array, so this is important to remember.

```
array.splice(positionOfElement, numberOfItemsToDelete, stringToReplaceItWith)
```

In this case, since we want to replace what is divisible by 3 with Fizz, we need to use the right arguments.

One of the issues I had with this was that I was stating `answer.splice(i, 1, "Fizz")`. This is wrong, however, due to position 3 being the 4th element on the list, thus replacing the number 4 instead of 3 (`["1", "2", "3", "Fizz"]`). So, I just made the position `i - 1` and it fixed the problem.

Then, you make similar conditions for each case. Same thing but being divisible by 5, and then make one where the conditions are both divisible by 3 and 5.

```
//if i % 5 == 0, replace "5" with "Buzz"
    if (i % 5 == 0) {
      answer.splice(i - 1, 1, "Buzz");
    }
    //if i % 3 == 0 && i % 5 == 0, replace i with "FizzBuzz"
    if (i % 3 == 0 && i % 5 == 0) {
      answer.splice(i - 1, 1, "FizzBuzz");
    }
```

Now, let's put it all together:

```
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
```

And there it is! This is correct according to LeetCode and is a tidy answer based on the official solution it provides.

- Time Complexity: O(N)
- Space Complexity: O(1)
