const buttonEl = document.querySelector("#roll-button");
const diceEL = document.querySelector("#dice")

let historyList = [];
const rollHistoryListEl = document.getElementById("roll-history");

const rollDice = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEL.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
    
}

const getDiceFace = (rollResult) => {
    switch(rollResult) {
        case 1:
            return "&#9856;";
            break;
        case 2:
            return "&#9857;";
            break
        case 3:
            return "&#9858;";
            break;
        case 4:
            return "&#9859;";
            break
        case 5:
            return "&#9860;";
            break;
        case 6:
            return "&#9861;";
            break
        default:
            return "";
    }
}

const getDiceFaceAlt = (rollResult) => {
    const result = 55 + rollResult
    return `&#98${result};`
}

const updateRollHistory = () => {
    rollHistoryListEl.innerHTML = "";
    for(let i = 0; i < historyList.length; i++ ) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${ i + 1} <span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryListEl.appendChild(listItem);
    }
}

buttonEl.addEventListener("click", () => {
    diceEL.classList.add("roll-animation");
    setTimeout(() => {
        diceEL.classList.remove("roll-animation");
        rollDice();
    }, 1000);
})