let state = 0 ;
let timer = 0 ;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state){
    case 0:
    background ('pink');
    text("Why did the chicken cross the road", 100, 100);
    break ;

    case 1:
    background ('yellow');
    text("To get to the other side!", 100, 100);

    break ;
  }

}
function mouseReleased(){
 state++ ;
 if (state>1){
   state = 0;
 }
}
