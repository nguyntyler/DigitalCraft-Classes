// 3. Call me, maybe

// Using the two functions from warmup #1, write a function that behaves like this:

// ```js
// callMeMaybe(1, hey, hush);
// // "hello"

// callMeMaybe(4, hey, hush);
// // "shhhhh"
// ```

// Define a function named `callMeMaybe()` that expects to receive 3 arguments: a Number, a function, and another function.

// If the Number argument is odd, call the first function.

// If the Number argument is even, call the second function.

const isEven = require("./even-odd");
const { hey, hush } = require("./two-funcs");

const callMeMaybe = (num, func1, func2) => {
	if (num % 2 === 0) {
		return func1();
	} else if (num % 2) {
		return func2();
	}
};
const callMaybe = (num, func1, func2) => (num % 2 ? func2() : func1());

console.log(callMeMaybe(2, hey, hush));
console.log(callMeMaybe(1, hey, hush));
console.log(callMaybe(1, hey, hush));
console.log(callMaybe("h", hey, hush));
