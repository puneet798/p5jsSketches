let img;
let click = 0,hila=0.5;
let posX = 0, posY = 0;
let ramSound = 0;
function preload() {
  img = loadImage('raavan.jpg');
  img2 = loadImage('raavanFire.jpg');
  ram = loadImage('ram.jpg');
  song = loadSound('RavanLaugh.mp3');
  song2 = loadSound('ram.mp3');
}

function setup() {
  createCanvas(600, 400);
  button = createButton('Happy Dusshera')
  button.mousePressed(killRaavan);
  song.loop();
}

function draw() {
  
  background(22);
  imageMode(CENTER)

  //show raam when button is clicked
  if (click==1){
    image(ram,posX,posY,80,80);
    image(img2,300+hila*sin(random(0,90)),200-hila*sin(random(0,90)),200,200);
    //ram positions update
    posX += 0.5+sin(random(180)); posY += 0.5+sin(random(180));
    song.pause();
    hila += 0.2;
  }
  else
    image(img2,300,200, 200+sin(frameCount*0.1)*100,
        200+cos(frameCount*0.1)*100);
  
  if (posY>height){
    background(22);
    textSize(32);
    textAlign(CENTER);
    text('Happy Dusshera', width/2, height/2);
    fill(0, 102, 153);
  }
}

function killRaavan(){
     click = 1;
     song2.play();
}







