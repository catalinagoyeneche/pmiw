let obra;
let numLineas = 40;
let normalgrosor = 4;
let randomgrosor;

function preload() {
  obra = loadImage('obra.jpg');
}

function setup() {
  createCanvas(800, 400);
  background(210);
  image(obra, 0, 0, width / 2, height);
  randomgrosor = normalgrosor;
}

function draw() {
  image(obra, 0, 0, width / 2, height);

  let centerX = width / 2 + (width / 4);
  let centerY = height / 2;
  let halfSize = 180; // Tamaño

  dibujarRombo(centerX, centerY, halfSize);

  stroke(50);
  strokeWeight(randomgrosor);

  let espacio = calcularEspacio(numLineas, width / 2);

  // dibujar las lineas
  for (let i = 0; i < numLineas / 2; i++) {
    for (let j = 0; j < 2; j++) {
      let x = width / 2 + (i * 2 + j) * espacio;
      line(x, 0, x, height);
    }
  }
}

function dibujarRombo(centerX, centerY, halfSize) {
  noStroke();
  fill(255);
  beginShape();
  vertex(centerX, centerY - halfSize);
  vertex(centerX + halfSize, centerY);
  vertex(centerX, centerY + halfSize);
  vertex(centerX - halfSize, centerY);
  endShape(CLOSE);
}

function mouseMoved() {
  if (mouseX > width / 2) {
    randomgrosor = random(1, 6);
  } else {
    randomgrosor = normalgrosor;
  }
}

function keyPressed() {
  if (key == ' ') {
    resetVariables();
  } else if (key == 'r' || key == 'R') {
    resetVariables();
  }
}

function resetVariables() {
  randomgrosor = normalgrosor;
}

function calcularEspacio(totalLineas, ancho) {
  return ancho / totalLineas;
}
