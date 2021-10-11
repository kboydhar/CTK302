let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("Is this thing on?", 5, 22) ;
      break ;

      case 1:
       text("Oh, seems like it is", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("Two is a party.", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("But three is a crowd.", 5, 22) ;
            // put a picture here
      break ;


  }

}
