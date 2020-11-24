// Create a function that accepts a string as an argument.
// Have the program write to the terminal "The cow says ... {the value supplied}"
// Call that function 3 times with 3 different strings as the argument.

let myFunc = (arg1) => {
    console.log(`The cow says ${arg1}.`)
}

myFunc("moo")

myFunc("bark")

myFunc("meow")