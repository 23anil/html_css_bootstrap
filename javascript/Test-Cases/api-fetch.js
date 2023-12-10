// practice 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((resolved)=>resolved.json())
// .then((data)=>{
//     console.log(data);
// })


let excution= async()=>{
    try{
let data= await fetch("https://jsonplaceholder.typicode.com/users");
let retrive= await data.json();
// console.log(retrive);
let li=`<ul>`
retrive.forEach(value => {
    li+=`<li>${value.id}</li>
         <li>${value.name}</li>`
});
li+=`</ul>`
document.getElementById("test").innerHTML=li
}

catch(error){
console.log(error);
}

}
excution();

// let data=new Promise((resolved,reject)=>{
// if(10>60){
// resolved("10 is greater than 6");
// }
// else
// {
//     reject("10 is not  greater than 60");   
// }
// })
// data.then(resolved=>{
//     console.log(resolved);
// })
// .catch(reject=>{
//     console.log(reject);
// })

// let movies=new Array("kgf","kantara","animals");

// console.log(movies);