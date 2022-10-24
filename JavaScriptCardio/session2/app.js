// ====== CHALLENGE 1: LONGEST WORD ====== COMMENT
// Return the longest word of a string. If more than one longest word, put it into an array
//ex. longestEotf('Hello, my name is Brad') === 'hello'
//ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']
const longestWord = (sen) => {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //sort by length
  const sorted = wordArr.sort((a, b) => {
    return b.length - a.length;
  });

  //if multiple words, put into array
  const longestWordArr = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });

  //Check if more than one array val
  if (longestWordArr.length === 1) {
    console.log(longestWordArr[0]);
  } else {
    console.log(longestWordArr);
  }
};
// longestWord("Hello there, my name is Brad");

// ====== CHALLENGE 2: ARRAY CHUNKING ====== COMMENT
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1,2,3,4,5,6,7], 3) === [[1,2,3], [4,5,6], [7]]
// ex. chunkArray([1,2,3,4,5,6,7], 2) === [[1,2], [3,4], [5,6], [7]]
const chunkArray = (arr, len) => {
  // SOLUTION 1: WHILE LOOP
  //   // Initialize chunked array
  //   const chunkedArray = [];
  //   // Set index
  //   let i = 0;
  //   // Loop while index is less than the array length
  //   while (i < arr.length) {
  //     // Slice out from the index to the index + the chunk length and push on to the chunked array
  //     chunkedArray.push(arr.slice(i, i + len));
  //     // Increment by chunk length
  //     i += len;
  //   }
  //   console.log(chunkedArray);
  // SOLUTION 2: FOREACH HIGH ORDER
  //init
  const chunkedArr = [];
  //loop through arr
  arr.forEach((val) => {
    //Get last element
    const last = chunkedArr[chunkedArr.length - 1];
    //Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  console.log(chunkedArr);
};
// chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

// ====== CHALLENGE 3: FLATTEN ARRAY ====== COMMENT
// Reverse of chunked array; Take an array of arrays and flatten to a single array
// ex. [[1,2][3,4],[5.6],[7]] = [1,2,3,4,5,6,7]
const flattenArray = (arrays) => {
  // SOLUTION 1: REDUCE
  //   console.log(
  //     arrays.reduce((a, b) => {
  //       return a.concat(b);
  //     })
  //   );
  // SOLUTION 2: APPLY METHOD
  //   console.log([].concat.apply([], arrays));

  // SOLUTION 3: SPREAD OPERATOR
  console.log([].concat(...arrays));
};
// flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

// ====== CHALLENGE 4: ANAGRAM ====== COMMENT
// Return true if anagram and false if not
// Ex. 'Dormitory' === 'dirty room##'
const isAnagram = (str1, str2) => {
  console.log(formatStr(str1) === formatStr(str2));
};
//helper function
const formatStr = (str) => {
  //replace anything thats not a word character with ""
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};
// isAnagram("elbow", "below");

// ====== CHALLENGE 5: LETTER CHANGES ====== COMMENT
// Change every letter of the string to the one that follows it and capitalize the vowels.  Z should turn to A
// Ex. 'hello there' === 'Ifmmp UIfsf'
const letterChanges = (str) => {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      //Will give us the next character after the character with their designated character code
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => {
    return vowel.toUpperCase();
  });

  console.log(newStr);
};
// letterChanges("Hello There");
