var numberofDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var selectbtn = this.innerHTML;
    checking(selectbtn);
    buttonAnimation(selectbtn);
    
  });
}

function tom1() {
  var audio = new Audio("sounds/tom-1.mp3");
  return audio.play();
}

function tom2() {
  var audio = new Audio("sounds/tom-2.mp3");
  return audio.play();
}

function tom3() {
  var audio = new Audio("sounds/tom-3.mp3");
  return audio.play();
}

function tom4() {
  var audio = new Audio("sounds/tom-4.mp3");
  return audio.play();
}

function crash() {
  var audio = new Audio("sounds/crash.mp3");
  return audio.play();
}

function kick() {
  var audio = new Audio("sounds/kick-bass.mp3");
  return audio.play();
}

function snare() {
  var audio = new Audio("sounds/snare.mp3");
  return audio.play();
}

function warning(){

  document.querySelector('.warning-text p').innerHTML = "Kindly, Use the Written key. Check The CapsLock Key make sure it is off";
  setTimeout(function(){
    document.querySelector('.warning-text p').innerHTML = "";
  },4000)
}

function checking(selectbtn) {
  if (selectbtn == "w") {
    return tom1();
  } else if (selectbtn == "a") {
    return tom2();
  } else if (selectbtn == "s") {
    return tom3();
  } else if (selectbtn == "d") {
    return tom4();
  } else if (selectbtn == "j") {
    return crash();
  } else if (selectbtn == "k") {
    return kick();
  } else if (selectbtn == "l") {
    return snare();
  }

}



function buttonAnimation(currentkey){
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
      activebutton.classList.remove("pressed");
    },100)

}

addEventListener("keydown", function (event) {
  if(event.key == 'w' || event.key == 'a' || event.key == 's'|| event.key == 'd' ||event.key == 'j' || event.key == 'k' ||event.key == 'l'){
    checking(event.key);
    }
    else{
      warning();
      
    }
    buttonAnimation(event.key);
});
