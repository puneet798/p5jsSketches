let r=250;
let theta = 30;

function setup() {
  createCanvas(600, 500, WEBGL);
  background(0);
}

function draw() {
  //background(random(255),random(255),random(255));
  fill(random(255),random(255),random(255));
  ellipse(r*cos(radians(theta))+random(10),r*sin(radians(theta))+random(10),5,5);
  theta = theta + 5;
  if (theta>360){
    theta = 0;
    r = r - 10;
  }
  if (r == 0)
    noLoop();
}