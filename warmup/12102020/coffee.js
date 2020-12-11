const coffee = require("./coffee.json");

const funcsjhf = (arr) => {
	const findExpresso = arr.filter((i) => i.order === "espresso");

	const findPrice = findExpresso.map((i) => i.cost);

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const addPrice = findPrice.reduce(reducer);
	return addPrice;
};

console.log(funcsjhf(coffee));

// ------------------

const findPrices = (arr, item) => {
	const itemArray = arr
		.filter((trans) => trans.order == item)
		.map((item) => item.cost)
		.reduce((a, b) => a + b);
	return itemArray;
};
console.log(findPrices(coffee, "espresso"));
// Wes's

/* Chris's */

// Total cost for expresso
function calculateTotal(arr) {
	const orderType = "espresso";

	// Get everything matching 'esprsso'
	const justEspresso = arr.filter((o) => {
		/* does the o.order === espresso?
        if (o.order === orderType) {
            return true;
        } else {
            return false:
        } */ // Can be simplified down to:
		return o.order === orderType;
	});
	// console.log(justEspresso); Checking

	// grab just the costs
	const justCosts = justEspresso.map((o) => {
		// Pick out the .cost
		return o.cost;
	});
	// console.log(justCosts) Checking

	// add it up
	let total = 0;
	for (let cost of justCosts) {
		total = total + cost;
	}
	return total;

	// reduce method
	// Reduce keeps a running total. Starts with starter value which is the 0.
	// Whats the current item its looking at? And what's the current starting total>
	let finalTotal = justCosts.reduce((runningTotal, currentItem) => {
		// Add the current item to the running total.
		let sum = runningTotal + currentItem;
		console.log(sum);

		runningTotal = sum;
		return runningTotal;
	}, 0);
}

console.log(calculateTotal(coffee));
