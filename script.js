let player = {
    name: "Per",
    chips: 200
}

let cardList = []
let total = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cards = document.getElementById("cards")
let sum = document.getElementById("sum")
let playerEl = document.getElementById("player-el")
let winLose = document.getElementById("win-lose")

playerEl.textContent = player.name + ": $" + player.chips


function randomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    total = 0
    let firstCard = randomCard()
    cardList = [firstCard]
    total = totalCard()
    renderCard()
}

function totalCard(){
    for(let i = 0; i < cardList.length; i++){
        total += cardList[i]
    }
    return total
}

function renderCard(){

    cards.textContent = "Cards: "
    for(let i = 0; i < cardList.length; i++){
        cards.textContent += cardList[i] + " " 
    }
    
    let x = player.chips
    sum.textContent = "Sum: " + total
    if(total <= 20){
        message = "Do you want to draw another Card?"
    }
    else if(total === 21){
        message = "Congratulations! You got BlackJack."
        hasBlackJack = true
        x += 10
        player["chips"] = x
        playerEl.textContent = player.name + ": $" + player.chips
        winLose.textContent = "You Won $10"
    }
    else{
        message = "GameOver! You are out of the game."
        isAlive = false
        x -= 30
        player["chips"] = x
        playerEl.textContent = player.name + ": $" + player.chips
        winLose.textContent = "You Lose $30"
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = randomCard()
        total += card
        cardList.push(card)
        renderCard()
    }
}