let time = 1500; // 25 minutes
let timer;
let running = false;

function updateDisplay() {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  document.getElementById('timer').innerText = `${minutes}:${seconds}`;
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  running = false;
  updateDisplay();
}

updateDisplay();
