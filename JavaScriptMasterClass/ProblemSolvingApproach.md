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

- Coming up with examples can help you understand the problem better
- Examples also provide sanity checks that your eventual solution works how it should

1. Start with simple examples
   - After you understand the problem and go through the previous step, you should try to write 2 or 3 simple examples with the input and then the output.
2. Progress to more complex examples
3. Explore examples with empty inputs or edge cases
4. Explore examples with invalid inputs

### Example: Write a function which takes a string and returns counts of each character in the string.

```
charCount("aaaa"); // {a: 4 }
charCount("hello") // {h: 1, e: 1, l: 2, o: 1}

// Do we include all alphabet letters and just put 0 as the value?
// Do we include uppercasing AND lowercasing? Do we ignore casing?
// Do we include spaces?
// What if someone doesn't pass anything in to it or has an empty string?
// What if someone passes in something that isn't a string?
```

## Break It Down

- Take the actual steps of the problem and write them down. It doesn't have to be full pseudocode or valid syntax, but little comments as a guide for steps to take.

  - Don't just start silently typing away with your brow furrowed. Talk out what you're thinking aloud with the person, tell them what your approach is and maybe even ask, "Do you think that'll work?" This might get you a hint from the person if you try to interact with them more.
  - This forces you to think about the code you'll write before you write it and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (like language syntax)

  ### Example: Write a function which takes in a string and returns counts of each character in the string.

```
    // My examples:

    charCount("aaaa");
    /*
    {
        a: 4
    }
    */

    charCount("hello");
    /*
    {
        h: 1,
        e: 1,
        l: 2,
        o: 1
    }
    */
    charCount("Your PIN number is 1234!");
    /*
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        b: 1,
        e: 1,
        i: 2,
        m: 1,
        n: 2,
        o: 1,
        p: 1,
        r: 2,
        s: 1,
        u: 2,
        y: 1
    */

    // Now we will type up the skeleton of our function
    let charCount = (str) => {
        // we need to loop over every character in the string
        // we need to check if that character is already in our object or not and increase its count. If it was already there, we add one to it
        // return an object with keys that are lowercase alphanumeric characters in the string

        // make object to return at end
        // loop over string, for each character...
            // if the char is a number/letter AND a key in object, add one to count
            // if the char is a number/letter and not in object, add it and set value to 1
            // if char is something else (space, period, etc.)don't do anything
        // return object at end
    }
```

## Solve/Simplify

- At this point, you should try to solve the problem. You might be 80% confident at this point but you're not sure how to do it, or maybe there's two things that are really challenging. That's why simplify is there: **_if you can't solve the problem, solve a simpler problem._** It pretty commonly can lead you to an answer to the more complicated aspect of the problem.
  - Find the core difficult in what you're trying to do
  - Temporarily ignore that difficulty
  - Write a simplified solution
  - Then incorporate that difficulty back in

### Example: Write a function which takes in a string and returns counts of each character in the string.

- So, we wrote down our examples, broke down the problem, now let's continue:

```
let charCount = (str) => {
       // make object to return at end
       let result = {};
       // loop over string, for each character...
       for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (result[char] > 0) {
        // if the char is a number/letter AND a key in object, add one to count
            result[char]++;
        } else {
        // if the char is a number/letter and NOT in object, add it and set value to 1
            result[char] = 1;
        }
       }
           // if char is something else (space, period, etc.)don't do anything
       // return object at end
       return result;
   }
```

## Look Back and Refactor

- While it can be tempting to just say that you're done once you have a solution that is working, you should try to strive for finding better ways to solve it to demonstrate your abilities.
  - Talk about the parts you don't like or how you don't like how it looks, reads, how easy it is to understand.
  - Ask yourself these questions OUT LOUD, even with the person there:
    - Can you check the result? Does the code work?
    - Can you derive the result differently?
    - Can you understand it at a glance?
    - Can you use the result or method for some other problem?
    - Can you improve the performance of your solution?
    - Can you think of other ways to refactor?
    - How have other people solved this problem?

```
let charCount = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}
```
