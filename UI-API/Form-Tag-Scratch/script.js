let bodyTag = document.querySelector("body")


let newForm = document.createElement("form")
newForm.id = "login"
bodyTag.append(newForm)

let usernameInput = document.createElement("input")
usernameInput.name = "username"
usernameInput.placeholder = "username"
usernameInput.style = "display: block; margin: 10px"
newForm.append(usernameInput)

let passwordInput = document.createElement("input")
passwordInput.name = "password"
passwordInput.placeholder = "password"
passwordInput.style = "display: block; margin: 10px"
passwordInput.type = "password"
newForm.append(passwordInput)

let checkboxInput = document.createElement("input")
checkboxInput.name = "agree"
checkboxInput.id = "checkbox"
checkboxInput.checked = true
checkboxInput.type = "checkbox"
checkboxInput.style = "margin: 10px"

let checkboxLabel = document.createElement("label")
checkboxLabel.setAttribute("for", "checkbox")
checkboxLabel.innerText = "Do you agree to the terms?"

newForm.append(checkboxLabel)
newForm.append(checkboxInput)

let emailInput = document.createElement("input")
emailInput.name = "email"
emailInput.placeholder = "email@email.com"
emailInput.type = "email"
emailInput.style = "display: block; margin: 10px"
newForm.append(emailInput)

let dateInput = document.createElement("input")
dateInput.name = "date"
dateInput.type = "date"
dateInput.style = "display: block; margin: 10px"
newForm.append(dateInput)

let submitButton = document.createElement("input")
submitButton.type = "submit"
submitButton.value = "Submit"
newForm.append(submitButton)
// let button = document.createElement("button")
// button.classList.add = "button"
// button.innerText = "Login"
// newForm.append(button)

// ---------------------

let infoDiv = document.createElement("div")
let loginForm = document.querySelector("#login")
bodyTag.append(infoDiv)

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    console.log(evt.target)
    console.log(evt.target.elements)

    let results = [...evt.target.elements]
        .filter(el => el.name)
        .map(el => ({ name: el.name, value: el.value }))

    results.forEach((input) => {
        let newTag = document.createElement("p")
        newTag.innerText = `${input.name} : ${input.value}`
        infoDiv.append(newTag)
    })

    evt.target.reset()
})

// ---------------------