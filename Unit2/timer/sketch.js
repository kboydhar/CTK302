let state = 0 ;
let timer = 0 ;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state){
    case 0:
    background ('blue');
    text("state 1", 100, 100);
    break ;

    case 1:
    background ('yellow');
    text("state 2", 100, 100);
    break;

    case 2:
    background ('red');
    text("state 3", 100, 100);
    break ;

    break ;
  }

  timer ++ ;
  if (timer> 3*60){
    timer =0;
    state ++;
    if (state >2) state = 0;
  }

}

function mouseReleased(){
 state++ ;
 if (state>1){
   state = 0;
 }
}
