// CHALLENGE 1: LONGEST WORD COMMENT
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
longestWord("Hello there, my name is Brad");

// CHALLENGE 2: ARRAY CHUNKING COMMENT
const chunkArray = (arr, len) => {};

// CHALLENGE 3: FLATTERN ARRAY COMMENT
const flattenArray = (arrays) => {};

// CHALLENGE 4: ANAGRAM COMMENT
