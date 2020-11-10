// Create an array of vehicle objects.

// each vehicle object needs to have keys of name, speed, passangers.
// using map, create a list of names of the vehicles.

vehicles = [
    {
        name: 'van',
        speed: 20,
        passengers: 6,
    },
    {
        name: 'truck',
        speed: 40,
        passengers: 4,
    },
    {
        name: 'motorcycle',
        speed: 70,
        passengers: 2,
    }
]

const vehicleNames = vehicles.map((vname) => vname.name)

console.log(vehicleNames)

// -----------------
// Create an array of at least 6 todo items with each todo having keys, id, todo, status.

// Limit the status to "complete","in-progress","todo"
// Using map create a list of different status.
// using map of those status, make a list of status objects that has keys status, and items.
//   //final array should look something like this
//   [
//     {
//         status:"complete",
//         items:["Pick up yard", "clean bathroom"]
//     },
//     {
//         status:"in-progress",
//         items:['brush teeth']
//     },
//     {
//         status:"todo",
//         items:["feed kids", "vote"]
//     }
// ]

let things = [
    {
        id: '1',
        todo: 'rake leaves',
        status: 'complete',
    },
    {
        id: '2',
        todo: 'brush teeth',
        status: 'complete',
    },
    {
        id: '3',
        todo: 'wash dishes',
        status: 'in-progress',
    },
    {
        id: '4',
        todo: 'clean bathroom',
        status: 'todo',
    },
    {
        id: '5',
        todo: 'fold laundry',
        status: 'todo',
    },
    {
        id: '6',
        todo: 'sleep',
        status: 'todo',
    },
]

// SHOULD FILTER FIRST THEN MAP. FILTER THE STATUSES AND THEN MAP OUT.

