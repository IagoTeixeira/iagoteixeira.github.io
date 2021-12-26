function setup() {
  createCanvas(600, 400);
  torcida.loop()
}

function draw() {
  mostraCampo()
  mostraBolinha()
  movimentaBolinha()
  tocaBorda()
  mostraRaquete()
  movimentaRaquete()
  verificaColisaoRaquete()
  movimentaraquete2()
  mostraGols()
  verificaGol()
  exibePlaca()
}