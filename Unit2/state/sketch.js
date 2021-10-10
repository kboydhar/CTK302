let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("orange");
      text("state 0", 100, 100);
      break;

    case 1:
      background("yellow");
      text("state 1", 100, 100);
      break;

    case 2:
      background("blue");
      text("state 2", 100, 100);
      break;

    case 3:
      background("purple");
      text("state 3", 100, 100);
      break;

    case 4:
      background("pink");
      text("state 4", 100, 100);
      break;
  }

  timer++;
  if (timer >= 4 * 60) {
    timer = 0;
    state++;
    if (state > 4) state = 0;
  }


}

function mouseReleased() {
  state = state + 1;
  if (state > 4) {
    state = 0;
  }
}
