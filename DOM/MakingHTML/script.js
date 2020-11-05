let mainBody = document.querySelector('body')

let h1Tag = document.createElement('h1')
let h1Text = document.createTextNode("This is a header.")

h1Tag.append(h1Text)
mainBody.append(h1Tag)

let mainContent = document.createElement('main')
mainBody.append(mainContent)

let section = document.createElement('section')
mainContent.append(section)

let h2Tag = document.createElement('h2')
let h2Text = document.createTextNode('This is a smaller header inside section.')

h2Tag.append(h2Text)
section.append(h2Tag)

let pTag = document.createElement('p')
let pText = document.createTextNode('This is some text inside the p tag.')

pTag.append(pText)
section.append(pTag)

let bigList = document.createElement('ul')

mainContent.append(bigList)

for (let i = 0; i < 3; i++) {
    let list = document.createElement('li')
    let listText = document.createTextNode(`This is list ${i}.`)
    list.append(listText)
    bigList.append(list)
}