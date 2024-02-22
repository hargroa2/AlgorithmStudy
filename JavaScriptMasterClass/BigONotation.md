# Big O Notation

## What is Big O Notation?

- It's a way to compare and discuss the efficiency of an algorithm problem. There are multiple ways you can approach a problem, which are just as valid as the other, but to determine which one is best is by using a system that measures its performance in time and memory makeup and classifies it accordingly.
  - It's important to have a precise vocabulary to talk about how our code performs
  - When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications

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

- The second solution is much faster in execution in comparison to the second one. While this is a way to test it, it brings us the problem with time, where different machines will record different times and it is not reliable. For fast algorithms, speed measurements may not be precise enough, and the same machine can even record different times.
