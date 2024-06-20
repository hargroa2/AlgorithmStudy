# Analyzing Performance of Arrays and Objects

## Objects

- An object is a data type structure that is made up of unordered key-value pairs and is used to store various keyed collections and more complex entities

```
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}
```

### When To Use Objects

- When you don't need order
- When you need fast access / insertion and removal

  - Insertion - 0(1)
  - Removal - O(1)
  - Searching - O(n)
  - Access - O(1)

    - Note: Objects are so quick when it comes to working with information due to something called hashing, which entails hash maps and hash tables. They help to explain how objects work under the surface, as computers cannot readily grab pieces of information like that naturally.
    - Searching in this context is not accessing a key, but by checking to see if a given piece of information is in a value somewhere by looping through the entire object for what you need

### Big O of Object Methods

- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty - O(1)
  - Object.keys returns an array of keys, and as the number of items in there grows, we're going to have to visit every single thing once and add it to the array. Same with Object.values and Object.entries that gives both the key and value
  - hasOwnProperty simply returns a boolean that tells us if the property that we pass in is in the object

## Arrays

- Arrays aren't a primitive but an object in JavaScript that allows you to store a collection of multiple items under a single variable name, and are basically ordered lists that have indices to help reference each item inside.

```
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];
```

### When To Use Arrays

- When you need order
- When you need fast access / insertion and removal (sort of)

Big O of Arrays

- Insertion - It depends...
  - Pushing an item to the end is constant time
  - Inserting an item at the beginning means that all of the items have to be re-indexed, which is not an easy task, making it O(n)
- Removal - It depends...
  - Removing an item at the beginning means that all of the items have to be re-indexed, which is not an easy task, making it O(n)
  - Searching - O(n)
  - Access - O(1)

### Big O Array Methods

- push - O(1)

  - Adds an item to the end of an array
  - `arr.push("item")`

- pop - O(1)

  - Removes an item at the end of an array
  - `arr.pop()`

- shift - O(n)

  - Removes an item at the beginning of an array
  - `arr.shift()`

- unshift - O(n)

  - Adds an item at the beginning of an array
  - `arr.unshift("item")`

- concat - O(n)

  - Takes 2 arrays and merges them together
  - `array1.concat(array2)`

- slice - O(n)

  - Returns a copy of part of an array or the entire thing if you want it to
  - `arr.slice(2, 4)`

- splice - O(n)

  - Removes and adds (and possibly replaces) new elements from the original contents of an array
    - `arr.splice(4, 1, 'itemToReplace1ElementAtIndex4')`

- sort - O(n \* log n)

  - Sorts the elements of an array and returns the reference to that same array, with the default order being ascending, converting elements to strings, then comparing their UTF-16 code values for letters.
  - `arr.sort()`
  - This time complexity is more complicated than O(n), and there are many varieties of sorting algorithms out there to analyze

- forEach/map/filter/reduce/etc. - O(n)

  - `forEach` executes a provided function once for each array element

    - `arr.forEach((e) => console.log(e))`

  - `map` creates a new array populated with the results of calling a provided function on every element in the calling array

    - `arr.map((x) => x * 2)`

  - `filter` creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function

    - `arr.filter((item) => item.length > 6)`

  - `reduce` executes a callback function on each element of the array, in order, passing in the return vaue from the calculation on the preceding elements and finally giving a single value as a result
    - `arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)`
