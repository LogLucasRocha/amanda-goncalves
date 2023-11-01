const timer = () => {
  let firstDay = new Date(2022, 10, 26, 0, 0, 0, 0);
  let timeElapsed = Date.now() - firstDay;
  let daysElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

  const daysInYear = 365;

  let yearsElapsed = Math.floor(daysElapsed / daysInYear);
  let timeDays = daysElapsed - yearsElapsed * daysInYear;
  let timeHours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
  let timeMinutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
  let timeSeconds = Math.floor((timeElapsed / 1000) % 60);

  document.getElementById(
    "tempo-total"
  ).innerHTML = `${yearsElapsed} anos... ${timeDays} dias... ${timeHours} horas... ${timeMinutes} minutos... ${timeSeconds} segundos...`;

  setTimeout(timer, 1000);
};

timer();

const apelidoList = [
  "minha princesinha!",
  "minha gatinha!",
  "minha moçoila!",
  "minha gatinha rajada!",
  "minha plantinha favorita!"
];

const fotoList = [
  "Assets/Aesthetic-1.jpeg",
  "Assets/Aesthetic-2.jpeg",
  "Assets/Aesthetic-3.jpeg",
  "Assets/Aesthetic-4.jpeg",
  "Assets/Aesthetic-5.jpeg",
  "Assets/Aesthetic-6.jpeg",
  "Assets/Aesthetic-7.jpeg",
  "Assets/Aesthetic-8.jpeg",
  "Assets/Aesthetic-9.jpeg",
  "Assets/Aesthetic-10.jpeg",
  "Assets/Aesthetic-11.jpeg",
  "Assets/Aesthetic-12.jpeg",
  "Assets/Aesthetic-13.jpeg",
  "Assets/Aesthetic-14.jpeg",
  "Assets/Aesthetic-15.jpeg",
  "Assets/Aesthetic-16.jpeg",
  "Assets/Aesthetic-17.jpeg",
  "Assets/Aesthetic-18.jpeg",
  "Assets/Aesthetic-19.jpeg",
];

function randomFoto() {
  const randomIndex = Math.floor(Math.random() * fotoList.length);
  return fotoList[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  const foto = randomFoto();
  document.getElementById("foto_introducao").src = foto;
});

function randomApelido() {
  const randomIndex = Math.floor(Math.random() * apelidoList.length);
  return apelidoList[randomIndex];
}

function typeEffect(element, speed) {
  const apelido = randomApelido();
  element.innerHTML = `${apelido}`;
  const text = element.innerHTML;
  element.innerHTML = "";

  let i = 0;
  const typing = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

typeEffect(document.getElementById("apelido"), 150); // Ajuste a velocidade conforme necessário

let starrysky = document.querySelector(".starry-sky");

const randomSize = (range, unit) => {
  let size = Math.floor(Math.random() * range) + 1;
  return `${size}${unit}`;
};


const moveStar = (star) => {
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  // Gera novas posições aleatórias
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  // Atualiza as posições da estrela
  star.style["left"] = `${newX}px`;
  star.style["top"] = `${newY}px`;
};

const makeStar = (size) => {
  let starCount = 100;
  for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.classList.add(`star${i}`);
    let starSize = randomSize(size, "px");

    star.style["width"] = starSize;
    star.style["height"] = starSize;
    star.style["background-color"] = "#F5E0DC";
    star.style["border-radius"] = "5px";
    star.style["position"] = "absolute";

    moveStar(star);
    starrysky.appendChild(star);
  }

  setInterval(() => {
    let stars = document.querySelectorAll(".starry-sky > div");
    stars.forEach(moveStar);
  }, 700);
};

makeStar(4);
