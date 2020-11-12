let myObj = [1, 3, true, "false", "oklajona ksd"]

let jObj = JSON.stringify(myObj)

console.log(jObj)

let objArray = [
    {
        name: "tyler",
        age: 24
    },
    {
        name: "tim",
        age: 33
    },
    {
        name: "larry",
        age: 1
    }
]

let jObAr = JSON.stringify(objArray)
console.log(jObAr)

let jobarParse = JSON.parse(jObAr)
console.log(jobarParse)