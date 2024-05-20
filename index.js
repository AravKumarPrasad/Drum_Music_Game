var numOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown" , function(Event) {
  makeSound(Event.key);
  buttonAnimation(Event.key)
});

function makeSound(key){
  switch (key) {
    case "w":
      var crashW = new Audio("sounds/crash.mp3");
      crashW.play();
      break;
    case "a":
      var kickA = new Audio("sounds/kick-bass.mp3");
      kickA.play();
      break;
    case "s":
      var snareS = new Audio("sounds/snare.mp3");
      snareS.play();
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


      default:console.log(buttonInnerHtml)
  }
}

function buttonAnimation(CurrKey){
  var activeButton = document.querySelector("." + CurrKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  } , 100);
}