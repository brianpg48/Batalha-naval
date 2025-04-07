let prompt = require('prompt-sync')();
function batalha(){
    var tabuleiro = [];
    for(let l = 0; l<5;l++){
        tabuleiro[l] = [];
        for(let c = 0; c<5;c++){
            tabuleiro[l][c] = false
        }  
    }
return tabuleiro;
}
var tabuleiro = batalha();
for(let n = 0; n<5;n++){
    let posL = Math.floor(Math.random()*5)
    let posC = Math.floor(Math.random()*5)
    if(!tabuleiro[posL][posC]){
        tabuleiro[posL][posC] = true;
    }else{
        n--;
    }
}
for(let tiros = 0; tiros<5; tiros++){
    var linha = Number(prompt("Escolha a linha: "))
    var coluna = Number(prompt("Escolha a coluna: ")) 

if(tabuleiro[linha][coluna] === true){
    console.log("************************")
    console.log("********ACERTOU*********")
    console.log("************************")
}else {
console.log("************************")
console.log("*********ERROU**********")
console.log("************************")
}

}