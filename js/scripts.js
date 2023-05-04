//recupenrando um elemento button que está no index.html
/* const btn = document.getElementById("meu-btn");

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
}); */


// declarando um array

/* 

let frutas = ["maçã","laranja","banana","uva","kiwi","caqui"];
console.log (frutas);

// Para verificar o tamanho do array utilizamos a propriedade length
console.log("Tamanho do array" + frutas.length);
console.log("Pegando um dos itens do Array : " + frutas[3]);

//Iterando o array com estruturas de repetição:
//forEach
frutas.forEach( (fruta)=>{
    console.log("Pegando um dos itens do Array com forEach: " + fruta);
} );

//Adicionado um item ao final do array com o método push(item);
frutas.push("melão");
console.table(frutas);

//Adicionado um item no início do array com o método unshift(item);
frutas.unshift("melancia");
console.table(frutas);

//Removendo um item do final do array com o método pop();
frutas.pop();
console.table(frutas);

//Removendo um item do inicio do array com o método pop();
frutas.shift();
console.table(frutas);

//Localizando um determinando item dentro do array com o método indexOf(item);
// let indice = frutas.indexOf("banana");
// console.log("INDICE ONDE FOI LOCALIZADO O ITEM : " + indice);
// console.log("ITEM QUE FOI LOCALIZADO NO ARRAY : " + frutas[indice]);

//Utilizando os métodos, slice(indiceItem, quantidadeRemoções) para remover um item do array passando sua localizaçao através do indice.
//Localizando um determinando item dentro do array com o método indexOf(item);
let indice = frutas.indexOf("banana");
console.log("ITEM QUE ESTAVA NO LOCAL ANTES DA REMOÇÃO : " + frutas[indice]);
frutas.splice(indice,2);
console.table(frutas);
console.log("ITEM QUE FICOU NO LOCAL APÓS A REMOÇÃO : " + frutas[indice]);

*/
