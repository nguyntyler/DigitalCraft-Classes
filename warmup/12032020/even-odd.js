// 2. Even or Odd?

// The goal is to write a function that behaves like this:

// ```js
// getNumbers(arr, "even");
// // [2, 4, 6, 8, 10]

// getNumbers(arr, "odd");
// // [1, 3, 5, 7, 9]
// ```

// Create a variable for this Array:

// ```js
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ```

// Write a function that accepts an Array of numbers and a String.

// If the value of the String is `"even"`, return the even numbers from the Array.

// If the value is `"odd"`, return the odd numbers.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = (num) => num % 2 === 0;

const isOdd = (num) => num % 2;

const getNumbers = (arr, string) => {
	if (string === "even") {
		return arr.filter(isEven);
	} else if (string === "odd") {
		return arr.filter(isOdd);
	}
};

console.log(getNumbers(nums, "even"));

module.exports = isEven;
