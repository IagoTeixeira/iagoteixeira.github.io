//linhas que criam os limites do campo
let linhaLateral
let linhaLateral2
let linhaDoFundo
let linhaDoMeio
let linhaDoFundo2
let linhasDoLimiteDoCampo = [linhaLateral, linhaLateral2, linhaDoFundo, linhaDoMeio, linhaDoFundo2]

//tamanho e posição
let xlinha = [24, 24, 23, 300, 574]
let ylinha = [12, 385, 12, 15, 12]
let larguralinha = [550, 550, 3, 3, 3]
let tamanholinha = [3, 3, 375, 370, 376]


function mostralinha(){
  for(i=0; i < linhasDoLimiteDoCampo.length; i++){
    stroke(100)
    fill(255)
    rect(xlinha[i], ylinha[i], larguralinha[i] , tamanholinha[i])
  }
}
function corFundo(){
  background(35,142,35);
}

function circulo(){
  corzinha = color(35,142,35)
  corzinha.setAlpha(25)
  stroke(255)
  fill(corzinha)
  circle(300, 200, 100)
}

function linhasDoGol(){
  stroke(255)
  fill(255)
  line(25, 150, 55, 150)
  line(55, 250, 55, 150)
  line(25, 250, 55, 250)
  //linhas de fora
  line(112, 90, 25, 90)
  line(112, 310, 112, 90)
  line(25, 311, 112, 310)
  circle(83, 200, 3)
} 
function linhasDoGol2(){
  stroke(255)
  fill(255)
  line(575, 150, 545, 150)
  line(545, 250, 545, 150)
  line(575, 250, 545, 250)
  //linhas de fora
  line(575, 90, 487, 90)
  line(487, 310, 487, 90)
  line(487, 310, 575, 310)
  circle(517, 200, 3)
  
}

function escanteio(){
  corzinha = color(35,142,35)
  corzinha.setAlpha(25)
  stroke(255)
  fill(corzinha)
  circle(27, 18, 9)
  circle(572, 18, 9)
  //Escanteio de Baixo
  circle(27, 382, 9)
  circle(572, 382, 9)
}

function arco(){
 
  noFill();
  stroke(255);
  arc(112, 200, 30, 60, PI+HALF_PI,HALF_PI);
  arc(486, 200, 30, 65, PI / 2, radians(270), CHORD);
  
}

function mostraCampo(){
  corFundo()
  circulo()
  escanteio()
  mostralinha()
  linhasDoGol()
  linhasDoGol2()
  arco()
  
}