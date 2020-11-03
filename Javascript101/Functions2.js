
function myFunc(anonFunc, num) {
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
    anonFunc()
}

const anonFuncVar = function () {
    console.log('I think I got it.')
}

myFunc(anonFuncVar, 5)

myFunc(function () {
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }
}, 10)

