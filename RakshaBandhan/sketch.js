function setup() {
  createCanvas(400, 400, WEBGL);
  
}

function draw() {
  if (frameCount%10==0){
  background(25,18,32);
  fill(180,50,70)
  ellipse(0,0,150,150)
  fill(20,121,217,190)
  quad(-70,0,0,70,70,0,0,-70)
  fill(122,21,87)
  ellipse(0,0,100,100)
  fill(13,78,22)
  ellipse(0,0,60,60)
  fill(255,255,0,170)
  ellipse(0,0,30,25)
  noFill();
  strokeWeight(2.5);
  bezier(0.5,0,155,-random(30),55,random(50),180,-9)
  bezier(-0.5,0,-155,random(30),-55,-random(50),-180,9)
  }
  
}