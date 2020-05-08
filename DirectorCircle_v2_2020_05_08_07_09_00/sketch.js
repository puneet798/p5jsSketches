let p1,p2,slope,temp1,temp2,temp3;
let d = 100;
let status = 0;
let l1,l2;
let slider, wave;
R = d/2;

function setup() {
  createCanvas(600, 600, WEBGL);
  let fs = fullscreen();
  fullscreen(!fs);
  
  //to create sound
  wave =  new p5.Oscillator();
  wave.setType('sine');
  
  // to increase the radius of the circle 
  slider = createSlider(100, 200, 100, 1);
  slider.position(10, 700);
  background(255);
  fill(200);
  circle(0,0,d);
  line(-width/2,0,width/2,0);
  line(0,-height/2,0,height/2); 
}

function draw() {
  fill(200);
  let val = slider.value();
  circle(0,0,val);
  line(-width/2,0,width/2,0);
  line(0,-height/2,0,height/2); 
}

function mousePressed()
{
  R = slider.value()/2;
  x_pos = mouseX-width/2;
  y_pos = mouseY-height/2;
  fill(0);
  //circle(x_pos,y_pos,4,4);
  //print('x:' + mouseX + 'y:' + mouseY);
  print('x_pos: ' +x_pos + 'y_pos ' + y_pos);
  //calculating slope
  temp1 = R*sqrt(pow(x_pos,2) + pow(y_pos,2) - pow(R,2));
  slope1 = (-x_pos*y_pos + temp1) / (pow(R,2) - pow(x_pos,2));
  slope2 = (-x_pos*y_pos - temp1) / (pow(R,2) - pow(x_pos,2));
  temp2a = pow(slope1,2)*x_pos - y_pos*slope1;
  temp2b = pow(slope2,2)*x_pos - y_pos*slope2;
  x_circle1 = temp2a / (1+pow(slope1,2));
  y_circle1 = slope1*(x_circle1 - x_pos) + y_pos;
  x_circle2 = temp2b / (1+pow(slope2,2));
  y_circle2 = slope2*(x_circle2 - x_pos) + y_pos;
  stroke(50);
  if (x_pos < width/2 && y_pos <height/2)
  {
  l1 = line(x_pos,y_pos,x_circle1,y_circle1);
  l2 = line(x_pos,y_pos,x_circle2,y_circle2);
  }
  
  //changing color of the point
  angle = atan(abs(slope1-slope2) / abs(1+slope1*slope2))*180/PI + PI/2;
  print(angle);
  angle_map = map(angle,0,90,0,255);
  //print(angle_map);
  fill(102,124,angle_map);
  circle(x_pos,y_pos,12,12);
  
  //creating sound dependent on the angle
  wave.start();
  wave.amp(2.5);
  wave.freq(angle_map*10);
}