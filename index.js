var y = document.querySelectorAll(".drum").length;



// Detects Button press


for (x=0; x<y; x++) {

document.querySelectorAll("div button")[x].addEventListener("click", function(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  animateEffect(buttonInnerHTML);
  // console.log(buttonInnerHTML);
});


}

// Detects Key Press


document.addEventListener("keydown", function(a){
  makeSound(a.key);
  animateEffect(a.key);
  // console.log(a);
} )



// Function to make appropriate sound

function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);

  }
}

// Animation function 


function animateEffect (currentKey){
  var activeButton = document.querySelector("."+ currentKey)
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

