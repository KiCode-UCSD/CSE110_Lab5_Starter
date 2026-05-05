// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //load in voices available (unique to browser)
  populateVoiceList();
  if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  } 

  //event listener for press to talk button
  const talkButton = document.querySelector("button");
  const inputTxt = document.querySelector("textarea");
  const voiceSelect = document.querySelector("select");
  const synth = window.speechSynthesis;

  talkButton.addEventListener('click', () => buttonHandler(inputTxt, voiceSelect, synth));
}

//gets user text, feeds into text-to-speech selected voice, and changes image
function buttonHandler(inputTxt, voiceSelect, synth) {
  //get voice list array
  const voices = speechSynthesis.getVoices();

  //print user-entered text
  console.log("inputTxt: " + inputTxt.value);

  //change face to open mouthed
  const faceImg = document.querySelector("img");
  faceImg.src = "assets/images/smiling-open.png";

  //play text-to-speech in selected voice
  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);

  inputTxt.blur();

  //change face back to normal after utterance ends
  utterThis.onend = function() {
    faceImg.src = "assets/images/smiling.png";
  };
}

//initialize and display voice list dropdown
function populateVoiceList() {
  //get voice list array
  const voices = speechSynthesis.getVoices();

  if (typeof speechSynthesis === "undefined") {
    return;
  }

  //create button option for each voice in list
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    //add "- DEFAULT" to the end of the default option
    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    //set data for each voice
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    document.getElementById("voice-select").appendChild(option);
  }
}
