let t = 0,c = 1;

function setup() {
  createCanvas(400, 400);
  background(220);
}

let startX = 200, startY = 200;

function draw() {
  strokeWeight(3);
  fill(210,199,100);
  line(startX,startY,startX-200*sin(t),startY+200*cos(t));
  line(startY,startX+200*sin(t),startY-200*cos(t),startY);
  t = t + 3;
  startX = startX + c*0.5;
  startY = startY + c*0.5;
  if (c==1)
    c = -1;
  else
    c = 1;
}