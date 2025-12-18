const noMessages = [
  "Apoco?? 😑😑😑",
  "Pero segura segura??😑",
  "Ya lo sabia",
  "Na no te creo ",
  "Di que siiii -_-",
  "Que gacha",
];
let noIndex = 0;
const music2 = document.getElementById("music2");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const overlay = document.getElementById("overlay");
const stage = document.getElementById("stage");
const music = document.getElementById("music");
const galaxy = document.getElementById("galaxy");
const flowerContainer = document.getElementById("flower-container");
const finalMessage = document.getElementById("finalMessage");
const restartBtn = document.getElementById("restartBtn");
const floating = document.getElementById("floating");


/* CORAZONES FLOTANTES */
function floatingHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "float-heart";
    h.textContent = "🎁";
    h.style.left = (Math.random() * 120 - 10) + "%";
    h.style.top = (60 + Math.random()*30) + "%";
    h.style.fontSize = 20 + Math.random()*20 + "px";
    h.style.animationDuration = 3 + Math.random()*2 + "s";
    floating.appendChild(h);
    setTimeout(()=> h.remove(), 13000);
  }, 350);
}

function createOrbitHearts() {
  const galaxy = document.getElementById("galaxy");
  galaxy.innerHTML = `
    <div class="center-text" id="teAmo">
      En esta navidad mi mayor regalo es tenerte conmigo,gracias por ser el corazón de nuestra familia, por llenar nuestra casa de mucho cariño y por siempre apoyarme en las buenas y las malas.Te quiero muchísimo mami feliz navidad❤️🎄.
    </div> `;
  const total = 140;
  const duration = 13;
  const emojis = ["🥰", "🎄","☃️","❤️"];

  for (let i = 0; i < total; i++) {
    const element = document.createElement("div");
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    element.textContent = randomEmoji;
    element.className = "heart"; 
    const radius = 230 + Math.random() * 120;
    element.style.setProperty('--r', radius + 'px');
    element.style.fontSize = (9 + Math.random() * 17) + 'px';
    const angle = Math.random() * 360;
    const delay = -(duration * angle / 360);
    element.style.animation = `orbit ${duration}s linear infinite ${delay}s, fadeIn 1.2s forwards`;
    galaxy.appendChild(element);
  }
}

function bloomFlower() {
  flowerContainer.classList.remove('hidden');
  flowerContainer.style.display = "flex";
}

btnNo.addEventListener("click", () => {
    music2.play().catch(e => console.error("Error al reproducir audio:", e));
  
  btnNo.textContent = noMessages[noIndex];
  noIndex = (noIndex + 1) % noMessages.length;

  const btnWidth = btnNo.offsetWidth;
  const btnHeight = btnNo.offsetHeight;

  const maxLeft = window.innerWidth - btnWidth - 10;
  const maxTop = window.innerHeight - btnHeight - 10;

  const randomLeft = Math.random() * maxLeft;
  const randomTop = Math.random() * maxTop;

  btnNo.style.position = "absolute";
  btnNo.style.left = randomLeft + "px";
  btnNo.style.top = randomTop + "px";
});

btnYes.addEventListener("click", () => {
 
    music2.pause();
    music2.currentTime = 0;
  // Reproducir music
  music.play().catch(e => console.error("Error al reproducir audio:", e));
  overlay.style.display = "none";
  stage.style.display = "flex";
  floatingHearts();
  createOrbitHearts();
  
  // Después de 13 segundos (duración de la galaxia), mostrar la flor, mensaje y botón
  setTimeout(() => {
    galaxy.style.display = "none";
    bloomFlower();
  }, 18000);
   setTimeout(() => {
    finalMessage.style.display = "block";
    restartBtn.style.display = "inline-block";
  }, 21000);
});

restartBtn.addEventListener("click", () => location.reload());