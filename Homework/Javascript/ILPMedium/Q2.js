function tipAmount(billAmt, service) {
    let tip = 0
    switch (service) {
        case 'bad':
            tip = billAmt * 0.10
            break;
        case 'fair':
            tip = billAmt * 0.15
            break
        case 'good':
            tip = billAmt * 0.2
            break
    }
    console.log(`Your total tip amount is ${tip}`)
}

tipAmount(200, 'bad')