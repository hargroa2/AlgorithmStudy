let addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
// console.log(addUpTo(3)); // O(n) linear time

let addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};
// console.log(addUpTo2(6)); // O(1) constant time

let countUpAndDown = (n) => {
  console.log("Going up!");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("At the top! \nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
};

// console.log(countUpAndDown(9)); // O(n) linear time

let printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      // O(n)
      console.log(i, j);
    }
  }
};

console.log(printAllPairs(2)); // O(n^2^)
