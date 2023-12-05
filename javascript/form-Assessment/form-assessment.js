

const inputArray = [];
function storeInput() {
    // Initialize an empty array

    
    // Get the input elements
    const input1 = document.getElementById("fname");
    const input2 = document.getElementById("lname");
    const input3 = document.getElementById("age");
  
    // Get the values of the input elements
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
  
    // Add the values to the array
  
  
    // Print the array to the console
    // console.log(inputArray);
    inputArray.push({fname:value1, lname:value2, age:value3});  
    }
//   console.log(inputArray);
function adddata() {
  localStorage.setItem(value1+"data" ,JSON.stringify(inputArray))
  console.log(JSON.parse(localStorage.getItem(value1+"data")));
    console.log(inputArray);
}

  

 