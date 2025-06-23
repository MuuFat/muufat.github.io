// Typewriter Effect
const words = ["Developer_", "Designer_", "Open Source Lover_"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  let loopTyping = function() {
    if (word.length > 0) {
      document.getElementById('typewriter').innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  let loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('typewriter').innerHTML = word.join("");
    } else {
      i = (i + 1) % words.length;
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 100);
  };
  setTimeout(loopDeleting, 1000);
}

typingEffect();

// Dark/Light Mode Toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Particles.js Config
particlesJS.load('particles-js', 'particles.json');

// Quote API
fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(data => {
    document.getElementById('quote').innerText = `"${data.content}" — ${data.author}`;
  });
