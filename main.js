// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

// Your JavaScript code goes here!
const heartSpan = document.querySelectorAll('.like-glyph')
const modal = document.querySelector('#modal')
const addHidden = () => modal.classList.add('hidden')

heartSpan.forEach( heart => {
  heart.addEventListener('click', event => {
    mimicServerCall("http://mimicServer.example.com")
    .then( () => {
      heart.innerText = glyphStates[heart.innerText]
      heart.style.color = colorStates[heart.style.color] 
      // this will look at the heart.style.color as a key for the object and then assign value accordingly
    })
    .catch(error => {
      modal.className = ''
      setTimeout(addHidden, 3000)
    })
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
