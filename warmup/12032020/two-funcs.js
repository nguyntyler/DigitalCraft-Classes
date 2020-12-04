// . Two functions

// Write two functions that `console.log()` like so:
// ```js
// hey();
// // "hello"!

// hush();
// // "shhhhh"
// ```

const hey = () => {
	return "hello";
};
hey();

const hush = () => {
	return "shhhhh";
};
hush();

module.exports = { hey, hush };
