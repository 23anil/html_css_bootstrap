let hoursdiv = document.getElementById("hoursMinites");

hoursdiv.classList.add("hoursMinitesdiv");

let secondsdiv = document.getElementById("seconds");

secondsdiv.classList.add("secondsdiv");

let hoursInnerDiv = document.getElementById("timeDiv01");

hoursInnerDiv.classList.add("innerhoursdiv");

let sc1 = document.getElementById("second1stchild");

sc1.classList.add("secondchild1st");

let sc2 = document.getElementById("second2ndchild");

sc2.classList.add("secondchild2nd");

let sc3 = document.getElementById("second3rddchild");

sc3.classList.add("secondchild3rd");

let h = document.getElementById("hours");

h.classList.add("onlyhours");

let m = document.getElementById("minutes");

m.classList.add("onlyminutes");

let d = document.getElementById("dot");

d.classList.add("onlydot");

// Hours

function current_h() {
  let time = new Date();
  let ch = time.getHours();
  let hours = ch < 10 ? "0" + ch : ch;
  document.getElementById("hours").innerHTML = hours;
}
setInterval(current_h, 1000);

// dot
function current_dot() {
  document.getElementById("dot").innerHTML = ":";
  // d.add(innerHTML=":")
}
setInterval(current_dot, 1000);

// Minutes

function current_m() {
  let time = new Date();
  let cm = time.getMinutes();
  let minutes = cm < 10 ? "0" + cm : cm;
  document.getElementById("minutes").innerHTML = minutes;
}
setInterval(current_m, 1000);

// seconds

function current_s() {
  let time = new Date();
  let cs = time.getSeconds();
  let seconds = cs < 10 ? "0" + cs : cs;
  document.getElementById("second3rddchild").innerHTML = seconds;
}
setInterval(current_s, 1000);

// AM/PM

function current_day() {
  let time = new Date();
  let hours = time.getHours();
  var amPM = hours < 12 ? "AM" : "PM";
  document.getElementById("second2ndchild").innerHTML = amPM;
}
setInterval(current_day, 1000);
