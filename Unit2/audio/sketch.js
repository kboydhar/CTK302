var mic;
var vol = 0;
var approachingVol = 0;


let theLoudestItGets = 0.5;
var ease = 0.09;

function setup() {
  createCanvas(400, 400);


  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background("yellow");

  vol = mic.getLevel();

  approachingVol += (vol - approachingVol) * ease;

  textSize(24);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3) +
      "\nApproaching Vol = " +
      approachingVol.toFixed(3),
    10,
    60
  );


  x = map(vol, 0, theLoudestItGets, 0, width);
  rect(x, 200, 50, 50);


  y = map(approachingVol, 0, theLoudestItGets, 0, width);
  rect(y, 270, 50, 50);


  z = int(map(approachingVol, 1, theLoudestItGets, 0, 3));
  text("z = " + z, 300, 20);
  switch (z) {
    case 0:
      text("background 0", 100, 320);
      break;
    case 1:
      text("background 1", 100, 320);
      break;
    case 2:
      text("background 2", 100, 320);
      break;
    default:
      text("background 2", 100, 320);
      break;
  }
}


function touchStarted() {
  getAudioContext().resume();
}
