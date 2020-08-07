// Declare New Sketch
let board = function(p) {
  let slider;
  let sslider;

  let sineButton;
  let triangleButton;
  let sawtoothButton;
  let squareButton;

  p.setup = function() {
    const cnv = p.createCanvas(len * 60, 175);
    cnv.position(displayWidth / 2 - width / 2, 0);

    sineButton = p.createButton("Sine");
    sineButton.position(850 / 1.25 + (displayWidth - width) / 2, 75);
    sineButton.mousePressed(sineType);

    triangleButton = p.createButton("Triangle");
    triangleButton.position(960 / 1.25 + (displayWidth - width) / 2, 75);
    triangleButton.mousePressed(triangleType);

    sawtoothButton = p.createButton("Sawtooth");
    sawtoothButton.position(1075 / 1.25 + (displayWidth - width) / 2, 75);
    sawtoothButton.mousePressed(sawtoothType);

    squareButton = p.createButton("Square");
    squareButton.position(1200 / 1.25 + (displayWidth - width) / 2, 75);
    squareButton.mousePressed(squareType);

    p.background(51);

    drawBoard();
  }

  p.draw = function() {
    vol = slider.value();
    keySustain = sslider.value();

    if (type == "sine") {
      sineButton.style("background-color", "#528BFF");
      sineButton.style("border-color", "#3632a8");
      triangleButton.style("background-color", "#FFF");
      triangleButton.style("border-color", "#FFF");
      sawtoothButton.style("background-color", "#FFF");
      sawtoothButton.style("border-color", "#FFF");
      squareButton.style("background-color", "#FFF");
      squareButton.style("border-color", "#FFF");
    } else if (type == "triangle") {
      sineButton.style("background-color", "#FFF");
      sineButton.style("border-color", "#FFF");
      triangleButton.style("background-color", "#528BFF");
      triangleButton.style("border-color", "#3632a8");
      sawtoothButton.style("background-color", "#FFF");
      sawtoothButton.style("border-color", "#FFF");
      squareButton.style("background-color", "#FFF");
      squareButton.style("border-color", "#FFF");
    } else if (type == "sawtooth") {
      sineButton.style("background-color", "#FFF");
      sineButton.style("border-color", "#FFF");
      triangleButton.style("background-color", "#FFF");
      triangleButton.style("border-color", "#FFF");
      sawtoothButton.style("background-color", "#528BFF");
      sawtoothButton.style("border-color", "#3632a8");
      squareButton.style("background-color", "#FFF");
      squareButton.style("border-color", "#FFF");
    } else if (type == "square") {
      sineButton.style("background-color", "#FFF");
      sineButton.style("border-color", "#FFF");
      triangleButton.style("background-color", "#FFF");
      triangleButton.style("border-color", "#FFF");
      sawtoothButton.style("background-color", "#FFF");
      sawtoothButton.style("border-color", "#FFF");
      squareButton.style("background-color", "#528BFF");
      squareButton.style("border-color", "#3632a8");
    }
  }

  function drawBoard() {
    p.push();
    p.fill(255);
    p.textSize(20);
    p.translate(205, 25);
    p.text("Volume", 0, 0);
    p.text("Voice Select", 585, 0);
    p.text("Sustain", 225, 0);
    p.pop();

    p.push();
    p.strokeWeight(4);
    p.stroke(255);
    p.line(650, 50, 1050, 50);
    p.pop();

    slider = p.createSlider(0.01, 1, 0.5, 0.01);
    slider.position(215 / 1.25 + (displayWidth - width) / 2, 40);
    
    sslider = p.createSlider(0.15, 2, 0.3, 0.01);
    sslider.position(495 / 1.25 + (displayWidth - width) / 2, 40);
  }
}

// Create Sketch
let myp5 = new p5(board);
