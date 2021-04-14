//this version does serial communication between the plant and text tool changes color and stores the letters in a dynamic array
//now adding a slider to set the velocity

class cyberneticWord{
 // Create constructor
    constructor() {  
      
        // It store the length of array.
        this.length = 0; 
          
        // Object to store elements.
        this.data = {}; 
      
      //height and width of the word
      this.h = {}; this.d = {};
      
      //size and color
      this.s={};  this.c={};
    }
add(w,h,d,s,c) {
    this.data[this.length] = w;
    this.h[this.length] = h;
    this.d[this.length] = d;
    this.s[this.length] = s;
    this.c[this.length] = c; 
    this.length++;
    //return this.data;
}
}
//create an object of the class to store the data entered by the user.
const cyber = new  cyberneticWord();

var d = 50, h=200;
let t1=0,t2,n_char=0;
var vel=0,col,max_vel=0.3;
let test=1,junk=1;
let slider;
var outdata,col_temp=0;
var words = [];

let capture1;
  let device1 = {
    video: {
      deviceId: '52d4bbd0effe577e430cc378e182297123f6c0e39f968f223d1ee9062c23df19'
    }
};

var serial; // variable to hold an instance of the serialport library
var options = {
  baudrate: 9600
}; // set baudrate to 9600; must match Arduino baudrate
var portName = 'COM3'; // fill in your serial port name here
var data; // for incoming serial data

function setup() {
  createCanvas(840, 600);
  background(50);
  slider = createSlider(10, 50, 100);
  slider.position(700, 520);
  slider.style('width', '80px');
  capture1 = createCapture(device1);
  capture1.size(840,600);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.open(portName, options); // open a serial port @ 9600 
}
function draw() {
  noStroke();
  if (test!=1&&frameCount%100==0){
     background(0);
     max_vel = slider.value();
     textSize(20);
     text("Max Vel: "+max_vel/100,50,height-40);
     text("Moisture Content: "+data+"%",400,height-40); 
     if (vel>=max_vel){
     fill('red');
     textSize(20);
     text("Current Vel: "+vel,50,height-70); 
     }
    else{
     textSize(20);
     text("Current Vel: "+vel,50,height-70);
    }
     
     for(var key in cyber.data){
     col_temp = map(data,0,100,0,255);
     //fill(cyber.c[key]);
     fill(col_temp+50);
     textSize(cyber.s[key]*data);
     text(cyber.data[key], cyber.d[key], cyber.h[key]);
  }
  }
  /*if (test!=1){
  outData=vel;
  //print("outData is" + outData);
  if (outData>0.1)
  serial.write(outData); // write to serial for Arduino to pickup
  }*/
}

function keyTyped() {
if (keyCode==ENTER){
  h=h+20;
  d=20;
}
  else if(h>height-20){
  background(0); 
    h=200;
  }
  else{
textSize(data*20*vel); 
col = map(data,0,100,0,255);
fill(col);
text(key, d, h);
cyber.add(key,h,d,20*vel,col);
  d= d+20;
  //h=h+10*vel;
  if (d>width-20){
    d=20;
    h=h+50;
  }
  if (test==1){
    test++;
    f1 = frameCount;
  }
  else{
    f2 = frameCount;
    vel = 1/(f2-f1+junk);
    f1=f2;
   //print(vel);
  }
}
  if (test!=1){
  outData=vel;
  print("outData is" + outData);
  if (outData>max_vel/100)
  serial.write(outData); // write to serial for Arduino to pickup
  }
}

function serialEvent() {
  data = serial.readLine();
  console.log(data);
  data = parseInt(data);
  //print(data);
}
  