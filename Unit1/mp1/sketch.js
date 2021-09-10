function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  background(255, 204, 0);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    fill('black')
    rect(115, 100, 200, 200) ;
    rect(115, 100, 200, 200) ;
    triangle(150, 250, 100, 150, 100, 100);
    ellipse(582, 542, 200, 200) ;
    rect(355, 279, 40, 73) ;
    rect(355, 370, 200, 200);
    rect(290, 475, 40, 150);
    rect(410, 475, 40, 150);
    rect(410, 555, 75, 15);
    rect(286, 555, 75, 15);
    rect(70, 550, 200, 20);
    rect(160, 560, 50, 350);
    ellipse(160, 375, 50, 50) ;
     fill('white');
  textSize(60)
  text("OUCH!", 20, 70);
     fill('black');
  textSize(24)
  text("He didn't listen", 315, 70);

  } else {
    // when the mouse isn't pressed!
      fill(0);
  textSize(24)
  text("This is Ted. We told him not to push the red button.\n He is a robot designed \n to test instructions. ", 10, 30);
    ellipse(355, 144, 200, 200) ;
    rect(355, 279, 40, 73) ;
    rect(355, 370, 200, 200);
    rect(290, 475, 40, 150);
    rect(410, 475, 40, 150);
    rect(410, 555, 75, 15);
    rect(286, 555, 75, 15);
    rect(255, 330, 200, 20);

    fill("red")
    ellipse(160, 375, 50, 50) ;
    fill ("black")
    rect(160, 560, 50, 350);

  }




  // this shows mouse location - comment it out when you're done!



}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
