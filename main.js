// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let allHearts = document.querySelectorAll(".like-glyph");
let errorMessage = document.querySelector("#modal")
errorMessage.className = "hidden";

allHearts.forEach((heart) => heart.addEventListener("click", ()=>{
  console.log(allHearts);

  mimicServerCall("HeyHey.url")
    .then(()=>{
      if (heart.className == "activated-heart"){
        heart.className = ""
      }
      else {
        heart.className = "activated-heart"
      }

    })
    .catch(error=>{
      errorMessage.className = "";
      setTimeout(setErrorMessageVisible,3000,);
    })

    let setErrorMessageVisible = () => {
      errorMessage.className = "hidden";
     } 

}))
 

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
