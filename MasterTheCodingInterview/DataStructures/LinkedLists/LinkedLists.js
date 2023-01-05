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
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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

  insert(index, value) {
    //check parameters
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    console.log(this.printList);
    return this.printList;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    console.log(currentNode);
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.null) {
      console.log(this.head);
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    console.log(this.printList());
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.reverse();
// console.log(myLinkedList);

// Doubly linked lists are similar to singly, except that it links to the node before it. The next node to a head will point back to the previous node that links it. They allow us to traverse our list backwards.Singly lists don't allow me to know what comes before a certain node, but a doubly one does.
// You should use a singly linked list: It requires less memory, a little faster if we have to delete something. But it cannot be traversed from back to front. It can be used when your goal is to have fast insertion and deletion and you don't really have that much searching. A doubly LL: It can be iterated or traversed from the front or back, and if you need to delete a previous node, you can do that fairly easily. Downside is that it is fairly complex and requires more memory because of this extra property and requires more operations since we have to keep track of a previous node. You want them when you don't have limitation on memory and you want good operation on searching elements like finding something backwards or forwards.
// Linked List pros: fast insertion, fast deletion, ordered, flexible size. Cons: slow lookups, more memory
