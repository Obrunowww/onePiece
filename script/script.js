const telaDeFundo = document.querySelector("body");
const recipienteDasCartas = document.querySelector(".cards");
const botãoParaFechar= document.querySelector(".fechar")
const cartas = document.querySelectorAll('.card');






class personagem {
    constructor(nome,imagemCard,imagemFundo){
        this.nome = nome;
        this.imagemCard = imagemCard;
        this.imagemFundo = imagemFundo;
        
    }
    
};

const Luffy = new personagem("Luffy","cardLuffy.jpg","Luffy.png");
const Zoro = new personagem("Zoro","cardZoro.jpg","Zoro.png");
const Nami = new personagem("Nami","cardNami.jpg","Nami.jpg");
const Usopp = new personagem("Usopp","cardUsopp.jpg","Usopp.png");
const Sanji = new personagem("Sanji","cardSanji.jpg","Sanji.jpg");
const Chopper = new personagem("Chopper","cardChopper.jpg","Chopper.jpg");
const Robin = new personagem("Robin","cardRobin.jpg","Robin.jpg");
const Franky = new personagem("Franky","cardFranky.jpg","Franky.png");
const Brook = new personagem("Brook","cardBrook.jpg","Brook.png");
const Jinbei = new personagem("Jinbei","cardJinbei.jpg","Jinbei.jpg");

const mugiwaras = [Luffy,Zoro,Nami,Usopp,Sanji,Chopper,Robin,Franky,Brook,Jinbei];

const desenharPersonagens = (mugiwara, local) =>{
    local.style.backgroundImage = `url(../imagens/cards/cardBrook.jpg)`;
    

}













cartas.forEach(carta =>{
    mugiwaras.forEach(chapeuDePalha =>{
        
        desenharPersonagens(chapeuDePalha, carta)
    })
})