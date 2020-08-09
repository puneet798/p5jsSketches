let t=0;

function setup() {
  createCanvas(400, 400);
  background(0);
  video = createCapture(VIDEO);
}

function draw() {
  rotate(t)
  image(video,t,t);
  video.hide();
  tint(mouseX,34,mouseY);
  t = t+0.01;
  //print(t)
  
  if (t>height)
    t=0;
}