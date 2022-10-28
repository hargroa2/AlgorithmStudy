# Array and String Method Study Guide

There are a total of 21 methods that were utilized within these exercises. I will break down each of them and provide small examples to demonstrate how they work, as well as separate them into array methods and string methods sections. I will add more methods to this that are not within the sessions for studying purposes if need be.

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

---

## Array Methods
