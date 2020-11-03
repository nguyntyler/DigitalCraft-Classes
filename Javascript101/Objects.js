// Create an object called 'spaceship'.
// give it the following keys with whatever values seems reasonable to you. speed,acceleration, passangers, fuel.
// Using the spaceship object above add a payload key after the object has been created. (just give it a number)
// Using the same object above, lower the amount of fuel by 1/3.
// loop through the object and give a message to the console like the one below for every property in the object.

let spaceship = {
    speed: 20,
    acceleration: 50,
    passengers: 20,
    fuel: 90,
}

spaceship.payload = 500

spaceship.fuel -= (spaceship.fuel / 3)

for (i in spaceship) {
    console.log(i, spaceship[i])
}