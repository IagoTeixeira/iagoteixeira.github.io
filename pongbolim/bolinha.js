//informações da bolinha
let xBolinha = 300
let yBolinha = 200
let diamentro = 20
let raio = diamentro / 2 

//movimentação da bolinha
let velocidadexBolinha = 3
let velocidadeyBolinha = 3


function mostraBolinha(){
  fill(255)
  circle(xBolinha, yBolinha,diamentro)
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
  
}

function tocaBorda(){
  if(xBolinha + raio > width -30 || xBolinha - raio < 30){
    velocidadexBolinha *= -1
  }if (yBolinha + raio > height - 15 || yBolinha -raio < 15){
    velocidadeyBolinha *= -1
  }
}