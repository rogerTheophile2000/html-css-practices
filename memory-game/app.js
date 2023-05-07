const cardArray = [
    {
        name: "fries",
        image : "images/fries.png"
    },
    {
        name: "cheeseburger",
        image : "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        image : "images/hotdog.png"
    },
    {
        name: "ice-cream",
        image : "images/ice-cream.png"
    },
    {
        name: "milkshake",
        image : "images/milkshake.png"
    },
    {
        name: "pizza",
        image : "images/pizza.png"
    },
    {
        name: "fries",
        image : "images/fries.png"
    },
    {
        name: "cheeseburger",
        image : "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        image : "images/hotdog.png"
    },
    {
        name: "ice-cream",
        image : "images/ice-cream.png"
    },
    {
        name: "milkshake",
        image : "images/milkshake.png"
    },
    {
        name: "pizza",
        image : "images/pizza.png"
    },
];

cardArray.sort( () => 0.5 - Math.random());

// console.log(cardArray);

const gridDisplay = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");

let cardChosen = [];
let cardChosenIds = [];
const cardsNon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll("img");
    const optionsOneID = cardChosenIds[0];
    const optionsTwoID = cardChosenIds[1];
    
    if(optionsOneID == optionsTwoID) {
        cards[optionsOneID].setAttribute("src", "images/blank.png");
        cards[optionsTwoID].setAttribute("src", "images/blank.png");
        alert("You have clicked the same image!");

    }

    if( cardChosen[0] == cardChosen[1]) {
        alert("You found a match !!")
        cards[optionsOneID].setAttribute("src", "images/white.png");
        cards[optionsTwoID].setAttribute("src", "images/white.png");
        cards[optionsOneID].removeEventListener("click", flipCard);
        cards[optionsTwoID].removeEventListener("click", flipCard);
        cardsNon.push(cardChosen);
    } else {
        cards[optionsOneID].setAttribute("src", "images/blank.png");
        cards[optionsTwoID].setAttribute("src", "images/blank.png");
        alert("Sorry try again !")
    }
    scoreDisplay.textContent = cardsNon.length
    cardChosen = []
    cardChosenIds = []

    if(cardsNon.length == (cardArray.length / 2)) {
        scoreDisplay.textContent = "Congratulation you found then all"
    }
}

function flipCard() {
    const cardID = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardID].name);
    cardChosenIds.push(cardID);
    this.setAttribute("src", cardArray[cardID].image);

    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}