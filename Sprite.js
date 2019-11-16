function Sprite(x, y, largura, altura) {
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;

  this.desenha = function(xCanvas, yCanvas) {
    ctx.drawImage(imgBoneco, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
  };
}

var spriteBoneco = new Sprite(769, 235, 140, 212);
var spriteBonecoPula = new Sprite(750, 484, 144, 228);
