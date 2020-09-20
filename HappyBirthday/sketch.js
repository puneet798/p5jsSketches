let video;
let poseNet;
let pose;
let d = 30;

function setup() {
  createCanvas(600, 400);
  background(220);
  frameRate(30);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log('PoseNet model is ready');
}

function gotPoses(poses){
  console.log(poses);
  if (poses.length>0){
    pose = poses[0].pose;
  }
}

function draw() {
  image(video,0,0);
  textSize(30);
  text('Happy Birthday Vaishali',150,30)
  fill(random(255),23,189);
  //text('6 days to go! Yay!!',200,50)
  if (pose){
  fill('red');
  //ellipse(pose.nose.x,pose.nose.y,50);
  //fill(0,255,0,140);
  //triangle(pose.leftEye.x,pose.leftEye.y-d,pose.rightEye.x,pose.rightEye.y-d,300,100);
  triangle(pose.nose.x-d,pose.nose.y,pose.nose.x+d,pose.nose.y,pose.nose.x,height-2*d)
  fill(130,255,random(140));
  ellipse(pose.leftEye.x,pose.leftEye.y,45+random(-10,10))
  fill(255,random(140),145);
  ellipse(pose.rightEye.x,pose.rightEye.y,45+random(-10,10))
  }
}