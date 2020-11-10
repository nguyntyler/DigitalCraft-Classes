// Make an array of ship objects (at least 3). Each ship needs a name, topSpeed, acceleration, and cargo capacity.
// console.log the name and top speed of the 2nd ship.
// loop through the array and print out every stat in a key:value style.
// (Bonus) sort the array by the ship with the fastest speed and console log it out..

let ships = [
    {
        name: 'Alpha',
        topSpeed: 100,
        acceleration: 20,
        capacity: 100,
    },
    {
        name: 'Beta',
        topSpeed: 50,
        acceleration: 40,
        capacity: 50,
    },
    {
        name: 'Charlie',
        topSpeed: 80,
        acceleration: 30,
        capacity: 60,
    },
]

console.log(ships[1].name, ships[1].topSpeed)

for (i in ships) {
    console.log(i)
    for (j in ships[i])

        console.log(j, ships[i][j])
}

console.log('---------------')

ships.forEach(function (ship) {
    for (i in ship) {
        console.log(i, ship[i])
    }
})

console.log('--------------')

ships.sort(function (a, b) {
    return a.topSpeed - b.topSpeed
})

console.log(ships)