const telaDeFundo = document.querySelector("body");
const main = document.querySelector("main")
const recipienteDasCartas = document.querySelector(".cards");
const botãoParaFechar = document.querySelector(".fechar");
const cartas = document.querySelectorAll('.card');
const header = document.querySelectorAll("header a");
const section = document.querySelectorAll("section");
const fecharInfo = document.querySelector('.fecharInfo');
const textoInfo = document.querySelector(".informaçãoTexto")
const info = document.querySelector(".info")
let menu1Aberto = false;
let menu2Aberto = true;
let sessãoDoVideo = "nãoCriada"
let video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/UrSKz2rNhj4?si=4plqXeHW6_5GFfsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
const corDoTexto = document.querySelector(".informaçãoTexto p");

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

    switch (nomePersonagem) {
        case "Luffy":
            header.forEach(elemento => {
                elemento.style.color = "red"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(255, 0, 0, 0.164)"
                })
            })
            corDoTexto.style.color = "red"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/iZ97i1nLD4E?si=aVO9ytjQtENlNrdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

            break;
        case "Zoro":
            header.forEach(elemento => {
                elemento.style.color = "green"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(0, 78, 0, 0.158)"
                })
            })
            corDoTexto.style.color = "green"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/l5uxQ1WdTM0?si=OWipb2QXTommPzwK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            break;
        case "Nami":
            header.forEach(elemento => {
                elemento.style.color = "orangered"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(255, 68, 0, 0.322)"
                })
            })
            corDoTexto.style.color = "orangered"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/B4Loy8UU3V4?si=NfxOJUBiZFluy5ux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`


            break;
        case "Usopp":
            header.forEach(elemento => {
                elemento.style.color = "yellow"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(255, 255, 0, 0.212)"
                })
            })
            corDoTexto.style.color = "yellow"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/pKu2AR2lbVk?si=yHJPL75SOiU7zDbJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

            break;
        case "Sanji":
            header.forEach(elemento => {
                elemento.style.color = "aqua"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(0, 255, 255, 0.192)"
                })
            })
            corDoTexto.style.color = "aqua"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/-7hQNuzysco?si=ZSNWTl7Imsa2_47g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            break;
        case "Chopper":
            header.forEach(elemento => {
                elemento.style.color = "rgb(248, 87, 114)"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(216, 112, 147, 0.300)"
                })
            })
            corDoTexto.style.color = "rgb(248, 87, 114)"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/XCKPLBi9bmE?si=rE6E2Oov8P4-TINg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            break;
        case "Robin":
            header.forEach(elemento => {
                elemento.style.color = "purple"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(128, 0, 128, 0.281)"
                })
            })
            corDoTexto.style.color = "purple"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/6vcS1iSiBNk?si=-97RQYNArPXfRiK9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            break;
        case "Franky":
            header.forEach(elemento => {
                elemento.style.color = "rgb(0, 110, 255)"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(0, 110, 255, 0.295)"
                })
            })
            corDoTexto.style.color = "rgb(0, 110, 255)"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/R8hispb7N6k?si=CjOrr3ozzsOCQ5bG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            break;
        case "Brook":
            header.forEach(elemento => {
                elemento.style.color = "rgb(92, 53, 2)"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(92, 53, 2, 0.300)"
                })
            })
            corDoTexto.style.color = "rgb(92, 53, 2)"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/ClnlNUOwRAg?si=haer4F2f1jQmDFVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            break;
        case "Jinbei":
            header.forEach(elemento => {
                elemento.style.color = "rgb(4, 0, 253)"
                elemento.style.textShadow = "1px 1px black"
                section.forEach(sessão => {
                    sessão.style.background = "rgba(255, 99, 71, 0.514)"
                })
            })
            corDoTexto.style.color = "aqua"
            corDoTexto.style.textShadow = "1px 1px black"
            video = `<iframe width="800" height="540" src="https://www.youtube.com/embed/rTsIvBnmjT8?si=NV5KHOKj99vWD7dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            corDoTexto.style.color = "black"
            
            break;

        default:
            console.log("arruma o código ae doido")
            break;
    }

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

let menu = "fechado";
const trocarImagem = document.querySelector(".trocaImagem");
const fechar = () => {

    if (menu === "aberto") {
        recipienteDasCartas.style.width = "3%"
        menu = "fechado"
        trocarImagem.src = "./imagens/abrir.png"
        menu1Aberto = false
    } else {
        recipienteDasCartas.style.width = "45%"
        menu = "aberto"
        trocarImagem.src = "./imagens/fechar.png"
        menu1Aberto = true;
    }


};
let menuFechado = true;

let informaçãoAberta = true;
const fecharInformação = () => {

    if (informaçãoAberta) {
        informaçãoAberta = false;
        textoInfo.style.display = "none";
        fecharInfo.style.background = "rgba(0, 128, 0, 0.308)";
        info.style.width = "27px";
        info.style.height = "17px";
        fecharInfo.innerHTML = `>`;
        menu2Aberto = false;



    } else {
        informaçãoAberta = true;
        texto.style.display = "flex";
        fecharInfo.style.background = "rgba(255, 0, 0, 0.397)";
        info.style.width = "40%";
        info.style.height = "50vh";
        fecharInfo.innerHTML = `x`;
        menu2Aberto = true;
    };
};

const verificarMenus = () => {
   
    if (menu1Aberto === false && menu2Aberto === false) {
        if (sessãoDoVideo === "criada") {
            let caixaDePergunta = document.querySelector(".perguntaVideo")
            caixaDePergunta.style.display = "flex"
            caixaDePergunta.innerHTML = "<section class = 'tabuleiroDoVideo'><h2>Deseja ver o video?</h2> <section class ='botões'> <button onclick = 'abrirVideo()'>Sim</button> <button onclick = 'fecharPergunta()' >Não</button> </section>"
            
            console.log("com o a sessão criada")

        } else {
            let caixaDePergunta = document.createElement("div")
            caixaDePergunta.classList.add("perguntaVideo")
            caixaDePergunta.innerHTML = "<section class = 'tabuleiroDoVideo'><h2>Deseja ver o video?</h2> <section class ='botões'> <button onclick = 'abrirVideo()'>Sim</button> <button onclick = 'fecharPergunta()' >Não</button> </section>"
            main.appendChild(caixaDePergunta)
            sessãoDoVideo = "criada"
            console.log("criando a sessão")
        }


    } else {
        console.log(menu1Aberto, menu2Aberto)
    }
}

const abrirVideo = () =>{
    video = video
    const tabuleiroDoVideo = document.querySelector(".tabuleiroDoVideo");
    tabuleiroDoVideo.style.display = "flex"
    tabuleiroDoVideo.innerHTML = `<div><p>Pause o video antes de sair </p><button class = "fecharVideo" onclick = fecharVideo()>x</button></div> <h2>${video}</h2>`
    

}
const fecharPergunta = () =>{
    const perguntaVideo = document.querySelector(".perguntaVideo")
    perguntaVideo.style.display = "none"
}
botãoParaFechar.addEventListener("click", () => {
    fechar()
    verificarMenus()
});

const fecharVideo = () =>{
    const tabuleiroDoVideo = document.querySelector(".tabuleiroDoVideo");
    tabuleiroDoVideo.style.display = "none"
    
   fecharPergunta()

}

fecharInfo.addEventListener("click", () => {
    fecharInformação()
    verificarMenus()
});
