var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//     return x * 2;
// });
// console.log(newNumbers);

// Using forEach
// var newNumbers = [];
// numbers.forEach(function (x) {
//     newNumbers.push(x * 2);
// });

// console.log(newNumbers)



//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//     return num < 10
// });


// var newNumbers = [];
// numbers.forEach(function (num) {
//     if (num < 10) {
//         newNumbers.push(num)
//     }
// });


// console.log(newNumbers);



//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNum) {
//     console.log("accumulator = " + accumulator);
//     console.log("currentNum = " + currentNum);
//     return accumulator + currentNum;
// })

// console.log(newNumber);


// var newNumber = 0;
// numbers.forEach(function (num) {
//     newNumber += num
// });

// console.log(newNumber);


//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//     return num > 10;
// });

// console.log(newNumber);



//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//     return num > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
