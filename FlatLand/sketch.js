var angle=0,add=0;

function setup() {
  
  //remove the device id if pc laptop has a camera
     let device1 = {
    video: {
      deviceId: '3836e5a7cb828c4c860f13901bfd02f53290e233841ddb00d90c6baa8ed121e0'
    }
  };
 
  createCanvas(600, 600, WEBGL);
  cam = createCapture(device1);
  cam.size(400,400);
  cam.hide();
  
}

function draw() {
  background(0);
  tint(230,120,random(255));
  rotateX(angle);
  rotateY(angle*0.3);
  rotateZ(angle*0.1);
  angle = angle + 0.009;
  
    ambientLight(255);
   image(cam,0-width/2,0-height/2);
  
   
    noStroke(0);
    texture(cam);
    box(300);
    texture(cam);
}