let getdata=document.getElementById("userinput");
let data;
getdata.addEventListener("input",function() {
// ---------------------------------

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  // Create a new SpeechRecognition instance
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  
  // Set the recognition language (optional)
  recognition.lang = 'en-US';

  // Add an event listener for the result event
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
     document.getElementById('userinput').value = transcript;
  };

  // Add an event listener for the error event
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };

  // Add an event listener for the end event (optional)
  recognition.onend = () => {
    console.log('Speech recognition ended.');
  };

  // Add an event listener to the input field to start recognition when focused
  var data=document.getElementById('userinput').addEventListener('focus', () => {
    recognition.start();
  });
  console.log();
} else {
  // Browser doesn't support SpeechRecognition
  alert('Speech recognition is not supported in this browser.');
}

// -------------------------
  var data = document.getElementById("userinput").value;
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
