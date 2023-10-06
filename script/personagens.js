const localDosPersonagens = document.querySelectorAll(".localDoPersonagem");
const conteudo = document.querySelector(".conteudo");
const fecharConteudo = document.querySelector(".sairDoConteudo");
const conteudoDoPersonagem = document.querySelector(".conteudoDoPersonagem")

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


let conteudoFechado = true;
const interaçãoConetudo = () => {

    if (conteudoFechado) {
        conteudo.style.display = "flex";
        conteudoFechado = false;
    } else {
        conteudo.style.display = "none";
        conteudoFechado = true;
        conteudoDoPersonagem.innerHTML = ""
    }
};

const verificarMugiwara = (mugiwara) => {
    switch (mugiwara) {
        case "Luffy":
        conteudoDoPersonagem.innerHTML = `<section class = "segundaMain"><h1>Oi! Eu sou Monkey D. Luffy, o homem que vai se tornar o Rei dos Piratas!</h1>
        <figure><p>Eu comi a Fruta do Diabo Gomu Gomu no Mi,
         que me deu poderes incríveis, como esticar meu corpo como uma borracha. Minha tripulação é a do Chapéu de Palha, e estamos em uma jornada incrível pelo New World em busca do One Piece,
         o maior tesouro do mundo. Eu sou um cara destemido, nunca desisto de uma luta, e estou sempre pronto
          para ajudar meus amigos. Vamos lá, pessoal, rumo à aventura!</p>
         <img src = "" alt = ""></img></figure>
         </section>`

            break;
        case "Zoro":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`

            break;
        case "Nami":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`

            break;
        case "Usopp":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`
            break;
        case "Sanji":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`
            break;
        case "Chopper":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`
            break;
        case "Robin":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`
            break;
        case "Franky":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`
            break;
        case "Brook":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`
            break;
        case "Jinbei":
            conteudoDoPersonagem.innerHTML = `<h1></h1>
        <p></p> <figure> <img src = "" alt = ""></img></figure> <h2>Maiores Feitos</h2> <p></p>`
            break;
        default:
            console.log(`esse foi clicado${mugiwara}`);
    };
};


console.log(localDosPersonagens)
localDosPersonagens.forEach((mugiwara, index) => {
    mugiwara.style.background = `url(../imagens/cards/card${mugiwaras[index]}.jpg)`;
    mugiwara.style.backgroundSize = "100% 100%";
    mugiwara.style.borderRadius = "20px";
    mugiwara.style.cursor = "pointer";

    mugiwara.addEventListener("click", () => {
        const nomeMugiwara = mugiwaras[index];
        interaçãoConetudo();
        verificarMugiwara(nomeMugiwara);
    }
    )

})

fecharConteudo.addEventListener("click", interaçãoConetudo)