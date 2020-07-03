/*
Made By Ethan Knotts
Please Don't Steal My Code
*/

// Global Variables-----------------------------------------------------------------------------
const len = 21;
let type = "sine";

let notew;
let note;

let qw;
let q;
let ww;
let w;
let ew;
let e;
let rw;
let r;
let tw;
let t;
let yw;
let y;
let uw;
let u;
let iw;
let i;
let ow;
let o;
let pw;
let p;
let zw;
let z;
let xw;
let x;
let cw;
let c;
let vw;
let v;
let bw;
let b;
let nw;
let n;
let mw;
let m;
let commaw;
let comma;
let periodw;
let period;
let slashw;
let slash;

let twow;
let two;
let threew;
let three;
let fivew;
let five;
let sixw;
let six;
let sevenw;
let seven;
let ninew;
let nine;
let zerow;
let zero;
let sw;
let s;
let dw;
let d;
let fw;
let f;
let hw;
let h;
let jw;
let j;
let lw;
let l;
let semicolinw;
let semicolin;
let quotew;
let quote;

let vol = 0;
let keySustain;

function setup() {
  const cnv = createCanvas(len * 60, 300);
  cnv.position(displayWidth / 2 - width / 2, 175);
}

function draw() {
  background(220);

  
  drawKeys();
  
  key = undefined;
}

function keyPressed() {
  // White Keys---------------------------------------------------------------------------------
  if (key == 'q') {
    q = new p5.Envelope();
    q.setADSR(0, keySustain, 0.2, 0);
    q.setRange(vol, 0);
    q.play();

    qw = new p5.Oscillator();
    qw.setType(type);
    qw.start();
    qw.freq(130);
    qw.amp(q);

    q.play();
  }

  if (key == 'w') {
    w = new p5.Envelope();
    w.setADSR(0, keySustain, 0.2, 0);
    w.setRange(vol, 0);
    w.play();

    ww = new p5.Oscillator();
    ww.setType(type);
    ww.start();
    ww.freq(146);
    ww.amp(w);

    w.play();
  }

  if (key == 'e') {
    e = new p5.Envelope();
    e.setADSR(0, keySustain, 0.2, 0);
    e.setRange(vol, 0);
    e.play();

    ew = new p5.Oscillator();
    ew.setType(type);
    ew.start();
    ew.freq(164);
    ew.amp(e);

    e.play();
  }

  if (key == 'r') {
    r = new p5.Envelope();
    r.setADSR(0, keySustain, 0.2, 0);
    r.setRange(vol, 0);
    r.play();

    rw = new p5.Oscillator();
    rw.setType(type);
    rw.start();
    rw.freq(174);
    rw.amp(r);

    r.play();
  }

  if (key == 't') {
    t = new p5.Envelope();
    t.setADSR(0, keySustain, 0.2, 0);
    t.setRange(vol, 0);
    t.play();

    tw = new p5.Oscillator();
    tw.setType(type);
    tw.start();
    tw.freq(196);
    tw.amp(t);

    t.play();
  }

  if (key == 'y') {
    y = new p5.Envelope();
    y.setADSR(0, keySustain, 0.2, 0);
    y.setRange(vol, 0);
    y.play();

    yw = new p5.Oscillator();
    yw.setType(type);
    yw.start();
    yw.freq(220);
    yw.amp(y);

    y.play();
  }

  if (key == 'u') {
    u = new p5.Envelope();
    u.setADSR(0, keySustain, 0.2, 0);
    u.setRange(vol, 0);
    u.play();

    uw = new p5.Oscillator();
    uw.setType(type);
    uw.start();
    uw.freq(246);
    uw.amp(u);

    u.play();
  }

  if (key == 'i') {
    i = new p5.Envelope();
    i.setADSR(0, keySustain, 0.2, 0);
    i.setRange(vol, 0);
    i.play();

    iw = new p5.Oscillator();
    iw.setType(type);
    iw.start();
    iw.freq(261);
    iw.amp(i);

    i.play();
  }

  if (key == 'o') {
    o = new p5.Envelope();
    o.setADSR(0, keySustain, 0.2, 0);
    o.setRange(vol, 0);
    o.play();

    ow = new p5.Oscillator();
    ow.setType(type);
    ow.start();
    ow.freq(293);
    ow.amp(o);

    o.play();
  }

  if (key == 'p') {
    p = new p5.Envelope();
    p.setADSR(0, keySustain, 0.2, 0);
    p.setRange(vol, 0);
    p.play();

    pw = new p5.Oscillator();
    pw.setType(type);
    pw.start();
    pw.freq(329);
    pw.amp(p);

    p.play();
  }

  if (key == 'z') {
    z = new p5.Envelope();
    z.setADSR(0, keySustain, 0.2, 0);
    z.setRange(vol, 0);
    z.play();

    zw = new p5.Oscillator();
    zw.setType(type);
    zw.start();
    zw.freq(349);
    zw.amp(z);

    z.play();
  }

  if (key == 'x') {
    x = new p5.Envelope();
    x.setADSR(0, keySustain, 0.2, 0);
    x.setRange(vol, 0);
    x.play();

    xw = new p5.Oscillator();
    xw.setType(type);
    xw.start();
    xw.freq(391);
    xw.amp(x);

    x.play();
  }

  if (key == 'c') {
    c = new p5.Envelope();
    c.setADSR(0, keySustain, 0.2, 0);
    c.setRange(vol, 0);
    c.play();

    cw = new p5.Oscillator();
    cw.setType(type);
    cw.start();
    cw.freq(440);
    cw.amp(c);

    c.play();
  }

  if (key == 'v') {
    v = new p5.Envelope();
    v.setADSR(0, keySustain, 0.2, 0);
    v.setRange(vol, 0);
    v.play();

    vw = new p5.Oscillator();
    vw.setType(type);
    vw.start();
    vw.freq(493);
    vw.amp(v);

    v.play();
  }

  if (key == 'b') {
    b = new p5.Envelope();
    b.setADSR(0, keySustain, 0.2, 0);
    b.setRange(vol, 0);
    b.play();

    bw = new p5.Oscillator();
    bw.setType(type);
    bw.start();
    bw.freq(523);
    bw.amp(b);

    b.play();
  }

  if (key == 'n') {
    n = new p5.Envelope();
    n.setADSR(0, keySustain, 0.2, 0);
    n.setRange(vol, 0);
    n.play();

    nw = new p5.Oscillator();
    nw.setType(type);
    nw.start();
    nw.freq(587);
    nw.amp(n);

    n.play();
  }

  if (key == 'm') {
    m = new p5.Envelope();
    m.setADSR(0, keySustain, 0.2, 0);
    m.setRange(vol, 0);
    m.play();

    mw = new p5.Oscillator();
    mw.setType(type);
    mw.start();
    mw.freq(659);
    mw.amp(m);

    m.play();
  }

  if (key == ',') {
    comma = new p5.Envelope();
    comma.setADSR(0, keySustain, 0.2, 0);
    comma.setRange(vol, 0);
    comma.play();

    commaw = new p5.Oscillator();
    commaw.setType(type);
    commaw.start();
    commaw.freq(698);
    commaw.amp(comma);

    comma.play();
  }

  if (key == '.') {
    period = new p5.Envelope();
    period.setADSR(0, keySustain, 0.2, 0);
    period.setRange(vol, 0);
    period.play();

    periodw = new p5.Oscillator();
    periodw.setType(type);
    periodw.start();
    periodw.freq(783);
    periodw.amp(period);

    period.play();
  }

  if (key == '/') {
    slash = new p5.Envelope();
    slash.setADSR(0, keySustain, 0.2, 0);
    slash.setRange(vol, 0);
    slash.play();

    slashw = new p5.Oscillator();
    slashw.setType(type);
    slashw.start();
    slashw.freq(880);
    slashw.amp(slash);

    slash.play();
  }

  if (key == '2') {
    two = new p5.Envelope();
    two.setADSR(0, keySustain, 0.2, 0);
    two.setRange(vol, 0);
    two.play();

    twow = new p5.Oscillator();
    twow.setType(type);
    twow.start();
    twow.freq(138);
    twow.amp(two);

    two.play();
  }

  if (key == '3') {
    three = new p5.Envelope();
    three.setADSR(0, keySustain, 0.2, 0);
    three.setRange(vol, 0);
    three.play();

    threew = new p5.Oscillator();
    threew.setType(type);
    threew.start();
    threew.freq(155);
    threew.amp(three);

    three.play();
  }

  if (key == '5') {
    five = new p5.Envelope();
    five.setADSR(0, keySustain, 0.2, 0);
    five.setRange(vol, 0);
    five.play();

    fivew = new p5.Oscillator();
    fivew.setType(type);
    fivew.start();
    fivew.freq(185);
    fivew.amp(five);

    five.play();
  }

  if (key == '6') {
    six = new p5.Envelope();
    six.setADSR(0, keySustain, 0.2, 0);
    six.setRange(vol, 0);
    six.play();

    sixw = new p5.Oscillator();
    sixw.setType(type);
    sixw.start();
    sixw.freq(207);
    sixw.amp(six);

    six.play();
  }

  if (key == '7') {
    seven = new p5.Envelope();
    seven.setADSR(0, keySustain, 0.2, 0);
    seven.setRange(vol, 0);
    seven.play();

    sevenw = new p5.Oscillator();
    sevenw.setType(type);
    sevenw.start();
    sevenw.freq(233);
    sevenw.amp(seven);

    seven.play();
  }

  if (key == '9') {
    nine = new p5.Envelope();
    nine.setADSR(0, keySustain, 0.2, 0);
    nine.setRange(vol, 0);
    nine.play();

    ninew = new p5.Oscillator();
    ninew.setType(type);
    ninew.start();
    ninew.freq(277);
    ninew.amp(nine);

    nine.play();
  }

  if (key == '0') {
    zero = new p5.Envelope();
    zero.setADSR(0, keySustain, 0.2, 0);
    zero.setRange(vol, 0);
    zero.play();

    zerow = new p5.Oscillator();
    zerow.setType(type);
    zerow.start();
    zerow.freq(311);
    zerow.amp(zero);

    zero.play();
  }

  if (key == 's') {
    s = new p5.Envelope();
    s.setADSR(0, keySustain, 0.2, 0);
    s.setRange(vol, 0);
    s.play();

    sw = new p5.Oscillator();
    sw.setType(type);
    sw.start();
    sw.freq(369.99);
    sw.amp(s);

    s.play();
  }

  if (key == 'd') {
    d = new p5.Envelope();
    d.setADSR(0, keySustain, 0.2, 0);
    d.setRange(vol, 0);
    d.play();

    dw = new p5.Oscillator();
    dw.setType(type);
    dw.start();
    dw.freq(415);
    dw.amp(d);

    d.play();
  }

  if (key == 'f') {
    f = new p5.Envelope();
    f.setADSR(0, keySustain, 0.2, 0);
    f.setRange(vol, 0);
    f.play();

    fw = new p5.Oscillator();
    fw.setType(type);
    fw.start();
    fw.freq(466);
    fw.amp(f);

    f.play();
  }

  if (key == 'h') {
    h = new p5.Envelope();
    h.setADSR(0, keySustain, 0.2, 0);
    h.setRange(vol, 0);
    h.play();

    hw = new p5.Oscillator();
    hw.setType(type);
    hw.start();
    hw.freq(554);
    hw.amp(h);

    h.play();
  }

  if (key == 'j') {
    j = new p5.Envelope();
    j.setADSR(0, keySustain, 0.2, 0);
    j.setRange(vol, 0);
    j.play();

    jw = new p5.Oscillator();
    jw.setType(type);
    jw.start();
    jw.freq(622);
    jw.amp(j);

    j.play();
  }

  if (key == 'l') {
    l = new p5.Envelope();
    l.setADSR(0, keySustain, 0.2, 0);
    l.setRange(vol, 0);
    l.play();

    lw = new p5.Oscillator();
    lw.setType(type);
    lw.start();
    lw.freq(739.99);
    lw.amp(l);

    l.play();
  }

  if (key == ';') {
    semicolin = new p5.Envelope();
    semicolin.setADSR(0, keySustain, 0.2, 0);
    semicolin.setRange(vol, 0);
    semicolin.play();

    semicolinw = new p5.Oscillator();
    semicolinw.setType(type);
    semicolinw.start();
    semicolinw.freq(830);
    semicolinw.amp(semicolin);

    semicolin.play();
  }

  if (key == '\'') {
    quote = new p5.Envelope();
    quote.setADSR(0, keySustain, 0.2, 0);
    quote.setRange(vol, 0);
    quote.play();

    quotew = new p5.Oscillator();
    quotew.setType(type);
    quotew.start();
    quotew.freq(932);
    quotew.amp(quote);

    quote.play();
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
