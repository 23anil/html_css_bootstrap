function input() {
  let data = document.getElementById("userinput").value;

  fetch(`http://www.omdbapi.com/?s=${data}&apikey=f056e2f7`)
    .then((resolved) => resolved.json())
    .then((data) => {

        console.log(data);
        // 2. Create a variable to store HTML table headers
        // let li = `<tr><th>Title</th><th>Year</th><th>Type</th></tr>`;
    
        // 3. Loop through each data and add a table row
        // data.forEach((user) => {
        //   li += `<tr>
        //     <td>${user.Search.Title
        //     }</td>
           
           
        //   </tr>`;
        // });
    
        // 4. DOM Display result
      
    });
}
