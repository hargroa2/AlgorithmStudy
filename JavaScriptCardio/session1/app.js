//NOTE: Remember to return things rather than console.log them. The returns do not show up in my terminal for some reason

// ====== 1: REVERSE A STRING ====== COMMENT
// Return a string in reverse
//Ex: reverseString('hello') === 'olleh'

const reverseString = (str) => {
  //   const strArr = str.split(""); // split converts a string into an array
  //   strArr.reverse();
  //   console.log(strArr.join("")); //turns it back into a string
  //====== HOW TO CLEAN IT UP: ======
  // console.log(str.split("").reverse().join(""));
  //=== V2: DECREASING FOR LOOP ======
  //   let revString = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     revString = revString + str[i];
  //   }
  //   console.log(revString);
  //====== INCREASING FOR LOOP ======
  //   let revString = "";
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     revString = str[i] + revString;
  //   }
  //   console.log(revString);
  //   ====== MODERN FOR OF LOOP ======
  //   let revString = "";
  //   for (let char of str) {
  //     revString = char + revString; //order of character first makes it backwards
  //   }
  //   console.log(revString);
  //   ====== HIGH ORDER ARRAY METHOD ======
  //   let revString = "";
  //   str.split("").forEach((char) => {
  //     //split converts it into an array. ForEach can only be used on arrays
  //     revString = char + revString;
  //   });
  //   console.log(revString);
  // ====== HIGH ORDER REDUCE METHOD *** ======
  //   console.log(str.split("").reduce((revString, char) => char + revString, ""));
};
reverseString("hello");

// ====== 2: VALIDATE A PALINDROME ====== COMMENT
const isPalindrome = (str) => {
  //   const revString = str.split("").reverse().join("");
  //   console.log(revString === str);
};
isPalindrome("racecar");

//====== 3: REVERSE AN INTEGER ====== COMMENT
const reverseInt = (int) => {
  //   const revString = int.toString().split("").reverse().join("");
  //   console.log(parseInt(revString) * Math.sign(int)); //Math.sign() returns the value with negative sign if including negative numbers
};
reverseInt(12345);

// ====== 4: CAPITALIZE LETTERS ====== COMMENT
// Capitalize the first letter of every word in a string
const capitalizeLetters = (str) => {
  //   const strArr = str.toLowerCase().split(" "); //the space is for when you want to split words and not characters
  //   for (let i = 0; i < strArr.length; i++) {
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   console.log(strArr.join(" "));
  // ====== HIGHER ORDER MAP METHOD *** ======
  //   console.log(
  //     str
  //       .toLowerCase()
  //       .split(" ")
  //       .map((word) => {
  //         return word[0].toUpperCase() + word.substring(1);
  //       })
  //       .join(" ")
  //   );
  // ====== REGULAR EXPRESSION METHOD ======
  //   console.log(
  //     str.toLowerCase().replace(/\b[a-z]/gi, (char) => {
  //       return char.toUpperCase();
  //     })
  //   );
};
capitalizeLetters("i love jaVascript");

// ====== 5: MAX CHARACTER ======
//Return the character that is most common in a string
const maxCharacter = (str) => {
  //   const charMap = {};
  //   let maxNum = 0;
  //   let maxChar = "";
  //   str.split("").forEach((char) => {
  //     if (charMap[char]) {
  //       charMap[char]++;
  //     } else {
  //       charMap[char] = 1;
  //     }
  //   });
  //   for (let char in charMap) {
  //     //for in loops iterate through objects
  //     if (charMap[char] > maxNum) {
  //       maxNum = charMap[char];
  //       maxChar = char;
  //     }
  //   }
  //   console.log(maxChar);
};
maxCharacter("javascript");

// ====== 6: FIZZBUZZ ======
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "buzz", and for multiples of both 3 and 5 print "FizzBuzz".
const FizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //can shorten it to i % 15 === 0
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
FizzBuzz();
