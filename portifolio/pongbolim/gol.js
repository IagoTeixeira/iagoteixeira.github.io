//gols
let minhaAreaGol
let areaDeGolDoOponente
let todasAreasDeGols = [minhaAreaGol, areaDeGolDoOponente]
let gol = false

//pontos
let meusPontos = 0
let pontosDoOponente = 0
let xgol = [25, 568]
let ygol = 155
let tamanhogol = 92
let larguragol = 5

function mostraGols(){
  for(i = 0; i < todasAreasDeGols.length; i++){
    fill(255)
    rect(xgol[i], ygol, larguragol, tamanhogol)
  }
}
function verificaGol(){
  if(xBolinha + raio > 570 && yBolinha > 150 && yBolinha < 250){
    meusPontos +=1
    golSom.play()
    posicaoInicial()
  }if(xBolinha - raio < 30 && yBolinha > 150 && yBolinha < 250){
    pontosDoOponente +=1
    golSom.play()
    posicaoInicial()
  }
}

function exibePlaca(){
  stroke(255)
  textSize(16)
  fill(219,219,112)
  text(meusPontos, 280, 30)
  text(pontosDoOponente, 313, 30)
  
}

function posicaoInicial(){
  xBolinha = 300
  yBolinha = 200
  setTimeout(6)
}

  