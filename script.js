let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;

const timerDisplay = document.getElementById("timer");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    let minutesStr = minutes < 10 ? '0' + minutes : minutes;
    let secondsStr = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.textContent = `${minutesStr}:${secondsStr}`;
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    isRunning = false;
}

startStopBtn.addEventListener("click", startStopTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
