fetch("https://jsonplaceholder.typicode.com/users")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    let li;
    json.forEach((user) => {
      li += `"    "ID:${user.id} "     " Name: ${user.name}`;
    });
    document.getElementById("users").innerHTML = li;
  });
