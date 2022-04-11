"use strict";

const inputFile = document.getElementById("btnSend");
const mp4 = document.getElementById("mp4");
const video = document.getElementById("video");

inputFile.addEventListener("change", function () {
  for (const element of document.getElementsByClassName("hiddenVideo")) {
    element.classList.remove("hiddenVideo");
  }

  const reader = new FileReader();
  reader.onload = function (file) {
    video.src = file.target.result;
    alert("El video se está cargando...");
  };

  reader.readAsDataURL(inputFile.files[0]);
});

function onClickPlayOrPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function onClickStop() {
  video.pause();
  video.currentTime = 0;
}

function onClickChangeVolumeUp() {
  const newVolume = video.volume + 0.1;
  if (newVolume > 1) {
    return;
  }
  video.volume = newVolume;
}

function onClickChangeVolumeDown() {
  const newVolume = video.volume - 0.1;
  if (newVolume < 0) {
    return;
  }
  video.volume = newVolume;
}
