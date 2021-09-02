var f1 ;


function setup() {
  createCanvas(500, 500) ;
  f1 = loadFont ("assets/monster.ttf") ;
  }

  function draw() {
    background("yellow") ;
    textFont(f1) ;
    textSize(54) ;
    text("hello world", 100, 100) ;
  }
