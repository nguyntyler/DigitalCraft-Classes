// Write an arrow function that accepts a number as an argument and multiplys that number by itself and returns the value.
const timesTwo = (arg) => arg * 2

console.log(timesTwo(8))

// ----------------------
// Write an arrow function that has 2 arguments. Add the two arguments and console.log the results.

const addNums = (num1, num2) => num1 + num2

console.log(addNums(8, 5))

// ----------------------
// Write an array of names.
// using forEach loop through the array and have the callbakc function be an arrow function that prints will print the index +1 and then the name.

myArr = ['Tyler', 'Nguyen', 'Tony', 'Banana']

const myForEachFunc = (letter, idx) => console.log(`${idx + 1}. ${letter}`)

myArr.forEach(myForEachFunc)

// // ----------------------

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// console.log(Object.keys(object1));