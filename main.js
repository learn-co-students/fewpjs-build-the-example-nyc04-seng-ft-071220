// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
 
  //Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
  let modalDiv=document.querySelector('#modal')
 

  const heartEmoji=document.getElementsByClassName('like-glyph')
  likePost(heartEmoji)
  
})

const likePost = (heartEmoji) => {

  for(const heart of heartEmoji){
    heart.addEventListener("click", (evt) =>{

      mimicServerCall()
      .then(() =>{
        if(heartEmoji.innerHTML== EMPTY_HEART){
          heartEmoji.innerTEXT=FULL_HEART
          heartEmoji.className= "activated-heart "
        }else{
          heartEmoji.innerTEXT= EMPTY_HEART
          heartEmoji.className= "like-glyph"
        }

    })
    .catch(error =>{
       modalDiv=false
       const modalMessage=document.querySelector('#modal-message')
       modalMessage.innerTEXT=error
       setTimeout(() =>{
        modalDiv.hidden=true
       },5000)
  
      })
    })
  }

}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//-----------------------------------------------------------------------------

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
