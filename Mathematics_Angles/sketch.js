var angle;

function setup() {
  createCanvas(400, 400);
  background(255);
  line(200,200,200,100);
  line(200,200,300,200);
  fill('yellow');
  ellipse(200,100,20,20);
  ellipse(300,200,20,20);
}

function draw() {
  if (mouseX==0)
  setup();
  else{
  reDraw();
  line(200,200,mouseX,mouseY);
  //line(200,200,mouseX,mouseY);
  fill('yellow');
  ellipse(mouseX,mouseY,20,20);
  //ellipse(mouseX,mouseY,20,20);
  }
}

function reDraw()
{
  createCanvas(400, 400);
  background(255);
  //line(200,200,200,100);
  line(200,200,300,200);
  fill('yellow');
  //ellipse(200,100,20,20);
  ellipse(300,200,20,20);
  
  //to create sound
  wave =  new p5.Oscillator();
  wave.setType('sine');
  
  angle = atan(abs((mouseY-200)/(mouseX-200)))*180/PI;
  print(angle);
  angle_map = map(angle,0,90,10,5000);
  print(angle_map);
  
  //creating sound dependent on the angle
  wave.start();
  wave.amp(0.5);
  wave.freq(angle_map);
}