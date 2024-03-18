let data=[5,1,2,,6,3,4]


// Map() return new array
let numbers=data.map((val)=>{
   if(val>2)
   {
      return val;
   }
})
console.log("map",numbers);

// ForEach() return undefined
//  let numbers=data.forEach((val)=> val*2)
// console.log("ForEach",numbers);


//add other functions like sort(),reduce()
// let numbers=data.map((val)=> val).sort()
// console.log("map",data);

//not add other functions because forEach is not return any value
// let numbers=data.forEach((val)=> val)
// console.log("map",data);


// Map()
// if in case callback function is not return any value the map() is return new array with defalt values
// eg    // let numbers=data.map((val)=> val>5)
           // console.log("map",numbers);

        //    output is [false,false,false,false,false]


        data.forEach((val)=>console.log(val))
