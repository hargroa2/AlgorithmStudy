/*
There are two types of linked lists: singly and doubly

It's a list that is linked. A singly linked list contains a set of nodes, like blocks. They have the value of the data you want to store and a pointer to the next node in line. The first node is called the head, and the last node is called the tail. They are null terminated, which signifies that it's the end of the list, so the tail node points to null. An element that links to the next element, to the next element, until the last one which points to null. They can be sorted or unsorted and can contain any data type. 

Note that JavaScript doesn't come pre-built with linked lists, so we would have to build one. Java, on the otherhand and as an example, does have it. 

Linked lists have a loose structure that allows you to insert something into the middle of the list by resetting a few of the pointers. In an array, placing something in the middle cost us some time and the difference is that in an array, elements are indexed, whereas a linkedlist must start at the head and traverse the list until you get to a certain item. This traversal is similar to iterating, but you never know when it will end. An array's memory storage is faster than linked list. Array items are next to each other in computer memory, while linked list items are stored in a scattered sense in the computer's memory, similar to hash tables. There is some sort of order in a linked list, so there is an advantage over hash tables in that sense. 

Prepend: O(1) --> Add to beginning of a LL
Append: 0(1) --> Add to end
Lookup: O(n) --> Traversal or look for an item
Insert: O(n) --> Find the index and insert the item
Delete: O(n) --> Find the index and delete the item
*/

let obj1 = { a: true };
let obj2 = obj1; // This is called a pointer, or a reference. They point to the same location in memory
obj1.a = "booya";
delete obj1;
obj2 = "hello";
// console.log("1", obj1);
// console.log("2", obj2);

//Javascript is garbage collected, meaning memory is managed automatically. What is in the object gets deleted because nothing is pointed to it.
// =============

// 10 --> 5 --> 16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
console.log(myLinkedList);
