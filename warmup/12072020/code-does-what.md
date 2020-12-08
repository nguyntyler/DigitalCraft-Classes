# 2. What does this code do?

```js
const breakfastOptions = [
	"banana",
	"cereal",
	"croissant",
	"coffee",
	"granola + yogurt",
	"smoothie",
	"menthols and diet coke",
];

for (let i = 0; i < breakfastOptions.length; i++) {
	console.log(`I would like ${breakfastOptions[i]} to go.`);
}
```

Write a brief description (2-3 sentences).

**Answer**
It iterates through each item in the array breakfastOptions by use of the incrementing index number in the for loop. It console logs each one as it iterates through.

# 3. Rewrite the code from #2

Do you know of other ways to accomplish the same result?

**Answer**

```js
breakfastOptions.forEach((item) => console.log(item));
```
