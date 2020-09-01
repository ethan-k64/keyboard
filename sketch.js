/*
Made By Ethan Knotts
Please Don't Steal My Code
*/

// Global Variables-----------------------------------------------------------------------------
const len = 21;
const keys = 36;
let type = "sine";
let root = 60;

let env = [];
let osc = [];

let vol = 0;
let keySustain;
let transposeVal;

function setup() {
  const cnv = createCanvas(len * 60, 300);
  cnv.style("margin", "175px auto 0px auto");
  
  for (let i = 0; i < keys; i++) {
    env.push(new p5.Envelope());
    env[i].setADSR(0, keySustain, 0.2, 0);
    env[i].setRange(vol, 0);
    osc.push(new p5.Oscillator());
    osc[i].setType(type);
    osc[i].amp(env[i]);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < keys; i++) {
    env[i].setADSR(0, keySustain, 0.2, 0);
    env[i].setRange(vol, 0);
    osc[i].setType(type);
    osc[i].amp(env[i]);
  }
  
  drawKeys();
  
  key = undefined;
}

function keyPressed() {
  if (key == 'q') {
    osc[0].start();
    osc[0].freq(midiToFreq(root - 12));
    env[0].play();
  } else if (key == 'w') {
    osc[1].start();
    osc[1].freq(midiToFreq(root - 10));
    env[1].play();
  } else if (key == 'e') {
    osc[2].start();
    osc[2].freq(midiToFreq(root - 8));
    env[2].play();
  } else if (key == 'r') {
    osc[3].start();
    osc[3].freq(midiToFreq(root - 7));
    env[3].play();
  } else if (key == 't') {
    osc[4].start();
    osc[4].freq(midiToFreq(root - 5));
    env[4].play();
  } else if (key == 'y') {
    osc[5].start();
    osc[5].freq(midiToFreq(root - 3));
    env[5].play();
  } else if (key == 'u') {
    osc[6].start();
    osc[6].freq(midiToFreq(root - 1));
    env[6].play();
  } else if (key == 'i') {
    osc[7].start();
    osc[7].freq(midiToFreq(root));
    env[7].play();
  } else if (key == 'o') {
    osc[8].start();
    osc[8].freq(midiToFreq(root + 2));
    env[8].play();
  } else if (key == 'p') {
    osc[9].start();
    osc[9].freq(midiToFreq(root + 4));
    env[9].play();
  } else if (key == 'z') {
    osc[10].start();
    osc[10].freq(midiToFreq(root + 5));
    env[10].play();
  } else if (key == 'x') {
    osc[11].start();
    osc[11].freq(midiToFreq(root + 7));
    env[11].play();
  } else if (key == 'c') {
    osc[12].start();
    osc[12].freq(midiToFreq(root + 9));
    env[12].play();
  } else if (key == 'v') {
    osc[13].start();
    osc[13].freq(midiToFreq(root + 11));
    env[13].play();
  } else if (key == 'b') {
    osc[14].start();
    osc[14].freq(midiToFreq(root + 12));
    env[14].play();
  } else if (key == 'n') {
    osc[15].start();
    osc[15].freq(midiToFreq(root + 14));
    env[15].play();
  } else if (key == 'm') {
    osc[16].start();
    osc[16].freq(midiToFreq(root + 16));
    env[16].play();
  } else if (key == ',') {
    osc[17].start();
    osc[17].freq(midiToFreq(root + 17));
    env[17].play();
  } else if (key == '.') {
    osc[18].start();
    osc[18].freq(midiToFreq(root + 19));
    env[18].play();
  } else if (key == '/') {
    osc[19].start();
    osc[19].freq(midiToFreq(root + 21));
    env[19].play();
  } else if (key == '2') {
    osc[20].start();
    osc[20].freq(midiToFreq(root - 11));
    env[20].play();
  } else if (key == '3') {
    osc[21].start();
    osc[21].freq(midiToFreq(root - 9));
    env[21].play();
  } else if (key == '5') {
    osc[22].start();
    osc[22].freq(midiToFreq(root - 6));
    env[22].play();
  } else if (key == '6') {
    osc[23].start();
    osc[23].freq(midiToFreq(root - 4));
    env[23].play();
  } else if (key == '7') {
    osc[24].start();
    osc[24].freq(midiToFreq(root - 2));
    env[24].play();
  } else if (key == '9') {
    osc[25].start();
    osc[25].freq(midiToFreq(root + 1));
    env[25].play();
  } else if (key == '0') {
    osc[26].start();
    osc[26].freq(midiToFreq(root + 3));
    env[26].play();
  } else if (key == 's') {
    osc[27].start();
    osc[27].freq(midiToFreq(root + 6));
    env[27].play();
  } else if (key == 'd') {
    osc[28].start();
    osc[28].freq(midiToFreq(root + 8));
    env[28].play();
  } else if (key == 'f') {
    osc[29].start();
    osc[29].freq(midiToFreq(root + 10));
    env[29].play();
  } else if (key == 'h') {
    osc[30].start();
    osc[30].freq(midiToFreq(root + 13));
    env[30].play();
  } else if (key == 'j') {
    osc[31].start();
    osc[31].freq(midiToFreq(root + 15));
    env[31].play();
  } else if (key == 'l') {
    osc[32].start();
    osc[32].freq(midiToFreq(root + 18));
    env[32].play();
  } else if (key == ';') {
    osc[33].start();
    osc[33].freq(midiToFreq(root + 20));
    env[33].play();
  } else if (key == '\'') {
    osc[34].start();
    osc[34].freq(midiToFreq(root + 22));
    env[34].play();
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

function inputEvent() {
  root = 60 + Number(this.value());
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
