# What Makes Good Code?

Good code consists of the following:

1. Is readable
2. Is memory efficient (space complexity)
3. Is time efficient (time complexity)

- As the number of our inputs grow when we write a function or program, the more operations that a problem has to perform.
- The time is takes to run a program will be different for everyone due to many factors (how powerful your CPU is, what programs are running in the background, the language in question, etc.).
- Efficient code or scalable code is measured by Big O notation, the language we use for talking about how long an algorithm takes to run.

# Big 0 Notation

## Rules:

1. Worst Case - Always assume that the function is worst case scenario, even if an element is the first item in an array, it's still being looped over
2. Remove Constants - Regardless of the Big O calculation, like O(4 + 7n), you always drop the constant numbers to leave O(n).
3. Different terms for inputs - If you have 2 different inputs in your function parameters, then you could have 2 different for-loops performing on different items. In this case, it is O(a + b), because they aren't looping over the same items.
4. Drop Non-Dominants - If you have something like O(n + n^2), you drop the n because it is less than n^2 in terms of worst case and is more significant.

---

O(1) - Constant time

- No matter how many elements are within a collection (array, for example), you will always perform one operation. Even if a program performs O(2) operations or even O(25), you will still reduce it down to just O(1). This can be something like grabbing the first item in an array, or simply creating a variable that stores data.

O(n) - Linear time

- If we have 5 items in an array, we perform 5 operations in a for-loop. As the number ofinputs increase, the number of operations increase with it.

```
function funChallenge(input) {
let a = 10; // O(1)
a = 50 + 3; // O(1)

   for (let i = 0; i < input.length; i++) { //O(n)
     anotherFunction(); //O(n)
     let stranger = true; //O(n)
     a++; //O(n)
   }
   return a; //O(1)
 }

 // Big O of this program: O(3 + 4n) --> O(n)
```

O(n^2) - Quadratic time

- As the number of inputs increase, the number of operations increase and are multiplied (O(n\*n)). If you have 3 inputs in a nested for-loop, then there are 9 operations. (3)^2 = 9
