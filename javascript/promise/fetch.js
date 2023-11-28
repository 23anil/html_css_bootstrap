// fetch("https://jsonplaceholder.typicode.com/users")
// .then((sunil)=>sunil.json())
// .then((anil)=>console.log(anil))
// .catch((err)=>{
//     console.log("anil",err);
// })

// OR 
// use async and await

let fetchUser= async function(){
    try{
        let response= await fetch("https://jsonplaceholdpromiseer.typicode.com/users")
        let data = await response.json()
        console.log(data);
          // console.log(await response.json());
    }
    catch(err){
        console.log("error",err);
    }

}
fetchUser()
