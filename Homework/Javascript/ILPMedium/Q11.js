function cipher(text, offset) {
    // Created to concact the resulted offsetted letter.
    let result = ""

    // Loops through each letter and gets the index.
    for (letter in text) {

        // .charCodeAt finds the unicode of the character using the index.
        let code = text.charCodeAt(letter)

        // Checking for capital letters. Unicode for A-Z is 65-90.
        if (code > 64 && code < 91) {

            // Adds the offset to the unicode. Unicode goes in order numerically.
            code += offset

            // First error handling for a resulting code that goes past 90, or Z.
            while (code > 90) {

                // This makes the overage start back at A.
                code = 64 + (code - 90)
            }

            // Checks for lowercase letters.
        } else if (code > 96 && code < 123) {
            code += offset
            while (code > 122) {
                code = 96 + (code - 122)
            }
        }

        // The new offsetted unicode is then changed back into a string by .fromCharCode and concatenated into result.
        result += String.fromCharCode(code)
    }
    console.log(result)
}

cipher('Genius without education is like silver in the mine', 13)