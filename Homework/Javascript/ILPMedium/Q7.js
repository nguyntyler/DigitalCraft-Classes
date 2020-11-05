function printBanner(text) {
    let border = ""
    for (let i = -4; i < text.length; i++) border += '-';

    let middle = `- ${text} -`

    console.log(border + '\n' + middle + '\n' + border)
}

printBanner('Hello govner')


function printBanner2(text) {
    console.log('-'.repeat(text.length + 4) + '\n' + '- ' + text + ' -' + '\n' + '-'.repeat(text.length + 4))
}

printBanner2('Hello govner')