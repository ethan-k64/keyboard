/*
 *Made By Ethan Knotts
 *Please Don't Steal My Code
 */

// Global Variables-----------------------------------------------------------------------------
const len = 21;
let type = "sine";

let notew;
let note;

let vol = 0;

function setup() {
  const cnv = createCanvas(len * 60, 300);
  cnv.position(displayWidth / 2 - width / 2, 175);

  note = new p5.Envelope();
  note.setADSR(0, 0.3, 0.2, 0);
  note.setRange(vol, 0);

  notew = new p5.Oscillator();
  notew.setType(type);
  notew.freq(130);
}

function draw() {
  background(220);

  note.setRange(vol, 0);

  notew.amp(note);
  notew.setType(type);
  
  drawKeys();
}

function keyPressed() {
  // White Keys---------------------------------------------------------------------------------
  if (key == 'q') {
    press(130);
  }

  if (key == 'w') {
    press(146);
  }

  if (key == 'e') {
    press(164);
  }

  if (key == 'r') {
    press(174);
  }

  if (key == 't') {
    press(196);
  }

  if (key == 'y') {
    press(220);
  }

  if (key == 'u') {
    press(246);
  }

  if (key == 'i') {
    press(261);
  }

  if (key == 'o') {
    press(293);
  }

  if (key == 'p') {
    press(329);
  }

  if (key == 'z') {
    press(349);
  }

  if (key == 'x') {
    press(391);
  }

  if (key == 'c') {
    press(440);
  }

  if (key == 'v') {
    press(493);
  }

  if (key == 'b') {
    press(523);
  }

  if (key == 'n') {
    press(587);
  }

  if (key == 'm') {
    press(659);
  }

  if (key == ',') {
    press(698);
  }

  if (key == '.') {
    press(783);
  }

  if (key == '/') {
    press(880);
  }

  // Black Keys---------------------------------------------------------------------------------
  if (key == '2') {
    press(138);
  }

  if (key == '3') {
    press(155);
  }

  if (key == '5') {
    press(185);
  }

  if (key == '6') {
    press(207);
  }

  if (key == '7') {
    press(233);
  }

  if (key == '9') {
    press(277);
  }

  if (key == '0') {
    press(311);
  }

  if (key == 's') {
    press(369.99);
  }

  if (key == 'd') {
    press(415);
  }

  if (key == 'f') {
    press(466);
  }

  if (key == 'h') {
    press(554);
  }

  if (key == 'j') {
    press(622);
  }

  if (key == 'l') {
    press(739.99);
  }

  if (key == ';') {
    press(830);
  }

  if (key == '\'') {
    press(932);
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
  fill(0);
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
  for (let i = 9.5; i < 9.5 + (14 * 3); i += 14) {
    rect(30 * i, 0, w / 2, height / 2 + 25);
  }

  // A#-----------------------------------------------------------------------------------------
  for (let i = 11.5; i < 11.5 + (14 * 3); i += 14) {
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

function press(frequency) {
  notew.freq(frequency);
  notew.start();
  note.play();
}

function sineType() {
  type = "sine";
}

function triangleType() {
  type = "triangle";
}

function sawtoothType() {
  type = "sawtooth";
}

function squareType() {
  type = "square";
}
