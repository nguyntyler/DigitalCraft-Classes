let loginForm = document.querySelector("#login")

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    console.log(evt.target)
    console.log(evt.target.elements)
})