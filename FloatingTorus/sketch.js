var angle=0;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(250,140,190);
  rectMode(CENTER);
  rotateX(angle);
  rotateZ(angle*0.15);
  fill(10,20,30);
  //box(100,34,100);
   torus(150,80,15);
  angle=angle+0.05;
}
