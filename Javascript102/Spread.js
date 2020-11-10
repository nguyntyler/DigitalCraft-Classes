// Create an array of letters and create an array of numbers.

// Using the spread operator create an array of the values of the letters first then the numbers.
// Make another array with the numbers first.

let letArray = ['a', 'v', 'd', 'g']
let numArray = [1, 2, 4, 6]

let letnumArray = [...letArray, ...numArray]

console.log(letnumArray)

let numletArray = [...numArray, ...letArray]

console.log(numletArray)

// Using the spread operator when possible do the following:

const cars = [
    {
        make: "Chevy",
        model: "Corvette",
        year: 2019
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2018
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2020
    },
    {
        make: "GMC",
        model: "h2",
        year: 2010
    }
]
// Create a new array adding at least 2 more cars.
let newCars = [...cars, { make: 'abc', model: 'Model 22', year: 2018 }, { make: 'nbc', model: 'Model 30', year: 2019 }]

console.log(newCars)

// From that new array return another array removing any cars made before 2018.
let currentCars = [...newCars.filter(car => car.year >= 2018)]

console.log(currentCars)

// Create a new array with a 2010 ford focus added to the begining.

let thirdCars = [{ make: 'ford', model: 'focus', year: 2010 }, ...currentCars]

console.log(thirdCars)

// Create a new array of the cars sorted by date without changing the original cars array.

let finalCars = [...thirdCars].sort((a, b) => b.year - a.year)

console.log(finalCars)
console.log(thirdCars)