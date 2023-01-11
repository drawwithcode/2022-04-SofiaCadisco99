let symmetry = 50; //the screen is divided in 6 parts
// let angle = 120 / symmetry; //every time rotate by 60 degrees

let colors = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#e377c2",
  "#bcbd22",
  "#17becf",
];

let x = 180;
let y = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  for (let i = 0; i < touches.length; i++) {
    const touch = touches[i];
    const color = colors[touch.id % colors.length];

    push();
    fill(color);
    noStroke();
    circle(x, y, 210);
    pop();
  }

  push();
  let angle = 360 / symmetry;
  for (let i = 0; i < touches.length; i++) {
    const touch = touches[i];
    const color = colors[touch.id % colors.length];
    for (let j = 0; j < symmetry; j++) {
      rotate(angle);
      push();
      fill(color);
      noStroke();
      ellipse(touch.x, touch.y, 10);
      pop();

      push();
      scale(1, -1); //draw in the opposite direction
      push();
      noStroke();
      fill(color);
      circle(touch.x, touch.y, 5);
      pop();
      pop();
    }
  }

  pop();

  //writing 'Shake and Rotate'
  let myText =
    "What do you see now? \n Globes of red, yelloe, purple \n Just a moment! And now?";
  fill(color("white"));
  textFont("Helvetica");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(15);
  text(myText, 180, 290);
}

// called at the beginning of a touch event
// here I'm using it to track beginning and end of touches
function touchStarted() {
  touchStarted = true;
  touchEnded = false;
  return false;
}

// called whenever a touch is moving (like mouseMoved())
function touchMoved() {
  return false;
}

// ask for permissions on iOS
function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}
