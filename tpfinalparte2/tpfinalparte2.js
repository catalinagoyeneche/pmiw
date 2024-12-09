//https://www.youtube.com/watch?v=8aPhDoc1eSI

let objJuego;
let imgcriaturas, imgganaste, imgperdiste, imgfondo, imginicio



  function preload () {
  imgcriaturas = loadImage('data/criaturas.png');
  imgganaste = loadImage('data/ganaste.png');
  imgperdiste = loadImage('data/perdiste.png');
  imgfondo = loadImage('data/fondo.png');
  imginicio = loadImage('data/inicio.png');


}


function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(13);

}

function draw() {
  background(200);
  objJuego.dibujar(); //logica para mostrar juego
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function keyReleased() {
  objJuego.teclaLiberada(keyCode);
}
