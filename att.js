let prompt = require('prompt-sync')();
function batalha(){
    var tabuleiro = [];
    for(let l = 0; l<5;l++){
        tabuleiro[l] = [];
        for(let c = 0; c<5;c++){
            tabuleiro[l][c] = false;
        }  
    }
return tabuleiro;
}

var tabuleiro = batalha();
for(let n = 0; n<5;n++){
    console.log(tabuleiro)
    var posL = Math.floor(Math.random()*5)
    var posC = Math.floor(Math.random()*5)
    if(!tabuleiro[posL][posC]){
        tabuleiro[posL][posC] = true;
    }else{
        n--;
    }
}
function atirar (){
    var tirosRestantes = 5
    var acertos = 0
console.log("Você tem 5 tiros:\n");

    while (tirosRestantes > 0) {
        console.log(`Tiros restantes: ${tirosRestantes}`);
        let posL = parseInt(prompt("Em qual linha você deseja atirar? (0-4) \n"));
        let posC = parseInt(prompt("Em qual coluna você deseja atirar? (0-4) \n"));

        if (posL < 0 || posL > 4 || posC < 0 || posC > 4) {
            console.log("Entrada inválida! Escolha números entre 0 e 4.");
            continue; 
        }

        if (tabuleiro[posL][posC] === true) {
            console.log("Você acertou um barco!");
            acertos++;
            tabuleiro[posL][posC] = false; 
        } else {
            console.log("Seu tiro foi na água.");
        }

        tirosRestantes--;
    }
}
atirar()

function reiniciar (){
   var reiniciar = parseInt(prompt("você deseja reiniciar?\n1-sim\n2-não\n:"))
   if(reiniciar == 1 ){
    atirar()
   } else{
    console.log("ta bom, obrigado por jogar!")
   }
}


reiniciar()