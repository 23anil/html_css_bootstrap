let promiseexample =new Promise((resolve,reject)=>{
if(10<6){
    resolve("10 is greater than 6")
}
else{
    reject("10 is not greater than 6");
}
});

// console.log(resolve);
// console.log(reject);
// console.log(promiseexample);

promiseexample
.then((resolve)=>{
    console.log("resolve",resolve);
},
(reject)=>{
    console.log("reject",reject);
})
.finally(()=>{
    console.log("finally promise excuted");
})