const products = require("./products.json");

const onSale = (arr) => {
	const isSale = arr.filter((t) => t.price < t.originalPrice);
	const label = isSale.map((i) => {
		return `${i.name} is on sale at ${i.price}. (Originally at: ${i.originalPrice})`;
	});

	return label;
};

console.log(onSale(products));
