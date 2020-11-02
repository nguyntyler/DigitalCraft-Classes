let value = 10

if (value > 10) {
    console.log('Your number is less than 10.')
} else if (value = 10) {
    console.log('Your number is 10.')
} else {
    console.log('Your number is higher than 10.')
}


let result = value > 5 ? 'higher' : 'lower'

console.log(result)

let temp = 70
let color = null

switch (true) {
    case (temp < 0):
        color = '#64EBFA';
        break;
    case (temp < 30):
        color = '#64FAD4';
        break;
    case (temp < 50):
        color = '#64FAA5';
        break;
    case (temp < 75):
        color = '#47F22B';
        break;
    case (temp < 80):
        color = 'D5FC0C';
        break;
    case (temp < 90):
        color = '#FC8B0C';
        break;
    default:
        color = '#FC1B0C'
}

console.log(color)

// 0, 30, 50, 75, 80, 90