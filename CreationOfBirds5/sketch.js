let img,detector,video;
let detections = [];
var myFont;

let switchFlag = false;
let switchBtn;

var options = {
     video: {
        
         facingMode: {
          exact: "user"
        }
     }
   };


let lines, markov, data1, data2, data3, data4, x, y, status=false, txt;
var time;

function preload(){
  //img = loadImage('trump2.jpg');
  myFont = loadFont('human_medium.otf');
  data1 = loadStrings('check.txt');
  data2 = loadStrings('check2.txt');
  data3 = loadStrings('check3.txt');
  //data4 = loadStrings('check4.txt');
  detector = ml5.objectDetector('cocossd',modelLoaded);
}

function setup() {
  canvas = createCanvas(800,800);
  leftBuffer = createGraphics(800, 400);
  rightBuffer = createGraphics(800, 400);
  textFont('helvetica', 14);
  //textFont(myFont);
  textLeading(21);
  textAlign(LEFT);
  // create a markov model w' n=4
  markov = RiTa.markov(2);
  //load text into the model
  markov.addText(data1.join(' '));
  markov.addText(data2.join(' '));
  markov.addText(data3.join(' '));
  //markov.addText(data4.join(' '));
  
  capture = createCapture(options);
  //video.position(100,100);
  capture.hide();
  
  switchBtn = createButton('Switch Camera');
  switchBtn.position(width/2, 820);
  switchBtn.mousePressed(switchCamera);
  
  x=width/8+20; y = 20;
}

function switchCamera()
{
  switchFlag = !switchFlag;
  stopCapture();
  if(switchFlag==true)
  {
   capture.remove();
   options = {
     video: {
         facingMode: {
          exact: "environment"
        }
     }
   };

  }
  else
  {
   capture.remove();
   options = {
     video: {
         facingMode: {
          exact: "user"
        }
     }
   };
  }
  capture = createCapture(options);
}

function stopCapture() {
  let stream = capture.elt.srcObject;
  console.log(stream);
  let tracks = stream.getTracks();

  tracks.forEach(function(track) {
    track.stop();
  });

  capture.elt.srcObject = null;
}

function draw(){
  drawLeftBuffer();
  drawRightBuffer();
  image(leftBuffer, 0, 0);
  image(rightBuffer, 0, 545);
  //image(video,0,0);//,width/2,height);
  /*if (status==true&&frameCount%50==0){
  lines = markov.generate(2);
  drawText(status);
}
  else if(status==false&&frameCount%30==0)
    {
       lines = markov.generate(3);
       drawText(status);
    }*/
}

function drawLeftBuffer(){
  image(capture,0,height/2,width,height/2);
}

function drawRightBuffer(){
  textFont(myFont);
  if (status==true&&frameCount%60==0){
  lines = markov.generate(2);
  drawText(status);
}
  else if(status==false&&frameCount%40==0)
    {
       lines = markov.generate(2);
       drawText(status);
    }
}


function modelLoaded(){
  print("Model Loaded");
  detector.detect(capture, gotDetections);
}

function gotDetections(error,results){
   //console.log("Detecting Results");
    if (error) {
    console.error(error);
  }
  //console.log(results); 
  detections = results;
  detector.detect(capture, gotDetections);
  if(detections){
    for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
      //stroke(0, 255, 0);
      //strokeWeight(2);
      noFill();
      //rect(object.x, object.y, object.width-100, object.height);
      //ellipse(object.x, object.y,object.width + object.height-100);
      noStroke();
      fill(255);
      textSize(34);
      if (object.label=='bird')
      text("Bird Detected!", object.x + 20, object.y + 30 + height/2); 
      else if (object.label=='person')
        text("Human", object.x + 20, object.y + 30 + height/2);
      else
      text(object.label, object.x + 20, object.y + 30 + height/2);
      if (object.label=='bird')
        status=true;
      else
        status=false;
  }
  }
}

function drawText(status){
  textFont(myFont);
  if(status){
  background(50, 30, 40);
  fill(240);
   //x = y = 40;
  //text("Hello Human!")
  text(lines.join(' '), x, y, 450, 500);//, 420, 420);
  }
  else{
  background(20, 3, 4);
  fill(255, 144, 0);
   //x = y = 40;
  textSize(34);
  text("Oh human, show me a bird and let's do magic!", x, y, 350, 500);
  }
    
}



  