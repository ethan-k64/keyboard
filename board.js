// Declare New Sketch
let board = function(p) {
  let slider;

  let sineButton;
  let triangleButton;
  let sawtoothButton;
  let squareButton;

  p.setup = function() {
    const cnv = p.createCanvas(len * 60, 175);
    cnv.position(displayWidth / 2 - width / 2, 0);

    sineButton = p.createButton("Sine");
    sineButton.position(1000, 75);
    sineButton.mousePressed(sineType);

    triangleButton = p.createButton("Triangle");
    triangleButton.position(1100, 75);
    triangleButton.mousePressed(triangleType);

    sawtoothButton = p.createButton("Sawtooth");
    sawtoothButton.position(1200, 75);
    sawtoothButton.mousePressed(sawtoothType);

    squareButton = p.createButton("Square");
    squareButton.position(1300, 75);
    squareButton.mousePressed(squareType);

    p.background(51);

    drawBoard();
  }

  p.draw = function() {
    vol = slider.value();

    if (type == "sine") {
      sineButton.style("background-color", "#528BFF");
      triangleButton.style("background-color", "#FFF");
      sawtoothButton.style("background-color", "#FFF");
      squareButton.style("background-color", "#FFF");
    } else if (type == "triangle") {
      sineButton.style("background-color", "#FFF");
      triangleButton.style("background-color", "#528BFF");
      sawtoothButton.style("background-color", "#FFF");
      squareButton.style("background-color", "#FFF");
    } else if (type == "sawtooth") {
      sineButton.style("background-color", "#FFF");
      triangleButton.style("background-color", "#FFF");
      sawtoothButton.style("background-color", "#528BFF");
      squareButton.style("background-color", "#FFF");
    } else if (type == "square") {
      sineButton.style("background-color", "#FFF");
      triangleButton.style("background-color", "#FFF");
      sawtoothButton.style("background-color", "#FFF");
      squareButton.style("background-color", "#528BFF");
    }
  }

  function drawBoard() {
    p.push();
    p.fill(255);
    p.textSize(20);
    p.translate(205, 25);
    p.text("Volume", 0, 0);
    p.text("Voice Select", 600, 0);
    p.pop();

    p.push();
    p.strokeWeight(4);
    p.stroke(255);
    p.line(650, 50, 1050, 50);
    p.pop();

    slider = p.createSlider(0.01, 1, 0.5, 0.01);
    slider.position(500, 40);
  }
}

// Create Sketch
let myp5 = new p5(board);
