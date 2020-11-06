btn = document.querySelector('.button')

btn.classList.add('button')


btn.onclick = function (evt) {
    evt.target.classList.toggle('button')
}

// 


// const toggleHidden = function (evt) {
//     evt.target.nextSibling.classList.toggle('additional')
// }

// let info = document.querySelectorAll('.title')

// info.forEach(function (idea) {
//     idea.onclick = toggleHidden
// })

// let info = document.querySelectorAll('.additional')
// let title = document.querySelectorAll('.title')

let titles = document.querySelectorAll(".title")
const toggleHidden = function (evt) {
    evt.target.nextElementSibling.classList.toggle("additional")
}
titles.forEach(function (title) {
    title.onclick = toggleHidden
})