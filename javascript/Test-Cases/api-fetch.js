
// 1. GET request using fetch()
fetch("https://jsonplaceholder.typicode.com/users")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    
  // 2. Create a variable to store HTML table headers
 
  let li ;
    // 3. Loop through each data and add a table row
    json.forEach((user) => {
     
      li += `ID:-"${user.id}" Name:-"${user.name}" UserName:-"${user.username}" Email:-"${user.email}"` 
      document.getElementById("users").innerHTML = li; 
      console.log(li);
    });
   
    // 4. DOM Display result
   
  });
