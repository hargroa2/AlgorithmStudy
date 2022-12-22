// ==== Arrays Data Structure ====

// Arrays organize items sequentally, or one after another in memory.
//The simplest and most widely used. Have the least amount of rules, and have the smallest footprint due to its contiguous memory storage (being in order).

/*
lookup - O(1)
push - O(1)
insert - O(n)
delete - O(n)
*/

const strings = ["a", "b", "c", "d"];
// 4 * 4 = 16 bytes of storage. Storing it sequentually in our RAM
strings[2]; //Grab the third item that is stored in our memory.

strings.push("e"); //O(1). Just adding one item at the end

strings.pop(); // O(1). Removes the last item of the array

strings.unshift("x"); // O(n). We have to realign the indexes and looping through all the items to arrange them. Add x at the beginning of the array

strings.splice(2, 0, "alien"); // O(n/2) --> O(n). Added 'alien' at index 2 in the array, shifting it into place and iterating through half the array

console.log(strings);

/*
Static vs. Dynamic Arrays:
- Static arrays are fixed in size, meaning you need to specify the number of elements your array will hold. You know that the array will have 7 items, or a set amount. If we forgot an item, we'd have to copy the entire array and paste it with the new item in its new location. 
- Dynamic arrays allow us to copy and rebuild arrays at a new location. In languages like JS, they automatically reallocate the memory for you. It expands as you add more elements so you don't need to know how much it needs ahead of time. Dynamic arrays can possibly have an O(n) append because it is copying and putting the array in a new location, iterating over it.
*/
