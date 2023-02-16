var size = document.querySelectorAll(".drum").length;

for (var i = 0; i < size; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var word = this.innerHTML;

    make_sound(word);
    buttomanimation(word);
  });
}

document.addEventListener("keypress", function (event) {
  make_sound(event.key);
  buttomanimation(event.key);
});

function make_sound(word) {
  switch (word) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom_s = new Audio("sounds/snare.mp3");
      tom_s.play();
      break;
    case "k":
      var tom_c = new Audio("sounds/crash.mp3");
      tom_c.play();
      break;
    case "l":
      var tom_k = new Audio("sounds/kick-bass.mp3");
      tom_k.play();
      break;
    default:
     
      break;
  }
}

function buttomanimation(word) {
  var activebuttom = document.querySelector("." + word);
  activebuttom.classList.add("pressed");

  setTimeout(function () {
    activebuttom.classList.remove("pressed");
  }, 100);
}
