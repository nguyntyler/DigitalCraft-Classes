let mainContent = document.querySelector('body')

let myList = [
    {
        url: 'http://www.youtube.com',
        id: 'youtube-link',
        text: 'This leads to youtube.'
    },
    {
        url: 'http://www.bing.com',
        id: 'bing-link',
        text: 'This leads to bing.'
    },
    {
        url: 'http://www.myspace.com',
        id: 'myspace-link',
        text: 'This leads to myspace.'
    },
]

let bigList = document.createElement('ul')
mainContent.append(bigList)

myList.forEach(function (link) {
    let lists = document.createElement('li')
    let a = document.createElement('a')
    lists.append(a)
    a.id = link.id
    a.innerText = link.text
    a.href = link.url

    bigList.append(lists)
})