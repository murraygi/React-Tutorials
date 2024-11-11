// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// // function double(x) {
// //   return x * 2;
// // }

// // const newNumbers = numbers.map(double);
// // console.log(newNumbers);

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// //Filter - Create a new array by keeping the items that return true.

// const filterNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// //Reduce - Accumulate a value by doing something to each item in an array.

// let reduceNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator is " + accumulator);
//   console.log("currentNumber is " + currentNumber);
//   return accumulator + currentNumber;
// });

// //Find - find the first item that matches from an array.

// let findNumbers = numbers.find(function (num) {
//   return num > 10;
// });

// //FindIndex - find the index of the first item that matches.

// let findIndexNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

import emojipedia from "./emojipedia";

// let emojiFilter = emojipedia.map((element, index) => {
//   return index % 3 === 0;
// });

// console.log(emojiFilter);

// let emojiMeaning = emojipedia.map((emoji) => emoji.meaning.substring(0, 100));
// console.log(emojiMeaning);

const newEmoji = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmoji);
