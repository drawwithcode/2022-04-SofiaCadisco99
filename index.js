const urlString = window.location.href;

let url = new URL(urlString);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(15);
  fill("white");
  textFont("Helvetica");
  textStyle(ITALIC);
  textAlign(CENTER);
  text(
    "-Light, just light\n making everything\n below it a toy world -",
    windowWidth / 2,
    235
  );

  let enter = createButton("COME AND SEE");
  enter.size(320, 50);
  enter.position(windowWidth / 2 - 160, 300);
  enter.mousePressed(changePage);

  enter.style("background-color", "#e377c2");
  enter.style("color", "#ffffff");
  enter.style("font-size", "30px");
  enter.style("text-align", "center");
  enter.style("font-weight", "bold");
  enter.style("border", "none");
  enter.style("border-radius", "4px");
}

function draw() {}

function changePage() {
  window.open(url + "home.html", "_self");
}

function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}
