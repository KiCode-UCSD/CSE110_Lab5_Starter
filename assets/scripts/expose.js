// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //listen for horn select
  const hornElement = document.getElementById('horn-select');
  hornElement.addEventListener("input", hornHandler);
  
  //listen for volume control
  const volumeControl = document.querySelector("input");
  volumeControl.addEventListener("input", (event) => volumeHandler(volumeControl)); 
}

// Handles slider changing image and volume level
function volumeHandler(volumeControl) {
  //variables
  const volume = event.target.value;
  const hornAudio = document.querySelector("audio");
  const volImage = document.querySelector("img[src^='assets/icons/']");

  //set volume
  hornAudio.volume = volume / 100;

  //change volume icon based on volume level
  if (volume == 0) {
    volImage.src = "assets/icons/volume-level-0.svg";
  }
  else if (volume < 33) {
    volImage.src = "assets/icons/volume-level-1.svg";
  }
  else if (volume < 67) {
    volImage.src = "assets/icons/volume-level-2.svg";
  }
  else {
    volImage.src = "assets/icons/volume-level-3.svg";
  }
}

//Routes horn button choice into proper sub-handler
function hornHandler(selected) {
  const hornImage = document.querySelector("img[src^='assets/images/']");
  const audioButton = document.querySelector("button");
  const hornAudio = document.querySelector("audio");
  const jsConfetti = new JSConfetti();

  if (selected.target.value == "air-horn") {
    airHornHandler(hornImage, audioButton, hornAudio);
  }
  else if (selected.target.value == "car-horn") {
    carHornHandler(hornImage, audioButton, hornAudio);
  }
  else if (selected.target.value == "party-horn") {
    partyHornHandler(hornImage, audioButton, hornAudio, jsConfetti);
  }
  else {
    console.log("horn selection error");
  }
}

//handle air horn option
function airHornHandler(hornImage, audioButton, hornAudio) {
  console.log("handle air horn");

  //update horn image
  hornImage.src = "assets/images/air-horn.svg";

  //update horn sound
  hornAudio.src = "assets/audio/air-horn.mp3";
  audioButton.addEventListener('click', function() {
    hornAudio.play();
  });
}

//handle car horn option
function carHornHandler(hornImage, audioButton, hornAudio) {
  console.log("handle car horn");

  //update horn image
  hornImage.src = "assets/images/car-horn.svg";

  //update horn sound
  hornAudio.src = "assets/audio/car-horn.mp3";
  audioButton.addEventListener('click', function() {
    hornAudio.play();
  });
}

//handle party-horn option
function partyHornHandler(hornImage, audioButton, hornAudio, jsConfetti) {
  console.log("handle party horn");

  //update horn image
  hornImage.src = "assets/images/party-horn.svg";

  //update horn sound
  hornAudio.src = "assets/audio/party-horn.mp3";
  audioButton.addEventListener('click', function() {
    //play audio
    hornAudio.play();

    //play confetti
    jsConfetti.addConfetti();
  });
}