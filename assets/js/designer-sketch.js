let canvas;

const getDataUrl = () => {
  let link = document.createElement('a');
  link.download = 'design.png';
  link.href = canvas.elt.toDataURL('image/jpeg');
  link.click();
}

const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

const MAX_WIDTH = 1200;
const MAX_HEIGHT = 800;

const settings = {
  MAX_HEIGHT,
  MAX_WIDTH,
  SHOW_BORDER: false,
  BACKGROUND_COLOR: "#ffffff",
  SHOW_BACKGROUND_PATTERN: true,
  BACKGROUND_PATTERN_STEP: 50,
  BACKGROUND_PATTERN_COLOR: "#edf5e1",
  RECT_WIDTH : 1200,
  RECT_HEIGHT : 10,
  RECT_COLOR: "#ffa500",
  TEXT_1: today.toLocaleDateString(undefined, options),
  TEXT_1_FONT: "Sacramento",
  TEXT_1_COLOR: "#bb0000",
  TEXT_1_SIZE: 80,
  TEXT_1_X: 0,
  TEXT_1_Y: 250,
  IF_TEXT_1: true,
  TEXT_2: "This is gonna be the",
  TEXT_2_FONT: "Raleway",
  TEXT_2_COLOR: "#000000",
  TEXT_2_SIZE: 120,
  TEXT_2_X: 0,
  TEXT_2_Y: 450,
  IF_TEXT_2: true,
  TEXT_3: "best day of my life",
  TEXT_3_FONT: "Raleway",
  TEXT_3_COLOR: "#000000",
  TEXT_3_SIZE: 120,
  TEXT_3_X: 0,
  TEXT_3_Y: 600,
  IF_TEXT_3: true,
  TEXT_4: "best day of my life",
  TEXT_4_FONT: "Raleway",
  TEXT_4_COLOR: "#000000",
  TEXT_4_SIZE: 50,
  TEXT_4_X: 0,
  TEXT_4_Y: 450,
  IF_TEXT_4: false,
}

function setup() {
  canvas = createCanvas(MAX_WIDTH, MAX_HEIGHT);
  noLoop();
}

function draw() {
  
  background(settings.BACKGROUND_COLOR);

  const {
    MAX_HEIGHT,
    MAX_WIDTH,
    SHOW_BORDER,
    BACKGROUND_COLOR,
    SHOW_BACKGROUND_PATTERN,
    BACKGROUND_PATTERN_COLOR,
    BACKGROUND_PATTERN_STEP,
    RECT_WIDTH,
    RECT_HEIGHT,
    RECT_COLOR,
    TEXT_1,
    TEXT_1_FONT,
    TEXT_1_COLOR,
    TEXT_1_SIZE,
    TEXT_1_X,
    TEXT_1_Y,
    IF_TEXT_1,
    TEXT_2,
    TEXT_2_FONT,
    TEXT_2_COLOR,
    TEXT_2_SIZE,
    TEXT_2_X,
    TEXT_2_Y,
    IF_TEXT_2,
    TEXT_3,
    TEXT_3_FONT,
    TEXT_3_COLOR,
    TEXT_3_SIZE,
    TEXT_3_X,
    TEXT_3_Y,
    IF_TEXT_3,
    TEXT_4,
    TEXT_4_FONT,
    TEXT_4_COLOR,
    TEXT_4_SIZE,
    TEXT_4_X,
    TEXT_4_Y,
    IF_TEXT_4,
  } = settings;

  if(SHOW_BORDER){
    fill(BACKGROUND_COLOR);
    stroke("black");
    rect(0,0,MAX_WIDTH, MAX_HEIGHT);
  }

  if(SHOW_BACKGROUND_PATTERN){
    tiledLines(MAX_WIDTH, MAX_HEIGHT, BACKGROUND_PATTERN_COLOR, BACKGROUND_PATTERN_STEP);
  }

  // Bars
  const leftOfRectX = (MAX_WIDTH-RECT_WIDTH)/2;
  fill(RECT_COLOR);
  noStroke();
  rect(leftOfRectX,0,RECT_WIDTH, RECT_HEIGHT);
  rect(leftOfRectX,MAX_HEIGHT-RECT_HEIGHT,RECT_WIDTH, RECT_HEIGHT);

  // Text

  textStyle(NORMAL);
  if(IF_TEXT_1){
    textFont(TEXT_1_FONT);
    textSize(TEXT_1_SIZE);
    const text1width = textWidth(TEXT_1);
    fill(TEXT_1_COLOR);
    text(TEXT_1, TEXT_1_X || (MAX_WIDTH-text1width)/2, TEXT_1_Y);
  }

  textStyle(BOLD);
  if(IF_TEXT_2){
    textFont(TEXT_2_FONT);
    textSize(TEXT_2_SIZE);
    const text2width = textWidth(TEXT_2);
    fill(TEXT_2_COLOR);
    text(TEXT_2, TEXT_2_X || (MAX_WIDTH-text2width)/2, TEXT_2_Y);
  }

  if(IF_TEXT_3){
    textFont(TEXT_3_FONT);
    textSize(TEXT_3_SIZE);
    const text3width = textWidth(TEXT_3);
    fill(TEXT_3_COLOR);
    text(TEXT_3, TEXT_3_X || (MAX_WIDTH-text3width)/2, TEXT_3_Y);
  }

  if(IF_TEXT_4){
    textFont(TEXT_4_FONT);
    textSize(TEXT_4_SIZE);
    const text4width = textWidth(TEXT_4);
    fill(TEXT_4_COLOR);
    text(TEXT_4, TEXT_4_X || (MAX_WIDTH-text4width)/2, TEXT_4_Y);
  }
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

// Background designs
const tiledLines = (sizeX, sizeY, color, step)=>{
  stroke(color);
  strokeWeight(2);

  function gen(x,y,width,height){
    var leftToRight = Math.random() >= 0.5;
  
    if(leftToRight) {
      line(x,y,x+width,y+height);
    } else {
      line(x+width,y,x,y+height);
    }
  }
  
  for(var x = 0; x < sizeX; x += step) {
    for(var y = 0; y < sizeY; y+= step) {
      gen(x, y, step, step);   
    }
  }
}

// Initialise dat.gui

let gui = new dat.GUI();
gui.useLocalStorage = true;


gui.add(settings, "MAX_WIDTH").min(1).max(1200).step(1);
gui.add(settings, "MAX_HEIGHT").min(1).max(1200).step(1);
gui.add(settings, "SHOW_BORDER");

let bg_gui = gui.addFolder("Background");
bg_gui.addColor(settings, "BACKGROUND_COLOR");
bg_gui.addColor(settings, "BACKGROUND_PATTERN_COLOR");
bg_gui.add(settings, "BACKGROUND_PATTERN_STEP");
bg_gui.add(settings, "SHOW_BACKGROUND_PATTERN");

let bars_gui = gui.addFolder("Bars");
bars_gui.add(settings, "RECT_WIDTH").min(1).max(1200).step(1);
bars_gui.add(settings, "RECT_HEIGHT").min(1).max(1200).step(1);
bars_gui.addColor(settings, "RECT_COLOR");

// Text section

let text_gui = gui.addFolder("Text");
let text_gui_1 = text_gui.addFolder("Text 1");
text_gui_1.add(settings, "IF_TEXT_1");
text_gui_1.add(settings, "TEXT_1");
text_gui_1.add(settings, "TEXT_1_FONT");
text_gui_1.addColor(settings, "TEXT_1_COLOR");
text_gui_1.add(settings, "TEXT_1_SIZE").min(1).max(200).step(1);
text_gui_1.add(settings, "TEXT_1_X").min(0).max(1200).step(1);
text_gui_1.add(settings, "TEXT_1_Y").min(1).max(1200).step(1);

let text_gui_2 = text_gui.addFolder("Text 2");
text_gui_2.add(settings, "IF_TEXT_2");
text_gui_2.add(settings, "TEXT_2");
text_gui_2.add(settings, "TEXT_2_FONT");
text_gui_2.addColor(settings, "TEXT_2_COLOR");
text_gui_2.add(settings, "TEXT_2_SIZE").min(1).max(200).step(1);
text_gui_2.add(settings, "TEXT_2_X").min(0).max(1200).step(1);
text_gui_2.add(settings, "TEXT_2_Y").min(1).max(1200).step(1);

let text_gui_3 = text_gui.addFolder("Text 3");
text_gui_3.add(settings, "IF_TEXT_3");
text_gui_3.add(settings, "TEXT_3");
text_gui_3.add(settings, "TEXT_3_FONT");
text_gui_3.addColor(settings, "TEXT_3_COLOR");
text_gui_3.add(settings, "TEXT_3_SIZE").min(1).max(200).step(1);
text_gui_3.add(settings, "TEXT_3_X").min(0).max(1200).step(1);
text_gui_3.add(settings, "TEXT_3_Y").min(1).max(1200).step(1);

let text_gui_4 = text_gui.addFolder("Text 4");
text_gui_4.add(settings, "IF_TEXT_4");
text_gui_4.add(settings, "TEXT_4");
text_gui_4.add(settings, "TEXT_4_FONT");
text_gui_4.addColor(settings, "TEXT_4_COLOR");
text_gui_4.add(settings, "TEXT_4_SIZE").min(1).max(200).step(1);
text_gui_4.add(settings, "TEXT_4_X").min(0).max(1200).step(1);
text_gui_4.add(settings, "TEXT_4_Y").min(1).max(1200).step(1);