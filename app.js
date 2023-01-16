const envelope = document.getElementById("envelop");
const cover = document.getElementById("flappy");
const letter = document.getElementById("img");
const acceptInvite = document.getElementById("openBtn");
const reset = document.getElementById("resetBtn");

// ACCEPT INVITE
acceptInvite.addEventListener("click", openFlap);

function openFlap(){
  cover.style.transform = "rotateX(180deg)";
  cover.style.zIndex = 0;
  letter.style.transform = "translateY(-200px)";
   letter.style.transitionDelay = '3s';
  cover.style.transitionDelay = '1s';
}

// reset.addEventListener('click', closeFlap);

// function closeFlap(){
//   cover.style.transform = "rotateX(0deg)";
//   letter.style.transform = "translateY(0px)";
//   cover.style.zIndex = 1;
//   letter.style.transitionDelay = '1s';
//   cover.style.transitionDelay = '3s';
// }
