let getdata=document.getElementById("userinput");

getdata.addEventListener("input",function() {
  let data = document.getElementById("userinput").value;
  let movieData = [];
  fetch(`http://www.omdbapi.com/?s=${data}&apikey=f056e2f7`)
    .then((resolved) => resolved.json())
    .then((data) => {
     
 
      movieData = [...data?.Search];
      console.log("movieData", movieData);
   
      if (movieData.length > 0) {
        let li=""
        movieData.forEach((user) => {
        li += `
        <div class="card cards"  ">
        <img src="${user.Poster}" class="card-img-top card-image" alt="...">
          <div class="card-body">
            <h5 class="card-title movie-name">${user.Title}</h5>
            <p class="card-text movie-year">${user.Year}</p>
            <a href="#" class="btn btn-secondary button">Movie Details</a>
          </div>
        </div> `;

          document.getElementById("sample").innerHTML = li;
        });
      }

    })
})
document.getElementById("sample").classList.add("maindiv");
