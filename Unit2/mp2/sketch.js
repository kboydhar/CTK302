let state = 0;
let timer = 0 ;

function setup() {
  createCanvas(500, 500);
  foreground = loadImage("assets/foreground.png");
  background = loadImage("assets/background.png");
  imageMode(CENTER) ;
}

function setup() {
  createCanvas(400, 400);
  noStroke() ;
}

function draw() {
  background('blue');
  image(foreground, width/2, height/2, 100, 100);
  image(background, width/2, height/2-120, 100, 100);
  background(220);

  switch (state) {
    case 0:
      background("red");

      fill(255, 80);
      for (let j = 0; j <= height; j += 20) {
        for (let i = 0; i <= width; i += 20) {
          push() ;
          translate(i, j) ;
          rect(0, 0, 10, 10);
          pop() ;
        }
      }

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

  timer++ ;
  if (timer >= 4*60) {
    timer = 0 ;
    state++ ;
    if (state > 4) state = 0 ;
  }


}

function mouseReleased() {
  state = state + 1;
  if (state > 4) {
    state = 0;
  }
}
