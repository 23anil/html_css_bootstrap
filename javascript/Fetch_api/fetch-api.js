// 1. GET request using fetch()
fetch("https://jsonplaceholder.typicode.com/users")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {

    console.log(json)
    // 2. Create a variable to store HTML table headers
    let li = `<tr><th>ID</th><th>Name</th><th>User Name</th><th>Email</th> <th>Phone</th><th>Website</th></tr>`;

    // 3. Loop through each data and add a table row
    json.forEach((user) => {
      li += `<tr>
        <td>${user.id}</td>
        <td>${user.name} </td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
      </tr>`;
    });

    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;
  })
  .catch((err)=>{
    console.log(err);
  })
