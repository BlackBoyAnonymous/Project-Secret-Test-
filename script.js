let timer;
let timeLeft = 25 * 60;
let running = false;

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const logList = document.getElementById('study-log');

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      running = false;
      addLog();
      timeLeft = 25 * 60;
      updateDisplay();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  running = false;
}

function addLog() {
  const li = document.createElement('li');
  li.textContent = `Studied for 25 minutes at ${new Date().toLocaleTimeString()}`;
  logList.prepend(li);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

updateDisplay();
