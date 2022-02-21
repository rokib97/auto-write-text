const text =
  "আন্তর্জাতিক মাতৃভাষা দিবসে সকল মহান ভাষা শহীদদের প্রতি রইলো বিনম্র শ্রদ্ধা।";

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 100);
var audio = new Audio("./song.mp3");
audio.play();
