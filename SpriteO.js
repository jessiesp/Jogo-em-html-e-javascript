function SpriteO(x, y, largura, altura) {
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;

  this.desenha = function(xCanvas, yCanvas) {
    ctx.drawImage(imgObs, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
  };
}

var spriteObs1 = new SpriteO(26, 232, 240, 234);
var spriteObs2 = new SpriteO(500, 136, 124, 164);
var spriteObs3 = new SpriteO(804, 16, 130, 302);
var spriteObs4 = new SpriteO(1380, 18, 126, 286);
var spriteObs5 = new SpriteO(746, 1332, 138, 196);
var spriteObs6 = new SpriteO(494, 1264, 204, 110);
var spriteObs7 = new SpriteO(1384, 538, 134, 136);
var spriteObs8 = new SpriteO(392, 1372, 134, 132);
var spriteObs9 = new SpriteO(348, 16, 142, 196);
