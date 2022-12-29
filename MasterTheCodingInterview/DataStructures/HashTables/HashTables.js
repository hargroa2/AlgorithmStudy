// Hash tables or hash maps or objects are one of the most common data structures out there. It uses key-value pairs in order to store data and uses the key as an index for the item.
// A key runs a hash function, which will map the hash and place it into a memory address.

/*
insert: O(1) - Automatically goes into memory address
lookup: O(1) - Will direct us immediately 
delete: O(1) - The key will direct us immediately. No need to shift indexes
search: O(1) - Will simply use the hash functions
*/

let user = {
  age: 54,
  magic: true,
  scream: () => {
    console.log("Ahhh!");
  },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
// user.scream(); // O(1)

/*
Hash collision - With enough data and limited memory, we will have a possibility where a key-value pair will take up the same memory space as a pair already there in that allocated space. It slows down reading and writing to O(n/k), where k is the size of the hash table. The collisions can be solved via Linked Lists, or things like robin hood hashes. Therefore, a hash table can possibly have an O(n) time complexity.

Object vs. Map - A map allows you to save any data type as the key. With an object, you can only have the key as a string. A map allows us to even have functions as keys or arrays as keys. Maps maintains insertion order as well.  There is no order in objects, since values are sorted randomly in different memory addresses. 

Sets are similar to maps, with the only difference is that they only store the keys with no values. 
*/

// ====== ARRAYS VS. HASHTABLES ======

/*
Arrays:
search - O(n)
lookup - O(1)
push - O(1)
insert - O(n)
delete - O(n)

Hash Tables:
search - O(1)
insert - O(1)
lookup - O(1)
delete - O(1)
*/

// EXERCISE: FIRST RECURRING NUMBER

// Write a function that takes an array as an input and outputs the first recurring number that appears in it. If the array contains no repeated numbers, then return undefined

// O(n^2) solution
const firstRecurring = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        console.log(array[i]);
        return array[i];
      }
    }
  }
  console.log(undefined);
  return undefined;
};

// firstRecurring([1, 5, 1, 2, 3, 5, 1, 2, 4]);

// O(n) version
const firstRec2 = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      console.log(arr[i]);
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
    console.log(map);
  }
  return undefined;
};

firstRec2([3, 5, 1, 2, 3, 5, 1, 2, 4]);

/*
PROS:
- Fast lookups *good collision resolution needed
- Fast inserts
- Flexible keys

CONS:
- Unordered
- Slow key iteration
*/
