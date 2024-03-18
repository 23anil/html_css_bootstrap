let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let hours = "0";
let minite = "0";
let seconds = "0";
let count = "0";

startbtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stopbtn.addEventListener("click", function () {
  timer = false;
});

resetbtn.addEventListener("click", function () {
  timer = false;
  hours = 0;
  minite = 0;
  seconds = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

function stopWatch() {
  if (timer) {
    count++;
    if (count == 100) {
      seconds++;
      count = 0;
    }

    if (seconds == 60) {
      minite++;
      seconds = 0;
    }

    if (minite == 60) {
      hours++;
      minite = 0;
    }

    let strhr = hours;
    let strmin = minite;
    let strsec = seconds;
    let strcount = count;

    if (hours < 10) {
      strhr = "0" + strhr;
    }
    if (minite < 10) {
      strmin = "0" + strmin;
    }
    if (seconds < 10) {
      strsec = "0" + strsec;
    }
    if (count < 10) {
      strcount = "0" + strcount;
    }

    document.getElementById("hr").innerHTML = strhr;
    document.getElementById("min").innerHTML = strmin;
    document.getElementById("sec").innerHTML = strsec;
    document.getElementById("count").innerHTML = strcount;
    setTimeout(stopWatch, 10);
  }
}
