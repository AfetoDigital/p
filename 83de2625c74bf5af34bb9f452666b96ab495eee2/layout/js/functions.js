// Data inicial do relacionamento (alterar para a data correta)
const startDate = new Date("2024-10-01T00:00:00");

function updateTimer() {
  const currentTime = new Date();
  const timeDiff = currentTime - startDate;

  // Calcular os dias, horas, minutos e segundos
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Exibir o tempo no formato "XX dias, XX horas, XX minutos, XX segundos"
  document.getElementById(
    "timer"
  ).innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualizar o cronômetro a cada segundo
setInterval(updateTimer, 1000);




// Índices que correspondem às posições (esquerda, centro, direita)
let currentIndices = [0, 1, 2];

// Atualiza as imagens visíveis no layout
function updateImages() {
  document.getElementById("left-img").src = images[currentIndices[0]];
  document.getElementById("center-img").src = images[currentIndices[1]];
  document.getElementById("right-img").src = images[currentIndices[2]];
}

// Rotaciona as imagens conforme a direção clicada
function rotateSlide(direction) {
  if (direction === "left") {
    // Rotação para a esquerda: move o último índice para o início
    currentIndices.unshift(currentIndices.pop());
  } else if (direction === "right") {
    // Rotação para a direita: move o primeiro índice para o final
    currentIndices.push(currentIndices.shift());
  }
  updateImages();
}

// Inicializa as imagens
updateImages();





function showEffect() {
  const bar = document.getElementById("bar");
  const phrase = document.getElementById("container");
  const video = document.getElementById("romanticVideo");

  // Reduce the width of the bar
  bar.style.width = "0";

  // Show the romantic phrase after the animation
  setTimeout(() => {
    phrase.style.display = "none";
  }, 500); // Match the transition time

  // Play the video
  video.play();
}