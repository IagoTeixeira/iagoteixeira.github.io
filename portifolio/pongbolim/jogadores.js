//Criação dos Jogadores
let minhaRaquete
let minhaRaquete2
let raqueteInimiga
let raqueteInimiga2
let conjuntoDeRaquetes = [minhaRaquete, raqueteInimiga, minhaRaquete2, raqueteInimiga2]

//dados dos jogadores
let xraquete = [100, 230, 360, 490]
let yraquete = [160, 160, 160, 160]
let comprimentoRaquete = 8
let alturaRaquete = 70
let velocidadeDoOponente


//Colisão
let colidiu = false


function mostraRaquete(x, y){
  for(i = 0; i < conjuntoDeRaquetes.length; i++){
    if(i == 0 || i == 2){
      fill(50,50,205)
    rect(xraquete[i], yraquete[i], comprimentoRaquete, alturaRaquete)
    }
    if(i == 1 || i == 3){
      fill(165,42,42)
    rect(xraquete[i], yraquete[i], comprimentoRaquete, alturaRaquete)
    }
  }
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
     yraquete[0]-=3
     yraquete[2]-=3
     raqueteTocaBorda()
  }if(keyIsDown(DOWN_ARROW)){
     yraquete[0]+=3
     yraquete[2]+=3
     raqueteTocaBorda()
  }
}

function raqueteTocaBorda(){
  for(i = 0; i < conjuntoDeRaquetes.length; i++){
     if(yraquete[i] <= 16){
       yraquete[i] = 16
     }if(yraquete[i] >= 314){
         yraquete[i] = 314
       }
   }
}

function verificaColisaoRaquete(){
  for(i = 0; i < conjuntoDeRaquetes.length; i++){
    colide(i)
  }
}

function colide(x){
    colidiu=collideRectCircle(xraquete[x],yraquete[x], comprimentoRaquete, alturaRaquete, xBolinha,yBolinha, raio);
  if (colidiu){
      chute.play()
      velocidadexBolinha *= -1  
    }
}

//função para movimento do Jogador 2
function movimentaraquete2(){
    if(keyIsDown(87)){
     yraquete[1]-=3
     yraquete[3]-=3
     raqueteTocaBorda()
  }if(keyIsDown(83)){
     yraquete[1]+=3
     yraquete[3]+=3
     raqueteTocaBorda()
  }
}
