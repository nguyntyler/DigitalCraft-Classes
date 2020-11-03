function tipAmount(billAmt, service) {
    switch (service) {
        case 'bad':
            return billAmt += billAmt * 0.10
        case 'fair':
            return billAmt += billAmt * 0.15
        case 'good':
            return billAmt += billAmt * 0.2
    }
}

console.log(tipAmount(100, 'good'))