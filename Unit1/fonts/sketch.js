var f1;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/monster.ttf");

  textAlign(CENTER);
}

function draw() {
  background("yellow");
  textFont(f1);
  textSize(54);
  text("hello world", width/2, 100);
}
  textFont(f2);
  textSize(24);
  text("go you redbirds!", width/2, 160);
