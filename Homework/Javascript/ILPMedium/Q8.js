function leetSpeak(text) {
    let textSplit = text.split('')
    let result = ""
    textSplit.forEach(function (i) {
        switch (i) {
            case 'a':
                i = 4;
                break;
            case 'e':
                i = 3;
                break;
            case 'g':
                i = 6;
                break;
            case 'o':
                i = 0;
                break;
            case 't':
                i = 7;
                break;
            case 'l':
                i = 1;
                break
        }
        result += i
    })
    console.log(result)
}

leetSpeak('hello, this is leetspeak')