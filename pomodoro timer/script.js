const timerEl = document.getElementById("timer")
const startEl = document.getElementById("start");
const stoptEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

let interval;
let timeLeft = 1500;

const updateTimer = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerEl.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; 
}


startEl.addEventListener("click", () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up !");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
})

stoptEl.addEventListener("click", () => {
    clearInterval(interval);
})

resetEl.addEventListener("click", () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
})