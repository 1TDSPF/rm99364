//recupenrando um elemento button que está no index.html
const btn = document.getElementById("meu-btn");

//atrelando um evento de click ao buton que foi recuperado.
btn.addEventListener("click", function(){
    
    //função matamática - math
    //randon = gera números aleatórios entre 0 e 1. ex: 0.234242;
    //floor = arrendonda o numero para baixo
    //ceil = arrendonda o numero para cima
    //round = arrendonda o numero aleatoriamente
    let r,g,b;

    r = Math.round(Math.random() * 255); 
    g = Math.round(Math.random() * 255); 
    b = Math.round(Math.random() * 255); 
    
    // adicionando um atributo ao elemento button

    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

});

    //desafio 
    //Recupere o elemento tit-sec e atrele a ele um evento de mouse a sua escolha.
    //altere a cor de fundo e a cor de texto quando o evento ocorrer.

const titseec = document.getElementById("tit-seec");


titseec.addEventListener("click", function(){
    let r,g,b;

    r = Math.round(Math.random() * 255); 
    g = Math.round(Math.random() * 255); 
    b = Math.round(Math.random() * 255); 

    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});