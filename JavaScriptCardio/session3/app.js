// ====== CHALLENGE 1: ADD ALL NUMBERS ======
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
//ex. addAll(2, 5, 6, 7) === 20
const addAll = (...numbers) => {
  //rest operator gives all of the parameters in an array
  //... SOLUTIONS: rest and reduce/forEach
  //   let total = 0;
  //   numbers.forEach((num) => {
  //     total += num;
  //   });
  //   console.log(total);
  console.log(numbers.reduce((acc, cur) => acc + cur));
};
addAll(2, 5, 6, 7, 5);
