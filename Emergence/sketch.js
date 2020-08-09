function setup() {
  createCanvas(400, 400);
  
}


function draw() {
if (frameCount%20==0)
{
background(135,255,67);
fill('pink');
beginShape();
strokeWeight(3);
vertex(random(300),random(300));
vertex(random(300),random(300));
vertex(random(300),random(300));
vertex(random(300),random(300));
endShape(CLOSE);
}
}