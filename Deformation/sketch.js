function setup() {
  createCanvas(400, 400);
  
}

function draw() {   
  background(22,89,255); 
  fill(64,224,208);
  beginShape()
  vertex(200,100)
  vertex(mouseX,300)
  vertex(300,255)
  vertex(20,mouseY)
  vertex(80,30)
  vertex(mouseY-10,55)
  endShape(CLOSE)
}