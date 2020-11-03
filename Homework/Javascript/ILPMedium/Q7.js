function printBanner(text) {
    let border = ""
    for (let i = -4; i < text.length; i++) {
        border += '-'
    }
    let middle = `- ${text} -`

    console.log(border + '\n' + middle + '\n' + border)
}

printBanner('Hello govner')