let music, movies, shinee;

function setup() {
  createCanvas(500, 500);
  music = loadImage("assets/music.jpeg");
  movies = loadImage("assets/movies.jpeg");
  shinee = loadImage("assets/shinee.jpeg");
  imageMode(CENTER) ;
}

function draw() {
  background('blue');
  image(music, width/2, height/2, 100, 100);
  image(movies, width/2, height/2-120, 100, 100);
  image(shinee, width/2, height/2+120, 100, 100);
}
