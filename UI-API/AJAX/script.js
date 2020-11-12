import { ajax } from "./modules.js"

ajax("text.txt", (resp) => {
    document.body.append(resp)
})

let ul = document.createElement("ul")
document.body.append(ul)

const makeList = (resp) => {
    let newLi = document.createElement("li");
    newLi.append(resp);
    newLi.style = "list-style: none"
    ul.append(newLi)
}

ajax("text.txt", (resp) => {
    document.body.append(resp)
})

ajax("text1.txt", makeList)
ajax("text2.txt", makeList)
ajax("text3.txt", makeList)