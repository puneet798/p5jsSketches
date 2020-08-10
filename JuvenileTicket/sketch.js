function setup() {
  createCanvas(500,500);
  print("Hello");
}

function draw() {
  background(220,215,90);
  //fill(200,100,9)
  //stroke(0,255,0,255);
  //line(10,20,100,300);
  rectMode(CENTER);
  fill(100);
  rect(height/2,width/2,200,200);
  fill(200,100,9);
  strokeWeight(24);
  stroke(255,0,0,25);
  strokeWeight(400);
  ellipse(height/2,width/2,100,100);
}