import { ajax } from "./modules.js"






let nationalPokedexNumberList = []

let generateNewCards = () => {
    nationalPokedexNumberList = []

    for (let i = 0; i < 5; i++) {
        let nationalPokedexNumber = Math.floor((Math.random() * 251))
        if (!(nationalPokedexNumber in nationalPokedexNumberList)) {
            nationalPokedexNumberList.push(nationalPokedexNumber)
        }
    }

    function shuffle(parseCards) {
        for (let i = 0; i < 100; i++) {
            let location1 = Math.floor((Math.random() * parseCards.length));
            let location2 = Math.floor((Math.random() * parseCards.length));

            let temp = parseCards[location1]
            parseCards[location1] = parseCards[location2];
            parseCards[location2] = temp;
        }
    }

    let cardArray = []

    nationalPokedexNumberList.forEach((num) => {
        ajax(`https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=${num}&pageSize=5`, (v) => {
            let parseResults = JSON.parse(v)
            let parseCards = parseResults.cards;
            console.log(parseResults)
            console.log('parsed')
            console.log(parseCards.length)
            shuffle(parseResults)
            console.log(parseResults)
            // cardArray.push(shuffledCards)


        })
    })
    console.log(cardArray)
}

let resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", generateNewCards)

// let button = document.querySelector(".add-card")
// button.addEventListener("click", placeCard)



// ajax(`https://api.pokemontcg.io/v1/cards?pageSize=2`, (v) => {
//     let parseResults = JSON.parse(v)
//     let parseCards = parseResults.cards;
//     console.log(parseResults)

//     let placeCard = () => {
//         let chooseCard = parseCards.pop()

//         let cardList = document.querySelector(".card-list")
//         let newCard = document.createElement("li")
//         newCard.innerText = chooseCard.name
//         let newPic = document.createElement("img")
//         newPic.src = chooseCard.imageUrl
//         newCard.append(newPic)
//         cardList.append(newCard)
//     }

//     let button = document.querySelector(".add-card")
//     button.addEventListener("click", placeCard)
// })




// ajax("https://api.pokemontcg.io/v1/cards?pageSize=10", (v) => {
//     let parseResults = JSON.parse(v)
//     let parseCards = parseResults.cards;

//     console.log(parseCards)

//     let placeCard = () => {
//         let chooseCard = parseCards.pop()

//         let cardList = document.querySelector(".card-list")
//         let newCard = document.createElement("li")
//         newCard.innerText = chooseCard.name
//         let newPic = document.createElement("img")
//         newPic.src = chooseCard.imageUrl
//         newCard.append(newPic)
//         cardList.append(newCard)
//     }

//     let button = document.querySelector("button")
//     button.addEventListener("click", placeCard)
// })