

let config = {
    "man": "Gustavo",
    "woman": "Luana",
    "first_message": "Desde o instante em que nossos caminhos se cruzaram, tudo se tornou mais colorido. Cada momento ao seu lado é uma eternidade de felicidade. Em cada sorriso seu, eu encontro paz, e em cada olhar, vejo a promessa de um amor que cresce a cada dia. Eu te amo mais do que as palavras podem dizer, e sei que ao seu lado, o futuro é ainda mais brilhante.",
    "second_message": "Eu sou imensamente grato(a) por ter você em minha vida. Que cada dia ao seu lado seja uma celebração do nosso amor eterno. Te amo! <span class='heart'>❤️</span>",
  };
 
let images = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpg",
    "photos/photo6.jpg",
  ];
  





// FUNCTIONS


document.addEventListener("DOMContentLoaded", () => {
    // Selecionar o parágrafo com o atributo 'first="message"'
    const couple = document.querySelector('h1[couple="name"]');
    const romantictext = document.querySelector('p[first="message"]');
    const message = document.querySelector('p[second="message"]');
  
    couple.innerHTML = config.man + " & " + config.woman;
    romantictext.textContent = config.first_message;
    message.innerHTML = config.second_message;
  });