// Reed Cavi's Rain Man
let X = 0;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background('yellow');

  push() ;
  translate(X, 0) ;
  avatar(100, 100) ;
  pop() ;

  X+=3 ;
  if (X > width){
    X = -100;
  }
}

function avatar() {
  background(220);
  fill(0);
  textSize(24)
  ellipse(355, 144, 200, 200);
  rect(355, 279, 40, 73);
  rect(355, 370, 200, 200);
  rect(290, 475, 40, 150);
  rect(410, 475, 40, 150);
  rect(410, 555, 75, 15);
  rect(286, 555, 75, 15);
  rect(255, 330, 200, 20);

  fill("red")
  ellipse(160, 375, 50, 50);
  fill("black")
  rect(160, 560, 50, 350);

}
