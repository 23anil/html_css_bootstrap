function storeInput(event) {
  // event.preventDefault();
  const inputArray = JSON.parse(localStorage.getItem("formdata")) || [];

  inputArray.push({
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    age: document.getElementById("age").value,
  });
  localStorage.setItem("formdata", JSON.stringify(inputArray));
  retrivedata();
}
function retrivedata() {
  let rdata = JSON.parse(localStorage.getItem("formdata"));
  if (rdata.length > 0) {
    console.log(JSON.parse(localStorage.getItem("formdata")));
    let op = document.getElementById("put");

    op.innerHTML = "";

    rdata.forEach((value) => {
      op.innerHTML += `<tr>
<td>${value.fname}</td>
<td>${value.lname}</td>
<td>${value.age}</td>
</tr>
`;
    });
  }
}
retrivedata();
