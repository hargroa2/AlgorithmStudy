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
const flattenArray = (arrays) => {};

// ====== CHALLENGE 4: ANAGRAM ====== COMMENT
