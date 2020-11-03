

function cipher(text) {
    textArray = text.split('')

    let result = ""

    textArray.forEach(function (i, idx) {
        let alphabetArray = ('abcdefghijklmnopqrstuvwxyz').split("")
        alphabetArray.forEach(function (l, ldx) {
            if (i == l) {
                i = ldx + 5
                result += i
            }

        })
    })
    console.log(result)




}

cipher('hello')


function Cipher(text) {

}