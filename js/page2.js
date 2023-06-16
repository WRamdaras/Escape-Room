

let container = document.querySelector(".text");

let speeds = {
   pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,
   fast: 40,
   superFast: 10
};

let textLines = [
   { speed: speeds.slow, string: "We finally found the armory" },
   { speed: speeds.normal, string: "Let's find our equipement and escape!" },
   { speed: speeds.normal, string: "" }
];


let characters = [];
textLines.forEach((line, index) => {
   if (index < textLines.length - 1) {
      line.string += " "; //Add a space between lines
   }

   line.string.split("").forEach((character) => {
      let span = document.createElement("span");
      span.textContent = character;
      container.appendChild(span);
      characters.push({
         span: span,
         isSpace: character === " " && !line.pause,
         delayAfter: line.speed,
         classes: line.classes || []
      });
   });
});

function revealOneCharacter(list) {
   let next = list.splice(0, 1)[0];
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   let delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

//Kick it off
setTimeout(() => {
   revealOneCharacter(characters);   
}, 600)

let button2 = document.querySelector('button2'); // Assumes element with id='button'
let div = document.querySelector('.text')

// button2.onclick = function() {
//     if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//     else {
//         div.style.display = 'block';
//     }
// };

document.querySelector('button2'); // Assumes element with id='button'
document.querySelector('.span')

// button2.onclick = function() {
//     if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//     else {
//         div.style.display = 'block';
//     }
// };

let on_off = document.querySelector('.container .title');
let audio = document.querySelector('.musicOn audio');

on_off.onclick = function() {
   audio.paused ? audio.play() : music_stop();
 }
 
 function music_stop() {
   audio.pause();
   audio.currentTime = 0;
 }
 
