function printSquare(size) {
    let i = 0
    while (i < size) {
        let row = ""
        j = 0
        while (j < size) {
            row += '*'
            j++
        }
        console.log(row)
        i++
    }
}
printSquare(4)

const printSquare2 = function (v) {
    let s = '*'.repeat(v)
    i = 0
    while (i < v) {
        console.log(s)
        i++
    }
}

let s = '*'.repeat(v) + '\n'
console.log(s.repeat(s))