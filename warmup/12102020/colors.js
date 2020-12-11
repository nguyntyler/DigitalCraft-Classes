const colors = require("./colors.json");

const findOrange = (arr) => {
	const foundOrange = arr.filter((color) => color === "orange");
	return foundOrange;
};

console.log(findOrange(colors));

const findColor = (arr, color) => {
	const foundColor = arr.filter((search) => search === color);
	return foundColor;
};

console.log(findColor(colors, "blue"));
