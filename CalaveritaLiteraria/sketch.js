

var calavera1Img;
var calavera1Sonido;

var calavera2Img;
var calavera2Sonido;

var calavera3Img;
var calavera3Sonido;

var calavera4Img;
var calavera4Sonido;

var calavera5Img;
var calavera5Sonido;

var mano;

var fondo;

var botonX = [];
var botonY = [];
var botonSz = [];

var botonStop = "apagado";

var totalBotones = 5;

function setup() {
createCanvas(1200, 600);
background(220);

 fondo = loadImage("fondo.png");
mano=loadImage("mano.png");

 calavera1Img = loadImage("calavera1.png");
calavera1Sonido = loadSound("calavera1.mp3");

 calavera2Img = loadImage("calavera2.png");
calavera2Sonido = loadSound("calavera2.mp3");

 calavera3Img = loadImage("calavera3.png");
calavera3Sonido = loadSound("calavera3.mp3");

 calavera4Img = loadImage("calavera4.png");
calavera4Sonido = loadSound("calavera4.mp3");

 calavera5Img = loadImage("calavera5.png");
calavera5Sonido = loadSound("calavera5.mp3");

var steps = width/5;
for (var i = 105; i < width; i += steps) {
botonX = append(botonX, i);
botonY = append(botonY, height/2);
botonSz = append(botonSz, 30);
}
}

function draw() {
background(220);

 imageMode(CORNER);
image(fondo, 0, 0, width, height);

 for (var i = 0; i < botonX.length; i += 1) {
fill(255, 255, 255);
ellipse(botonX[i], botonY[i], botonSz[i], botonSz[i]);

imageMode(CENTER);
image(mano,mouseX,mouseY,170,170);
fill(170, 230, 223);

 var distancia = dist(mouseX, mouseY, botonX[i], botonY[i]);

 if (distancia <= botonSz[i]) {
if (mouseIsPressed) {
if (botonX[i] == botonX[0]) {

if (calavera1Sonido.isPlaying()) {
} else {
calavera1Sonido.play();
}
}

 if (botonX[i] == botonX[1]) {
if (calavera2Sonido.isPlaying()) {
} else {
calavera2Sonido.play();
}
}

 if (botonX[i] == botonX[2]) {
if (calavera3Sonido.isPlaying()) {
} else {
calavera3Sonido.play();
}
}

 if (botonX[i] == botonX[3]) {
if (calavera4Sonido.isPlaying()) {
} else {
calavera4Sonido.play();
}
}

 if (botonX[i] == botonX[4]) {
if (calavera5Sonido.isPlaying()) {
} else {
calavera5Sonido.play();
}
}

 /*
image(calavera1Img,0,0,width,height);
if(calavera1Sonido.isPlaying()){
}else{
calavera1Sonido.play();
}
*/
}
}
}
}

function keyTyped() {
if (key == "a") {
if (calavera1Sonido.isPlaying()) {
calavera1Sonido.stop();
} else {
}

 if (calavera2Sonido.isPlaying()) {
calavera2Sonido.stop();
} else {
}

 if (calavera3Sonido.isPlaying()) {
calavera3Sonido.stop();
} else {
}

 if (calavera4Sonido.isPlaying()) {
calavera4Sonido.stop();
} else {
}

 if (calavera5Sonido.isPlaying()) {
calavera5Sonido.stop();
} else {
}
}
}


