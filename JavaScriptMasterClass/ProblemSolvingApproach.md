# Algorithms and Problem Solving Approach

- You're faced with a tough challenge, some code or a problem you have to solve, and you don't know how to do it right off the bat. What are the steps you can take to make it solvable?

> An **algorithm** is a process or set of steps to accomplish a certain task.

- Almost everything that you do in programming involves some kind of algorithm. It's the foundation for being a successful problem solver and developer
- This information is especially important for interviews, where you are given tough questions that you will be required to solve

### So how do you improve?

1. Devise a plan for solving problems
2. Master common problem solving patterns

### Problem-Solving Steps:

1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Solve/Simplify
5. Look back and refactor

## Understand The Problem

- The best thing to do when you are first introduced to a problem that you don't fully understand is to ask yourself or to ask someone else questions.

  1. Can I restate the problem in my own words?

     - Do not copy what the other person said, but say what you're naturally thinking that the problem is about.

  2. What are the inputs that go into the problem?
  3. What are the outputs that should come from the solution to the problem?
  4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? This question may not have answer until you set about solving the problem, which is fine.
  5. How should I label the important pieces of data that are a part of the problem?

### Example: Write a function which takes two numbers and returns their sum.

1. Can I restate the problem in my own words?
   - "Create a function that adds two numbers together using addition"
2. What are the inputs that go into the problem?
   - Are they supposed to be integers? Floats? What about strings or larger numbers?
3. What are the outputs that should come from the solution to the problem?
   - Integer? Float? String?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? This question may not have answer until you set about solving the problem, which is fine.
   - In this case, we have enough information, but what about what happens if someone only gives you one number? Should it return undefined or simply add it with zero? How should our code respond to outliers?
5. How should I label the important pieces of data that are a part of the problem?
   - Maybe we call our function add, and then sum is our result that we return, and our inputs are called num1 and num2.

## Exploring Concrete Examples
