let hoursdiv = document.getElementById("hoursMinites");

hoursdiv.classList.add("hoursMinitesdiv");

let secondsdiv = document.getElementById("seconds");

secondsdiv.classList.add("secondsdiv");

let hoursInnerDiv = document.getElementById("timeDiv01");

hoursInnerDiv.classList.add("innerhoursdiv");

let sc1= document.getElementById("second1stchild");

sc1.classList.add("secondchild1st");

// let sc2= document.getElementById("second2ndchild");

// sc2.classList.add("secondchild2nd");





// let hoursptag=document.getElementById("hm")

// hoursptag.classList("pTags")

// hours-minits 

function current_hm() {
  let time = new Date();
  let chm = time.getHours() + ":" + time.getMinutes();
  document.getElementById("hm").innerHTML = chm;
}
setInterval(current_hm, 1000);

// seconds 

function current_s(){
    let time=new Date();
let cs = time.getSeconds();
document.getElementById("s").innerHTML=cs;

}
setInterval(current_s,1000);




