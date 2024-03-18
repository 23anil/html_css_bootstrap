let element = document.getElementById("test");
console.log("element", element);

// element.style.color = "white";
// element.style.backgroundColor = "#8a2be2";

// element.innerHTML="<button>click me</button"
// element.innerText="<button>click me</button>"

let newptag = document.createElement("p");

// console.log("newptag",newptag);

// newptag.innerText="hiii anil"

// let  le=document.getElementById("lastelem").appendChild(newptag);

// or
document.innerHTML = "hiii";
document.innerText = "hi";
console.log(newptag);
document.write((newptag.innerText = "hello anil"));

// class

let class01 = document.getElementsByClassName("demo");
console.log("class01", class01[1]);

// to make train as space ship

// class01[0].innerText="ship"  ;

// tag name

// let alltags=document.getElementsByTagName("p")
// console.log("alltags",alltags);

// querySelector

// let onetag=document.querySelector("p")
// console.log(onetag);

// querySelectorAll

// let alltags=document.querySelectorAll("p")
// console.log("alltags",alltags);

let randomcontent = document.getElementById("randomtext");
randomcontent.className="style1";

console.log(randomcontent);

let changes=()=>{
    setTimeout(()=>{
        randomcontent.classList.add("style1")
    },0)

    setTimeout(()=>{
        randomcontent.classList.add("style2")
    },3000)
    setTimeout(()=>{
        randomcontent.classList.remove("style2")
    },6000)
    setTimeout(()=>{
        randomcontent.classList.add("style3")
    },9000)
}
changes();
