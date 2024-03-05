# Big O Notation

## What is Big O Notation?

- It's a way to compare and discuss the efficiency of an algorithm problem. There are multiple ways you can approach a problem, which are just as valid as the other, but to determine which one is best is by using a system that measures its performance in time and memory makeup and classifies it accordingly.

  - It's important to have a precise vocabulary to talk about how our code performs
  - When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications

- It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow. With O(n) as an example, it roughly grows in a linear 1 to 1 pattern. As n grows, the time that has elapsed or the runtime grows in proportion.

- We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as n increases. The "f" means function, "n" is the value that is passed through that function. For example, `f(n) = n` is just describing the relationship between the input of the function and the runtime, being n in this case. It could also be x^2^ (x squared), 1, and so on.

  - f(n) could be linear --> f(n) = n
  - f(n) could be quadratic --> f(n) = n^2^
  - f(n) could be constant --> f(n) = 1
  - f(n) could be something entirely different

  ![Big O Notation Chart](bigO.png)

## Timing Our Code

- Suppose you want to write a function that calculates the sum of all numbers from 1 up to and including some number n. Here's one way to solve that:

```
let addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(3));
```

- This is a correct way to solve the problem, however there is another way we could approach it as well:

```
let addUpTo2 = (n) => {
  return n * (n + 1) / 2;
}
console.log(addUpTo2(3));

```

- So, which is better? The one that is fastest, or less memory-intensive, or more readable? The first two are usually more important than readability.

- You can use a timing function to evaluate a function's performance:

```
let addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```

- The second solution is much faster in execution in comparison to the second one. While this is a way to test it, it brings us the problem with time, where different machines will record different times and it is not reliable. For fast algorithms, speed measurements may not be precise enough, and the same machine can even record different times. So, what's the solution?

## Counting Operations

- Instead of counting seconds, which are so variable, let's count the number of simple operations the computer has to perform.
- Let's take a look at this for example:

```
let addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

- If n is 5, there are 5 operations for this loop. It scales with n. Also, the `+` and `=` signs are operators as well, and counting all of the operations there can be as low as 2n or as high as 5n + 2. But regardless of the exact number, the number of operations grows roughly proportionally with n, and therefore the **_the number of inputs or n grows in proportion to the runtime or the time it takes to complete execution._**

- Therefore, because the number of operations is eventually bounded by a multiple of n (say, 10n), and again grows in runtime as n grows, the Big O of this example is `O(n)`.

So if we go back to the other example:

```
let addUpTo2 = (n) => {
  return n * (n + 1) / 2;
}
console.log(addUpTo2(3));
```

- You can say that there are always 3 operations (+, \*, /) that are occurring and regardless of n or the inputs that you are putting in, the time it takes to complete the problem is constant and does not change or grow. There are 3 operations no matter what n is. Therefore, the Big O of this solution is `O(1)`.

### More Examples

```
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

console.log(countUpAndDown(9));

```

- In the example above, the first for-loop is `O(n)`, since as n grows, this loop grows. Same thing for the second for-loop as well, it is `O(n)` and is carrying out the decrementing operation instead of incrementing. This is technically `O(2n)`, but it gets simplified to `O(n)` since it is more about the big picture.

Here's another example that is different from the previous ones:

```
let printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      // O(n)
      console.log(i, j);
    }
  }
};

console.log(printAllPairs(5)); // O(n^2^)
```

- As you can see, the first for-loop is `O(n)`, but there is another for-loop that is `O(n)` inside of it.This isn't `O(2n)` because it is nested inside of the other loop. It turns out to be `O(n^2^)`, or O of n squared, which means that as n grows, the runtime roughly grows at the rate of n squared.
- If you were to plot this on a chart, it wouldn't be a linear line like `O(n)` where the runtime is proportionate to n. Instead,as n grows larger, the runtime grows n \* n larger and will take a lot longer in comparison. This is a quadratic time, since it exponentially curves upwards on a chart.

## Simplifying Big O Expressions

There are some helpful rules of thumb for determining the time complexity of an algorithm:

1. Constants don't matter

   - `O(2n)` --> `O(n)`
   - `O(500)` --> `O(1)`
   - `O(13n^2^)` --> `O(n^2^)`

2. Smaller terms don't matter

   - `O(n + 10)` --> `O(n)`
   - `O(1000n + 50)` --> `O(n)`
   - `O(n^2^ + 5n + 8)` --> `O(n^2^)`

3. Arithmetic operations are constant

   - `+`, `-`, `*`, `/`
   - Your computer will take the same amount of time to make 3 arithmetic operations, or 50,000 of them

4. Variable assignment is constant

   - Your computer takes the same time to make a variable x = 1000 compared to x = 20,000 or a million.

5. Accessing elements in an array (by index) or object (by key) is constant

   - If I want to find the first item or 10th item of an array, as long as I use the index or have an object and use the key to access that value, it is constant time.

6. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
   - If there is another loop within a loop, that changes the complexity and makes it take longer to execute. The input value of n makes a difference in what occurs depending on what is being performed in the loop itself as well

### A Couple of Examples

```
let logAtLeast5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

console.log(logAtLeast5(7)); // O(n)

```

- Since the minimum that is printed out is 5, and n is counted out if it is larger than 5, then the complexity is `O(n)` since the n has more weight here and could be a ginormous number

```
let logAtMost5 = (n) => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

console.log(logAtMost5(1));
```

- This example only prints out 5 at maximum if n is 5 or more, and will count out less if the number is less than 5. Therefore, if there are only 5 operations at most at a time, then the time complexity is `O(5)`, which can be simplified to `O(1)` constant time.

## Space Complexity

- So far, we've only been worrying about time and how fast algorithms can run, or `time complexity`, which is analyzing the runtime of an algorithm as the size of the inputs increases. Now, let's talk about the space that an algorithm takes up as the size of the input increases.

  - We can use Big O notation to analyze `space complexity`,or how much additional memory do we need to allocate in order to run the code in our algorithm
  - You may hear the term `auxiliary space complexity` to refer to space required by the algorithm itself, not including space taken up by the inputs. Unless otherwise noted, when we talk about space complexity, we'll be talking about auxiliary space complexity. We're talking about mainly what's going on inside the algorithm.

  ### Rules of Thumb

1. Most primitives (booleans, numbers, undefined, null) are constant space

   - It doesn't matter what the size of n is, whether it is 1 or 1000 or true or false, we consider it constant space and takes up the same amount of space

2. Strings require `O(n)` space (where n is the string length)

   - If n is the length of the string, the input could grow to n amount of characters like 50, which means that the string would take up 50 times more space than a single chracter string

3. Reference types are generally `O(n)`, where n is the length (for arrays) or the number of keys (for objects)
   - If n is the length of an array, which could be 4, compared to another one that is 2, it takes up twice as much space as the shorter array

---

```
let sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(sum([1, 2, 3]));
```

- In this example, it takes the array and sums up all of its elements. There is a number at `let total = 0`, and another number at `let i = 0` in the for-loop declaration, but no matter what we put inside of n or the size of the array, it doesn't have an impact on the space that is taken up because we only have these 2 variables. We're not adding new variables based off of the length, we're adding to the total variable but we are not adding any new variables here. That means that we have constant space, or `O(1)`.

Another example:

```
let double = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};
console.log(double([1, 2, 3, 4]));
```

- This makes a new array and multiplies each element from the original array by 2. We made a new array, but that's not that significant. However, the `newArr.push(2 * arr[i])` portion is important to note here. If the array is 10 items here, we're storing 10 items in a new array, or if it is 50, then we are storing 50 items in that new array. The space that is taken up is proportionate to n, the input array. Therefore, the space complexity is `O(n)`.

## Logarithms

- A logarithm is the inverse of an exponential function. For example, `log~2~8 = 3` is a logarithm. If you solve it and turn it into an exponent, it becomes `2^3^ = 8`. You could have examples with different kinds of bases, but for the most part there are binary logarithms, like log 2, log 10, or log e.

- The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to 1.

  - Example: 8 / 2 = 4 / 2 = 2 / 2 = 1. We divided by 2 three times, so log(8) = 3
  - Example: 25 / 2 - 12.5 / 2 = 6.25 / 2 = 3.125 / 2 = 1.5625 / 2 = 0.78125. We divided about 5 times, but the exact answer is log(25) = 4.64

- In conclusion, logarithmic time complexity is great and is very close to O(1) constant time, so O(log n) is definitely favorable in comparison to something like `O(n)`. There is also `O(nlog n)`, which is worse than `O(n)`, but is better than `O(n^2^)`.

  - Certain searching algorithms have logarithmic time complexity
  - Efficient sorting algorithms involve logarithms
  - Recursion sometimes involves logarithmic space complexity

  Ranking from most ideal time complexity to worst:

  1. `O(1)`
  2. `O(log n)`
  3. `O(n)`
  4. `O(nlog n)`
  5. `O(n^2^)`

## Recap

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
