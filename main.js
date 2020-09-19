// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMes = document.querySelector("div#modal")
errorMes.classList.add("hidden")

const likeHearts = document.querySelectorAll("span.like-glyph")
likeHearts.forEach(likeHeart => {
  mimicServerCall()
  .then(res = res.json())
  .then()
  .catch((error)={

  })
  
  likeHeart.addEventListener("click", function(e){
    this.classList.toggle("activated-heart");
  })
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
