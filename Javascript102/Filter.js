// Create an array of at least 6 todo items with each todo having keys, id, todo, status, deadline (timestamp).
// Make at least one date before today.
// Limit the status to "complete","in-progress","todo"
// Using filter, create an array of only the complete items.
// Using find, get the soonest todo item that has a status of "todo".
// using filter get an array of all of the past due items.

let timestamp = new Date().getTime()

let things = [
    {
        id: '1',
        todo: 'rake leaves',
        status: 'in-progress',
        deadline: '11/1/2020'
    },
    {
        id: '2',
        todo: 'brush teeth',
        status: 'complete',
        deadline: '11/20/2020'
    },
    {
        id: '3',
        todo: 'wash dishes',
        status: 'in-progress',
        deadline: '11/21/2020'
    },
    {
        id: '4',
        todo: 'clean bathroom',
        status: 'todo',
        deadline: '11/23/2020'
    },
    {
        id: '5',
        todo: 'fold laundry',
        status: 'complete',
        deadline: '11/29/2020'
    },
    {
        id: '6',
        todo: 'sleep',
        status: 'todo',
        deadline: '11/29/2020'
    },
]

let completedTasks = things.filter(completed => completed.status == 'complete')

console.log(completedTasks)

// -----------

let firstToDo = things.sort((a, b) => a.deadline.getTime() - b.deadline.getTime())
    .find(t => {
        if (t.deadline.getTime() > timestamp && t.status == 'todo') {
            return true;
        }
    })

// -------------

let pastDate = things.filter(tasks => new Date(tasks.deadline).getTime() < timestamp)
console.log(pastDate)