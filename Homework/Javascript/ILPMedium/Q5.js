function printSquare(size) {
    let i = 0
    while (i < size) {
        row = ""
        j = 0
        while (j < size) {
            row += '*'
            j++
        }
        console.log(row)
        i++
    }
}
printSquare(3)