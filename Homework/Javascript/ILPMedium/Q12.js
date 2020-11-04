function decipher(text, offset) {
    let result = ""

    for (letter in text) {
        let code = text.charCodeAt(letter)
        if (code > 64 && code < 91) {
            code -= offset
            while (code < 65) {
                code = 91 - (65 - code)
            }



        } else if (code > 96 && code < 123) {
            code -= offset
            while (code < 97) {
                code = 123 - (97 - code)
            }
        }
        result += String.fromCharCode(code)
    }
    console.log(result)
}

decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13)