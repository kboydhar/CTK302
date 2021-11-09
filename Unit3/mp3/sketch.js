let cars = [];
let frogPos;
let maxCars = 3;
let timer = 0;
let state = 0;
let bg;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  falcon = loadImage("images/falcon.png");
  trooper = loadImage("images/trooper.png");
  youlose = loadImage("images/youlose.png");
  youwin = loadImage("images/youwon.jpeg");
  start = loadImage("images/start.png");
  imageMode(CENTER);
  bg = loadImage('images/stars.jpeg');
  frogPos = createVector(width / 2, height - 80);


// Spawn many objects
for (let i = 0; i < maxCars; i++) {
  cars.push(new Car());
}
}


function draw() {
  switch (state) {
    case 0: // welcome
      image(start, width / 2, height / 2, 1500, 850);
      break;

    case 1: // game state
      game();
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win state
      image(youwon, width / 2, height / 2, 1500, 850);
      break;

    case 3: // lose state
      image(youlose, width / 2, height / 2, 1500, 850);
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // they won
      resetTheGame();
      state = 0;
      break;

    case 3:
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  image(bg, width / 2, height / 2, 1500, 850);
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 1;
  }
  // frog
  image(falcon, frogPos.x, frogPos.y);
  checkForKeys();

  function resetTheGame() {
    timer = 0;
    cars = [];
    for (let i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
  }
}
  function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
    if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
    if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  }

  // Car class
  class Car {
    // constructor and attributes
    constructor() {
      this.pos = createVector(10, 10);
      this.vel = createVector(random(-5, 5), random(-5, 5));
      //this.col = color(0, random(50, 100), random(100, 255), random(255));
      //this.size = random(50, 80);
    }

    // methods

    display(){
      //fill(this.col);
      //textSize(this.size);
      image(trooper, this.pos.x, this.pos.y);
  }

    move() {
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
  }
