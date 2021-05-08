let img,detector,video;
let detections=[];
var myFont;

let lines, markov, data1, data2, data3, data4, x = 420, y = 20, status=false, txt;
var time;

function preload(){
  //img = loadImage('trump2.jpg');
  myFont = loadFont('human_medium.otf');
  data1 = loadStrings('check.txt');
  data2 = loadStrings('check2.txt');
  data3 = loadStrings('check3.txt');
  data4 = loadStrings('check4.txt');
  detector = ml5.objectDetector('cocossd',modelLoaded);
}

function gotDetections(error,results){
   //console.log("Detecting Results");
    if (error) {
    console.error(error);
  }
  //console.log(results); 
  detections = results;
  detector.detect(video, gotDetections);
    for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
      stroke(0, 255, 0);
      strokeWeight(2);
      noFill();
      //rect(object.x, object.y, object.width-100, object.height);
      //ellipse(object.x, object.y,object.width + object.height-100);
      noStroke();
      fill(255);
      textSize(44);
      if (object.label=='person')
      text("Human Detected!", object.x + 20, object.y + 24); 
      else
      text(object.label, object.x + 20, object.y + 24);
      if (object.label=='person')
        status=true;
      else
        status=false;
  }
}

function modelLoaded(){
  print("Model Loaded");
  detector.detect(video, gotDetections);
}

function setup() {
  canvas = createCanvas(1080, 640);
  leftBuffer = createGraphics(400, 400);
  rightBuffer = createGraphics(400, 400);
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
  
  video = createCapture(VIDEO);
  //video.position(100,100);
  video.hide();
  
  x=width/2+20; y = 20;
}

function drawText(status){
  textFont(myFont);
  if(status){
  background(50, 30, 40);
  fill(240);
   //x = y = 40;
  //text("Hello Human!")
  text(lines.join(' '), x, y, 350, 500);//, 420, 420);
  }
  else{
  background(20, 3, 4);
  fill(255, 204, 0);
   //x = y = 40;
  textSize(34);
  text("Oh human! Show me a bird and I will show you magic.", x, y, 350, 500);
  }
    
}

function draw(){
  drawLeftBuffer();
  drawRightBuffer();
  image(leftBuffer, 0, 0);
  image(rightBuffer, 400, 0);
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
  image(video,0,0,width/2,height);
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


  