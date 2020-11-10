import { getEl, element } from "./module/Elements.js"

const start = () => {
    let main = getEl("#main")
    let formHolder = makeEl("div", { id: "form-holder" });
    let form = makeEl("form", { id: "todo-form" });
    form.addEventListener("submit", (evt) => {

    })
}
document.addEventListener("DOMContentLoaded", start)