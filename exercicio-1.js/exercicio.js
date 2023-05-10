const btnCorFundo = document.getElementById("botao-cor-background");

btnCorFundo.addEventListener("click", function(){
    
    let r,g,b;

    r = Math.round(Math.random() * 255); 
    g = Math.round(Math.random() * 255); 
    b = Math.round(Math.random() * 255); 

    const body = document.querySelector('body');
    body.style.backgroundColor = `rgb(${r},${g},${b})`;

});

const form = document.querySelector('form');
const nomeInput = document.querySelector('#idNome');
const listaNomes = document.querySelector('#lista-nomes');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const novoNome = nomeInput.value;
  const novoItem = document.createElement('li');
  novoItem.textContent = novoNome;
  listaNomes.appendChild(novoItem);

  nomeInput.value = ''; 
});


const btnMudarImagem = document.getElementById("botao-mudar-imagem");
const imagem = document.getElementById("imagem-muda");
const imagens = ["./img/gatinho.png", "./img/onça.png"];
let indice = 0;

btnMudarImagem.addEventListener("click", function() {
  indice = (indice + 1) % imagens.length;
  imagem.src = imagens[indice];

});

const botaoMostrar = document.getElementById("botao-mostrar");
const paragrafoOculto = document.getElementById("paragrafo-oculto");

botaoMostrar.addEventListener("click", function() {
  if (paragrafoOculto.style.display === "none") {
    paragrafoOculto.style.display = "block";
  } else {
    paragrafoOculto.style.display = "none";
  }
});

const botaoEsconder = document.getElementById("botao-esconder");
const imagemVisivel = document.getElementById("imagem-visivel");

botaoEsconder.addEventListener("click", function() {
  if (imagemVisivel.style.display === "none") {
    imagemVisivel.style.display = "block";
  } else {
    imagemVisivel.style.display = "none";
  }
});
























/* const cores = ["red", "blue", "green", "yellow", "orange", "purple"];

function mudarCorFundo() {
  const body = document.querySelector('body');
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  body.style.backgroundColor = corAleatoria;
}

const btnCorFundo = document.getElementById("botao-cor-background");
botao-cor-background.addEventListener("click", mudarCorFundo); */

