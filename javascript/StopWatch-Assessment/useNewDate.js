let starttime;
let elapsedtime = 0;
let intervalTime;

function startstopwatch() {
  starttime = new Date().getTime() - elapsedtime;
  intervalTime = setInterval(update, 1000);
}

function stopStopwatch() {
  clearInterval(intervalTime);
}

function resetStopwatch() {
  clearInterval(intervalTime);
  elapsedtime = 0;
  document.getElementById("SWT").innerText = displayTime(elapsedtime);
}

function update() {
  elapsedtime = new Date().getTime() - starttime;
  document.getElementById("SWT").innerText = displayTime(elapsedtime);
}

function displayTime(milliseconds) {
  let totalSeconds = Math.floor(milliseconds / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}
