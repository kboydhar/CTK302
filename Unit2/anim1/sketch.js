let X = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('yellow');

  push() ;
  translate(X, 0) ;
  text("now you see me, now you don't", 100, 100) ;
  pop() ;

  X+=3 ;
  if (X > width){
    X = -100;
  }
}
