let fg, bg;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  fg = loadImage("images/assets1/fg.png");
  bg = loadImage("images/assets1/bg.png");
  imageMode(CENTER) ;
}

function draw() {
  image(fg, width/2, height/2, 500, 500);
  image(bg, width/2, height/2-0, 500, 500);
}
  switch (state) {
    case 0:
      text("state 0", 100, 100);
      break;

    case 1:
      background("yellow");
      text("state 1", 100, 100);
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
