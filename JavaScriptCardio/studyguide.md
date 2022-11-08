# Array and String Method Study Guide

---

## String Methods

### 1. toUpperCase()

- Makes a string have all of its letters uppercased.

```
const letters = "abc";
console.log(letters.toUpperCase());
```

### 2. toLowerCase()

- Makes a string have all of its letters lowercased.

```
const letters = "DEF";
console.log(letters.toLowerCase());
```

### 3. substring()

- Returns a specified part of a string between start and end indexes.

```
const message = "JavaScript is fun";
let result = message.substring(0, 10);
console.log(result);
// Output: JavaScript
```

### 4. replace()

- Switches the first match of a string with a new string.

```
const item = "ball";
let result = item.replace("b", "c");
console.log(result);
// Output: "call";
```

### 5. split()

- Divides a string in to a list of substrings and returns them as an array.
- The parameters for split(separator, limit) are:
  - separator(optional): The pattern describing where each split should occur
  - limit(optional): A non-negative integer limiting the number of pieces to split the given string into

```
const message = "JavaScript::is::fun";
let result = message.split("::");
console.log(result);
// Output: ['JavaScript', 'is', 'fun']
```

### 6. slice()

- Extracts and returns a section of a string.
- Note that this is similar to substring(), but slice() will return an empty string if the start parameter is greater than the ending one. Substring will simply swap the two arguments automatically. The differences are very minor otherwise.

```
const message = "JavaScript is fun";
let result = message.slice(0, 10);
console.log(result);
// Output: JavaScript
```

### 7. fromCharCode()

- Returns a string created from the specified sequence of UTF-16 code units.

```
let string = String.fromCharCode(72, 69, 76, 76, 79);
console.log(string);

// Output: HELLO
```

### 8. charCodeAt()

- Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index

```
const greeting = "Good morning!";
let result = greeting.charCodeAt(5);
console.log(result);
// Output: 109
```

### 9. indexOf()

- Returns the index of the first occurence of the substring in a string.
- Note that it returns -1 if the value is not found within the string.
- str.indexOf(searchValue, fromIndex):
  - searchValue: The value to search for in a string. If no string is given, then undefined will be searched
  - fromIndex (optional): The index to start the search at. By default it is at 0

```
const message = "JavaScript is not Java";
const index = message.indexOf("va");
console.log(`index: ${index}`);

// Output: index: 2
```

### 10. includes()

- Checks if one string can be found inside of another string.
- str.includes(searchString, position):
  - searchString: The string to be searched for
  - position (optional): The position within str to begin searching for searchString. It is 0 by default

```
const message = "JavaScript is fun";
let result = message.includes("Java");
console.log(result);

// Output: true;
```

### 11. match()

- Returns the result of matching a string against a regular expression in an array, one item for each match
- Returns null if no match is found

```
const message = "JavaScript is a fun programming language.";

// regular expression that checks if message contains 'programming'
const exp = /programming/;

let result = message.match(exp);
console.log(result);

/*
Output: [
  'programming',
  index: 20,
  input: 'JavaScript is a fun programming language.',
  groups: undefined
  ]
*/
```

### 12. concat()

- Concatenates given arguments to the given string

```
let emptyString = "";
let joinedString = emptyString.concat("JavaScript", "is", "fun.");
console.log(joinedString);

// Output: JavaScript is fun.
```

### 13. trim()

- Removes whitespace from both ends of a string
- Has no parameters. Does not change the original string

```
const message = "    JAVASCRIPT IS FUN     ";
const newMessage = message.trim();
console.log(newMessage);

// Output: JAVASCRIPT IS FUN
```

---

## Array Methods

### 1. join()

- Converts an array into a string by concatenating all of the elements, separating them by a specified separator.

```
let message = ["JavaScript", "is", "fun."];
let joinedMessage = message.join(" ");
console.log(joinedMessage);

// Output: JavaScript is fun.
```

### 2. reverse()

- Reverses the order of the elements in an array and overwrites the original array.

```
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.reverse();
console.log(reversedArray);

// Output: [5, 4, 3, 2, 1]
```

### 3. forEach()

- Executes a function for each array element.

```
let numbers = [1, 3, 4, 9, 8];
numbers.forEach((element) => console.log(element * element));

/* Output:
1
9
16
81
64
*/
```

### 4. reduce()

- Takes an array and reduces it down to a single value. The value returned is stored in an accumulator (result/total).
- arr.reduce(callback(accumulator, currentValue), initialValue)
  - **callback**: The function that executes on each array element (if no initial value is provided, then except the first element)
  - **accumulator**: It accumulates the callback's return values
  - **currentValue**: The current element being passed from the array
  - **initialValue(optional)**: A value that will be passed to the function on first call. If not provided, the first element acts as the accumulator on the first call and the function will not execute on it.

```
const list = [1, 2, 3, 4, 5];
console.log(list.reduce((total, item) => total + item, 0));

// Output: 15
```

### 5. filter()

- Returns a new array with all elements that pass the test defined by the given function. Any elements that fail to pass are taken out.
- Note that this does not change the original array
- arr.filter(callback(element), thisArg)
  - callback: The test function to execute on each array element. Will return true or false if an element passes or not
  - element: The current element from the array
  - thisArg(optional): The value to use as `this` when executing the function. By default, it is undefined

```
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.filter((number) => number % 2 === 0));

// Output: [2, 4, 6]
```

### 6. sort()

- Sorts the items of an array in a specific order (ascending or descending).
- Returns the array after sorting the elements of the array in place, meaning that it changes the original array and no copy is made.
- arr.sort(compareFunction):
- There is an optional compareFunction parameter that you can pass inside of sort() to have a custom way/function call to sort the elements.

```
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedArray = city.sort();
console.log(sortedArray);

// Output: ['Barcelona', 'California', 'Kathmandu', 'Paris']
```

### 7. map()

- Creates a new array with the results of calling a function for every array element.
- arr.map(callback(currentValue), thisArg):
  - Takes in a callback function which can take in a currentValue parameter
  - Has an optional value to use as `this` when executing the callback. It is undefined by default.
- It returns a new array with elements as the return values from the callback function for each element.
- map() does not change the original array

```
let numbers = [2, 4, 6, 8, 10];

function square(number) {
  return number * number;
}

// apply square() function to each item of the numbers list
let square_numbers = numbers.map(square);
console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]
```

### 8. push()

- Adds zero or more elements to the end of an array.
- arr.push(element1, element2, ..., elementN):
  - Takes in an arbitrary number of elements to add to the array
- This method changes the original array and its length

```
let city = ["New York", "Madrid", "Kathmandu"];
city.push("London");
console.log(city);

// Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]
```

### 9. pop()

- Removes the last element from an array and returns that element.
- The pop() method does not have any parameters
- Returns undefined if the array is empty

```
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
let removedCity = cities.pop();

console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity);   // Paris
```

### 10. shift()

- Removes the first element from an array and returns that element.
- Does not accept any arguments
- Returns undefined if the array is empty
- Changes the original array and its length

```
let languages = ["English", "Java", "Python", "JavaScript"];
let first = languages.shift();
console.log(first);
console.log(languages);

// Output: English
//         [ 'Java', 'Python', 'JavaScript' ]
```

### 11. unshift()

- Adds one or more elements to the beginning of an array and returns the new length of the array. (Remember: VIP)
- arr.unshift(element1, element2, ...elementN):
  - Takes in an arbitrary number of elements to add to the array
- Changes the original array and its length

```
let languages = ["Java", "Python", "C"];

// add "JavaScript" at the beginning of the array
languages.unshift("JavaScript");
console.log(languages);

// Output: [ 'JavaScript', 'Java', 'Python', 'C' ]
```

### 12. splice()

- Returns an array by changing (adding/removing/replacing) its elements in place.
- arr.splice(startingIndex, deleteCount, item1,... itemN):
  - startingIndex is the index position where the array is changed
  - deleteCount (optional) is the number of items to remove from the startingIndex
  - item1, ..., itemN (optional) are the elements to add to the start index. If not specified, then it will only remove elements from the array.
- Changes the original array

```
let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]
```

### 13. concat()

- Returns a new array by merging two or more values/arrays.
- arr.concat(value1, value2, ..., valueN):
  - Takes in an arbitrary number of arrays and/or values as arguments

```
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

/* Output:
[
  2, 3, 5, 7,
  2, 4, 6, 8
]
*/
```

### 14. from()

- Creates a new array from an array-like or iterable object.
- Array.from(arrayLike, mapFunc, thisArg):
  - arrayLike is an array-like or iterable object to convert to an array
  - mapFunc (optional) is a map function that is called on each element
  - thisArg (optional) is a value to use as `this` when executing mapFunc.
- Returns a new array and can create an array from iterable or array-like objects, such as strings, maps or sets.

```
// creating a new array from string
let newArray = Array.from("abc");
console.log(newArray);

// Output:
// [ 'a', 'b', 'c' ]
```
