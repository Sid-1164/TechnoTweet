let player = {
    name: "Sid",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {

    if (isAlive === true) {
        cards = []
        sum = 0
    }

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum += firstCard + secondCard

    cards.push(firstCard)
    cards.push(secondCard)

    renderGame()
}

function getRandomCard() {
    let num = Math.random() * 13
    num = Math.floor(num) + 1

    if (num === 1) {
        return 11
    } else if (num >= 10) {
        return 10
    } else {
        return num
    }

}

function renderGame() {

    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
        cardEl.textContent += (" " + cards[i])
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got BlackJack!"
        hasBlackJack = true
    } else {
        message = "Busted!!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}