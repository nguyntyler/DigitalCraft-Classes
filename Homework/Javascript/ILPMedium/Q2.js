function tipAmount(billAmt, service) {
    switch (service) {
        case 'bad':
            return billAmt * 0.10
        case 'fair':
            return billAmt * 0.15
        case 'good':
            return billAmt * 0.2
    }
    console.log(`Your total tip amount is ${tip}`)
}

console.log(tipAmount(200, 'bad'))