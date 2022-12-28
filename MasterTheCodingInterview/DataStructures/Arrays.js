// ==== Arrays Data Structure ====

// Arrays organize items sequentally, or one after another in memory.
//The simplest and most widely used. Have the least amount of rules, and have the smallest footprint due to its contiguous memory storage (being in order).

/*
lookup - O(1)
push - O(1)
insert - O(n)
delete - O(n)
*/

/*
PROS:
- Fast lookups
- Fast push() and pop()
- Ordered

CONS:
- Slow insertion
- Slow deletion
- Static arrays have fixed sizes

 */

const strings = ["a", "b", "c", "d"];
// 4 * 4 = 16 bytes of storage. Storing it sequentually in our RAM
strings[2]; //Grab the third item that is stored in our memory.

strings.push("e"); //O(1). Just adding one item at the end

strings.pop(); // O(1). Removes the last item of the array

strings.unshift("x"); // O(n). We have to realign the indexes and looping through all the items to arrange them. Add x at the beginning of the array

strings.splice(2, 0, "alien"); // O(n/2) --> O(n). Added 'alien' at index 2 in the array, shifting it into place and iterating through half the array

// console.log(strings);

/*
Static vs. Dynamic Arrays:
- Static arrays are fixed in size, meaning you need to specify the number of elements your array will hold. You know that the array will have 7 items, or a set amount. If we forgot an item, we'd have to copy the entire array and paste it with the new item in its new location. 
- Dynamic arrays allow us to copy and rebuild arrays at a new location. In languages like JS, they automatically reallocate the memory for you. It expands as you add more elements so you don't need to know how much it needs ahead of time. Dynamic arrays can possibly have an O(n) append because it is copying and putting the array in a new location, iterating over it.
*/

// ==== CLASSES IN JS ==== COMMENT

// Reference type - It is not stored directly where it is created, but it acts as a kind of pointer to a value stored elsewhere. It is created by the programmer
var object1 = { value: 10 };
var object2 = object1;

// Context - Tells you where you are within the object. "this" is a window object that tells you that we are in the window object, and when we do something like window.alert(), we are allowed to do that because we are inside of that object.
const object4 = {
  a: function () {
    console.log(this);
  },
};

// Instantiation - When you make a copies or an instances of an object and reuse the code.
class Player {
  constructor(name, type) {
    //The constructor makes properties for the Player class
    this.name = name;
    this.type = type;
  }
  introduce() {
    //A method
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  //I want wizard to add on top of what Player already has
  constructor(name, type) {
    super(name, type); // gives you access to the constructor in Player and lets you run introduce() as well as play(). Keep this at the top of the constructor or else an error occurs
  }
  play() {
    console.log(`Woo, I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer"); // Make an instance of Wizard
const wizard2 = new Wizard("Sean", "Dark Magic");
// wizard1.play();

// ======== CREATING AN ARRAY DATA STRUCTURE USING CLASSES ======== COMMENT
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; //Shifting item to the left by 1
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("are");
newArray.push("nice");
// console.log(newArray);
newArray.delete(1);
// console.log(newArray);

// ==== EXERCISE: REVERSE A STRING ===== COMMENT

//Create a function that reverses a string. 'Hi my name is Amanda' should return 'adnamA si eman ym iH'

const reverse = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("Please enter a string that has at least 2 characters");
    return "Please enter a string that has more than 2 characters";
  }
  const revString = str.split("").reverse().join("");
  console.log(revString);
};
// reverse("Hi");

// ====== EXERCISE: MERGE SORTED ARRAYS ====== COMMENT

// Create a function that takes in two arrays and merges them together into a larger single array that is sorted by least to greatest number order.
const mergeSorted = (array1, array2) => {
  for (let i = 0; i < array2.length; i++) {
    // iterates through array2 and pushes it into array1
    array1.push(array2[i]);
  }
  array1.sort((a, b) => a - b); // then sort array1 in ascending order
  console.log(array1);
};

mergeSorted([0, 3, 4, 31], [4, 6, 30]);

// MCI'S METHOD OF SOLVING THIS. Note that he made this less readable on purpose yet is still O(n) time complexity.
const mergedSorted2 = (arr1, arr2) => {
  const mergedArr = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArr;
};
