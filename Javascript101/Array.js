// Create a list of letters at with at least 10 items.
// print the 4th item.
// concatinate the 6th and 3rd item and print the results.
// add 4 more letters one at a time to the end of the array.
// remove the first item of the array.
// join all of the letters together and send the results to the console.
// (bonus) sort the letters!

const myArr = ["a", "d", "w", "g", "s", "q", "j", "b", "v", "c"];

console.log(myArr[3]);

console.log(myArr[5] + myArr[2]);

myArr.push("dfg");
myArr.push("vbc");
myArr.push("uty");
myArr.push("rty");

console.log(myArr);

myArr.shift();

console.log(myArr);

console.log(myArr.join(""));

console.log(myArr.sort().join(""));
