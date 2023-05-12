const timerEl = document.getElementById("timer");
const resetEl = document.getElementById("reset");
const stopEl = document.getElementById("stop");
const startEl = document.getElementById("start");


let startTime = 0;
let elapsedTime = 0;
let timerInterval;

startEl.addEventListener("click", () => {
    startTimer();
})

stopEl.addEventListener("click", () => {
    stopTimer();
})

resetEl.addEventListener("click", () => {
    resetTimer();
})

const startTimer = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.innerHTML = formatTime(elapsedTime);
    }, 10);
    startEl.disabled = true;
    stopEl.disabled = false;
    resetEl.disabled = false;
}

const stopTimer = () => {
    clearInterval(timerInterval);
    
    startEl.disabled = false;
    stopEl.disabled = true;
}

const resetTimer = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.textContent = "00:00:00"

    startEl.disabled = false;
    resetEl.disabled = true;
}

const formatTime = (timeInput) => {
    const millSec = Math.floor((timeInput % 1000) / 10);
    const sec = Math.floor((timeInput % (1000 * 60)) / 1000);
    const min = Math.floor((timeInput % (1000 * 60 * 60)) / (1000 * 60));
    const hour = Math.floor(timeInput / (1000 * 60));
    
    return (
        (hour ? (hour > 9 ? hour : "0" + hour) : "00") +"."+
        (min ? (min > 9 ? min : "0" + min) : "00") +"."+
        (sec ? (sec > 9 ? sec : "0" + sec) : "00") +"."+
        (millSec > 9 ? millSec : "0" + millSec)
    );
}