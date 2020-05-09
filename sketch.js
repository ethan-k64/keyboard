/*
*Made By Ethan Knotts
*Please Don't Steal My Code
*/

// Global Variables-----------------------------------------------------------------------------
const len = 21;
const type = "sine";

let notew;
let note;

function setup() {
  const cnv = createCanvas(len * 60, 300);
  cnv.position(displayWidth / 2 - width / 2, 0);
  
  note = new p5.Envelope();
  note.setADSR(0, 0.3, 0.2, 0);
  note.setRange(0.1, 0);
  
  notew = new p5.Oscillator();
  notew.setType(type);
  notew.freq(130);
}

function draw() {
  background(220);
  
  notew.amp(note);
  drawKeys();
}

function keyPressed() {
  // White Keys---------------------------------------------------------------------------------
  if (key == 'q') {
    notew.freq(130);
    notew.start();
    note.play();
  }
  
  if (key == 'w') {
    notew.freq(146);
    notew.start();
    note.play();
  }
  
  if (key == 'e') {
    notew.freq(164);
    notew.start();
    note.play();
  }
  
  if (key == 'r') {
    notew.freq(174);
    notew.start();
    note.play();
  }
  
  if (key == 't') {
    notew.freq(196);
    notew.start();
    note.play();
  }
  
  if (key == 'y') {
    notew.freq(220);
    notew.start();
    note.play();
  }
  
  if (key == 'u') {
    notew.freq(246);
    notew.start();
    note.play();
  }
  
  if (key == 'i') {
    notew.freq(261);
    notew.start();
    note.play();
  }
  
  if (key == 'o') {
    notew.freq(293);
    notew.start();
    note.play();
  }
  
  if (key == 'p') {
    notew.freq(329);
    notew.start();
    note.play();
  }
  
  if (key == 'z') {
    notew.freq(349);
    notew.start();
    note.play();
  }
  
  if (key == 'x') {
    notew.freq(391);
    notew.start();
    note.play();
  }
  
  if (key == 'c') {
    notew.freq(440);
    notew.start();
    note.play();
  }
  
  if (key == 'v') {
    notew.freq(493);
    notew.start();
    note.play();
  }
  
  if (key == 'b') {
    notew.freq(523);
    notew.start();
    note.play();
  }
  
  if (key == 'n') {
    notew.freq(587);
    notew.start();
    note.play();
  }
  
  if (key == 'm') {
    notew.freq(659);
    notew.start();
    note.play();
  }
  
  if (key == ',') {
    notew.freq(698);
    notew.start();
    note.play();
  }
  
  if (key == '.') {
    notew.freq(783);
    notew.start();
    note.play();
  }
  
  if (key == '/') {
    notew.freq(880);
    notew.start();
    note.play();
  }
  
  // Black Keys---------------------------------------------------------------------------------
  if (key == '2') {
    notew.freq(138);
    notew.start();
    note.play();
  }
  
  if (key == '3') {
    notew.freq(155);
    notew.start();
    note.play();
  }
  
  if (key == '5') {
    notew.freq(185);
    notew.start();
    note.play();
  }
  
  if (key == '6') {
    notew.freq(207);
    notew.start();
    note.play();
  }
  
  if (key == '7') {
    notew.freq(233);
    notew.start();
    note.play();
  }
  
  if (key == '9') {
    notew.freq(277);
    notew.start();
    note.play();
  }
  
  if (key == '0') {
    notew.freq(311);
    notew.start();
    note.play();
  }
  
  if (key == 's') {
    notew.freq(369.99);
    notew.start();
    note.play();
  }
  
  if (key == 'd') {
    notew.freq(415);
    notew.start();
    note.play();
  }
  
  if (key == 'f') {
    notew.freq(466);
    notew.start();
    note.play();
  }
  
  if (key == 'h') {
    notew.freq(554);
    notew.start();
    note.play();
  }
  
  if (key == 'j') {
    notew.freq(622);
    notew.start();
    note.play();
  }
  
  if (key == 'l') {
    notew.freq(739.99);
    notew.start();
    note.play();
  }
  
  if (key == ';') {
    notew.freq(830);
    notew.start();
    note.play();
  }
  
  if (key == '\'') {
    notew.freq(932);
    notew.start();
    note.play();
  }
}

function drawKeys() {
  let w = 60;
  
  // White Keys---------------------------------------------------------------------------------
  push();
  fill(255);
  strokeWeight(4);
  stroke(0);
  
  for (let i = 0; i < len; i++) {
    rect(i * w, 0, w, height);
  }
  
  pop();
  
  // Black Keys---------------------------------------------------------------------------------
  push();
  fill(51);
  noStroke();
  
  // C#-----------------------------------------------------------------------------------------
  for (let i = 1.5; i < 1.5 + (14 * 3); i += 14) {
    rect(30 * i, 0, w / 2, height / 2 + 25);
  }
  
  // D#-----------------------------------------------------------------------------------------
  for (let i = 3.5; i < 3.5 + (14 * 3); i += 14) {
    rect(30 * i, 0, w / 2, height / 2 + 25);
  }
  
  // F#-----------------------------------------------------------------------------------------
  for (let i = 7.5; i < 7.5 + (14 * 3); i += 14) {
    rect(30 * i, 0, w / 2, height / 2 + 25);
  }
  
  // G#-----------------------------------------------------------------------------------------
  for (let i = 9.5;i < 9.5 + (14 * 3); i += 14) {
    rect(30 * i, 0, w / 2, height / 2 + 25);
  }
  
  // A#-----------------------------------------------------------------------------------------
  for (let i = 11.5; i < 11.5 + (14 * 3) ; i += 14) {
    rect(30 * i, 0, w / 2, height / 2 + 25);
  }
  
  pop();
  
  // That Red Line------------------------------------------------------------------------------
  push();
  stroke(150, 0, 0);
  strokeWeight(8);
  line(0, 0, width, 0);
  pop();
  
  // Text---------------------------------------------------------------------------------------
  push();
  fill(150, 0, 0);
  textSize(25);
  text("I", 440, 75);
  pop();
  
  // White Key Text-----------------------------------------------------------------------------
  push();
  fill(0);
  textSize(25);
  text("Q", 15, 75);
  text("W", 78, 75);
  text("E", 147, 75);
  text("R", 195, 75);
  text("T", 262, 75);
  text("Y", 321, 75);
  text("U", 386, 75);
  text("O", 500, 75);
  text("P", 568, 75);
  text("Z", 615, 75);
  text("X", 681, 75);
  text("C", 740, 75);
  text("V", 808, 75);
  text("B", 855, 75);
  text("N", 920, 75);
  text("M", 985, 75);
  text(",", 1040, 75);
  text(".", 1105, 75);
  text("/", 1165, 75);
  pop();
  
  // Black Key Text-----------------------------------------------------------------------------
  push();
  fill(255);
  textSize(25);
  text("2", 53, 50);
  text("3", 113, 50);
  text("5", 233, 50);
  text("6", 293, 50);
  text("7", 353, 50);
  text("9", 473, 50);
  text("0", 533, 50);
  text("S", 651, 50);
  text("D", 711, 50);
  text("F", 772, 50);
  text("H", 891, 50);
  text("J", 954, 50);
  text("L", 1073, 50);
  text(";", 1136, 50);
  text("'", 1197, 50);
  pop();
}
