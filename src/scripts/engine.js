const state ={
    view:{
        nomeHeroi: document.getElementById("nomeHeroi"),
        nivelHeroi: document.getElementById("nivelHeroi"),
        categoriaHeroi: document.getElementById("categoriaHeroi"),
        fundo: document.getElementById("fundoHeroi"),
    }
}
//state.view.fundo.style.display = "none";

function mostrarInfoHeroi(nome, nivel){
    if(nome == "" || nivel == ""){
        alert("Digite um nome e um nível");
        state.view.fundo.style.background = "none";
        state.view.fundo.style.boxShadow = "none";
        state.view.nomeHeroi.innerHTML = ""
        state.view.nivelHeroi.innerHTML = ""
        state.view.categoriaHeroi.innerHTML = ""
    }else{
        
        state.view.categoriaHeroi.innerHTML = `<h2>Ferro</h2>`
        if(nivel <= 1000){
            state.view.categoriaHeroi.innerHTML = `<h2>Ferro</h2>`
            state.view.fundo.style.background = `conic-gradient(
            #B7410E 0deg 20deg,
            #B7410E80 20deg 40deg,
            #B7410E 40deg 60deg,
            #B7410E80 60deg 80deg,
            #B7410E 80deg 100deg,
            #B7410E80 100deg 120deg,
            #B7410E 120deg 140deg,
            #B7410E80 140deg 160deg,
            #B7410E 160deg 180deg,
            #B7410E80 180deg 200deg,
            #B7410E 200deg 220deg,
            #B7410E80 220deg 240deg,
            #B7410E 240deg 260deg,
            #B7410E80 260deg 280deg,
            #B7410E 280deg 300deg,
            #B7410E80 300deg 320deg,
            #B7410E 320deg 340deg,
            #B7410E80 340deg 360deg
            )`;
            state.view.fundo.style.boxShadow = "none";
        }else if(nivel > 1000 && nivel <= 2000){
            state.view.categoriaHeroi.innerHTML = `<h2>Bronze</h2>`
            state.view.fundo.style.background = `conic-gradient(
                #CD7F32 0deg 20deg,
                #CD7F3280 20deg 40deg,
                #CD7F32 40deg 60deg,
                #CD7F3280 60deg 80deg,
                #CD7F32 80deg 100deg,
                #CD7F3280 100deg 120deg,
                #CD7F32 120deg 140deg,
                #CD7F3280 140deg 160deg,
                #CD7F32 160deg 180deg,
                #CD7F3280 180deg 200deg,
                #CD7F32 200deg 220deg,
                #CD7F3280 220deg 240deg,
                #CD7F32 240deg 260deg,
                #CD7F3280 260deg 280deg,
                #CD7F32 280deg 300deg,
                #CD7F3280 300deg 320deg,
                #CD7F32 320deg 340deg,
                #CD7F3280 340deg 360deg
                )`;
                state.view.fundo.style.boxShadow = "none";
        }else if(nivel > 2000 && nivel <= 5000){
            state.view.categoriaHeroi.innerHTML = `<h2>Prata</h2>`
            state.view.fundo.style.background = `conic-gradient(
                #C0C0C0 0deg 20deg,
                #C0C0C080 20deg 40deg,
                #C0C0C0 40deg 60deg,
                #C0C0C080 60deg 80deg,
                #C0C0C0 80deg 100deg,
                #C0C0C080 100deg 120deg,
                #C0C0C0 120deg 140deg,
                #C0C0C080 140deg 160deg,
                #C0C0C0 160deg 180deg,
                #C0C0C080 180deg 200deg,
                #C0C0C0 200deg 220deg,
                #C0C0C080 220deg 240deg,
                #C0C0C0 240deg 260deg,
                #C0C0C080 260deg 280deg,
                #C0C0C0 280deg 300deg,
                #C0C0C080 300deg 320deg,
                #C0C0C0 320deg 340deg,
                #C0C0C080 340deg 360deg
                )`;
                state.view.fundo.style.boxShadow = "none";
        }else if(nivel > 5000 && nivel <= 7000){
            state.view.categoriaHeroi.innerHTML = `<h2>Ouro</h2>`
            state.view.fundo.style.background = `conic-gradient(
                #FFD700 0deg 20deg,
                #FFD70080 20deg 40deg,
                #FFD700 40deg 60deg,
                #FFD70080 60deg 80deg,
                #FFD700 80deg 100deg,
                #FFD70080 100deg 120deg,
                #FFD700 120deg 140deg,
                #FFD70080 140deg 160deg,
                #FFD700 160deg 180deg,
                #FFD70080 180deg 200deg,
                #FFD700 200deg 220deg,
                #FFD70080 220deg 240deg,
                #FFD700 240deg 260deg,
                #FFD70080 260deg 280deg,
                #FFD700 280deg 300deg,
                #FFD70080 300deg 320deg,
                #FFD700 320deg 340deg,
                #FFD70080 340deg 360deg
                )`;
                state.view.fundo.style.boxShadow = "none";
        }else if(nivel > 7000 && nivel <= 8000){
            state.view.categoriaHeroi.innerHTML = `<h2>Platina</h2>`
            state.view.fundo.style.background = `conic-gradient(
                 #a0b2c6 0deg 20deg,
                 #a0b2c680 20deg 40deg,
                 #a0b2c6 40deg 60deg,
                 #a0b2c680 60deg 80deg,
                 #a0b2c6 80deg 100deg,
                 #a0b2c680 100deg 120deg,
                 #a0b2c6 120deg 140deg,
                 #a0b2c680 140deg 160deg,
                 #a0b2c6 160deg 180deg,
                 #a0b2c680 180deg 200deg,
                 #a0b2c6 200deg 220deg,
                 #a0b2c680 220deg 240deg,
                 #a0b2c6 240deg 260deg,
                 #a0b2c680 260deg 280deg,
                 #a0b2c6 280deg 300deg,
                 #a0b2c680 300deg 320deg,
                 #a0b2c6 320deg 340deg,
                 #a0b2c680 340deg 360deg
                )`;
                state.view.fundo.style.boxShadow = "none";
        }else if(nivel > 8000 && nivel <= 9000){
            state.view.categoriaHeroi.innerHTML = `<h2>Ascendente</h2>`
            state.view.fundo.style.background = `conic-gradient(
                #abb1ac 0deg 20deg,
                #abb1ac80 20deg 40deg,
                #abb1ac 40deg 60deg,
                #abb1ac80 60deg 80deg,
                #abb1ac 80deg 100deg,
                #abb1ac80 100deg 120deg,
                #abb1ac 120deg 140deg,
                #abb1ac80 140deg 160deg,
                #abb1ac 160deg 180deg,
                #abb1ac80 180deg 200deg,
                #abb1ac 200deg 220deg,
                #abb1ac80 220deg 240deg,
                #abb1ac 240deg 260deg,
                #abb1ac80 260deg 280deg,
                #abb1ac 280deg 300deg,
                #abb1ac80 300deg 320deg,
                #abb1ac 320deg 340deg,
                #abb1ac80 340deg 360deg
                )`;
                state.view.fundo.style.boxShadow = "0 0 20px #abb1ac";
        }else if(nivel > 9000 && nivel <= 10000){
            state.view.categoriaHeroi.innerHTML = `<h2>Imortal</h2>`
            state.view.fundo.style.background = `conic-gradient(
                #ff0000 0deg 20deg,
                #ff000080 20deg 40deg,
                #ff0000 40deg 60deg,
                #ff000080 60deg 80deg,
                #ff0000 80deg 100deg,
                #ff000080 100deg 120deg,
                #ff0000 120deg 140deg,
                #ff000080 140deg 160deg,
                #ff0000 160deg 180deg,
                #ff000080 180deg 200deg,
                #ff0000 200deg 220deg,
                #ff000080 220deg 240deg,
                #ff0000 240deg 260deg,
                #ff000080 260deg 280deg,
                #ff0000 280deg 300deg,
                #ff000080 300deg 320deg,
                #ff0000 320deg 340deg,
                #ff000080 340deg 360deg
                )`;
                state.view.fundo.style.boxShadow = "0 0 30px #FF0000";
        }else{
            state.view.categoriaHeroi.innerHTML = `<h2>Radiante</h2>`
            state.view.fundo.style.background = `conic-gradient(
                #FFD700 0deg 20deg,
                #FFD70050 20deg 40deg,
                #FFD700 40deg 60deg,
                #FFD70050 60deg 80deg,
                #FFD700 80deg 100deg,
                #FFD70050 100deg 120deg,
                #FFD700 120deg 140deg,
                #FFD70050 140deg 160deg,
                #FFD700 160deg 180deg,
                #FFD70050 180deg 200deg,
                #FFD700 200deg 220deg,
                #FFD70050 220deg 240deg,
                #FFD700 240deg 260deg,
                #FFD70050 260deg 280deg,
                #FFD700 280deg 300deg,
                #FFD70050 300deg 320deg,
                #FFD700 320deg 340deg,
                #FFD70050 340deg 360deg
                )`;
            state.view.fundo.style.boxShadow = "0 0 80px #FFD700";
        }
    }
}
