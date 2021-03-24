// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likes = document.querySelectorAll(".like-glyph")
likes.forEach(like => like.addEventListener("click", serverFetch))

function serverFetch(event) {
  if (event.target.classList.contains("activated-heart")) {
    event.target.classList.remove("activated-heart");
    event.target.innerHTML = EMPTY_HEART;
  }
  else {
    mimicServerCall()
    .then( () => {
      event.target.classList.add("activated-heart");
      event.target.innerHTML = FULL_HEART;
    })
    .catch(error => {
      document.getElementById("modal").innerHTML = `<h2>${error}</h2>`;
      document.getElementById("modal").classList.remove("hidden");
    })
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
