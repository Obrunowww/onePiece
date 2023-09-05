const telaDeFundo = document.querySelector("body");
const recipienteDasCartas = document.querySelector(".cards");
const botãoParaFechar = document.querySelector(".fechar");
const cartas = document.querySelectorAll('.card');

const mugiwaras = [
    "Luffy",
    "Zoro",
    "Nami",
    "Usopp",
    "Sanji",
    "Chopper",
    "Robin",
    "Franky",
    "Brook",
    "Jinbei"
];

cartas.forEach((carta, index) => {
    carta.classList.add(mugiwaras[index])
});


const definirPlanoDeFundo = (nomePersonagem) => {

    document.body.className = "";
    telaDeFundo.classList.add(nomePersonagem + "Fundo")
};


const reorganizarCartas = (index) => {
    const cartaClicada = mugiwaras.splice(index, 1)[0];
    mugiwaras.push(cartaClicada); 
    const nomePersonagem = mugiwaras[mugiwaras.length - 1]; 
    definirPlanoDeFundo(nomePersonagem); 

    //EntradaPraModificar As cores do site
};


const atualizarCartas = () => {
    cartas.forEach((carta, index) => {
        carta.classList.remove('card-move-left');
        carta.className = 'card'; 
        carta.classList.add(mugiwaras[index]); 
    });
};


cartas.forEach((carta, index) => {
    carta.addEventListener('click', () => {
        carta.classList.add('card-move-left'); 
        setTimeout(() => {
            reorganizarCartas(index); 
            atualizarCartas(); 
        }, 500); 
    });
});

let menu = "aberto"
const trocarImagem = document.querySelector(".trocaImagem")
const fechar = () =>{
    
    if (menu === "aberto"){
        recipienteDasCartas.style.width = "15%"
        menu = "fechado"
        trocarImagem.src = "./imagens/abrir.png"
    }else{
        recipienteDasCartas.style.width = "45%"
        menu = "aberto"
        trocarImagem.src = "./imagens/fechar.png"
    }
    

}

botãoParaFechar.addEventListener("click", fechar)