/*
1. Even or odd?
*/

const likes = require("./numbers.json");
// let total = 0;
// likes.forEach((num) => {
// 	total += num;
// });
// console.log(total);

if (likes[0] % 2) {
	console.log("That number is odd.");
} else {
	console.log("That number is even.");
}

// In a function that just returns true or false.

const isEven = (num) => num % 2 === 0;
// This just returns the boolean.

const isEven2 = (num) => (num % 2 ? "False" : "True");
// This returns a string.

console.log(isEven2(likes[0]));
console.log(isEven(likes[1]));
console.log(isEven2(likes[2]));
console.log(isEven(likes[3]));

/* Using isEven() with the likes array. */

for (let like of likes) {
	if (isEven(like)) {
		console.log(like);
	}
}
// This only prints the even numbers one by one.

const onlyEvens = likes.filter(isEven);
console.log(onlyEvens);
console.log(onlyEvens.length);
// This prints the even numbers in a single array.

/* What got over 20,000 likes? */

const manyLikes = likes.filter((like) => like > 20000);
console.log(manyLikes);
console.log(manyLikes.length);
