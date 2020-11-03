function positiveNumbers(numArray) {
    result = []
    numArray.forEach(function (i) {
        if (i >= 0) {
            result.push(i)
        }
    })
    console.log(result)
}

positiveNumbers([1, -23, -2, 33, 5, 4, -3, 0])