function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(2);
  fill("black");
  rect(300, 100, 850, 450);
  fill("white");
  ellipse(200, 150, 300, 300);
  fill("grey");
  arc(380, 700, 800, 600, PI, TWO_PI);
  fill("blue");
  rect(500, 400, 145, 200);
  fill("white");
  triangle(500, 200, 578, 300, 435, 300);
  rect(500, 430, 75, 130);
}
