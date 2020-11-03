function printNumbers(start, end) {
    for (; start <= end; start++) {
        console.log(start)
    }
}

printNumbers(4, 15)

function printNumbers2(start, end) {
    while (start <= end) {
        console.log(start)
        start++
    }
}

printNumbers2(4, 10)