let scal_x=0,scal_y=0,dance=0,x,y,offset;

function setup() {
  createCanvas(400, 400);
  background(0);
  vid = createCapture(VIDEO);
  vid.hide();
  pixelatee = createSlider(8,32,8,8);
  dance = createButton('Shall we dance?');
  dance.mousePressed(danceNow);
}

function draw() {
  background(0);
  image(vid,0,0);
  scal_x = pixelatee.value();
  scal_y = scal_x;
  vid.loadPixels();
  if (dance==0){
  for (y = 0; y < height; y += scal_y) {
    for (x = 0; x < width; x += scal_x) {
      offset = ((y*width)+x)*4;
      fill(vid.pixels[offset],
        vid.pixels[offset+1],
        vid.pixels[offset+2]);
      rect(x, y, scal_x, scal_y); 
    }
  }
  }
  if (dance == 1){
      for (y = 0; y < height; y += scal_y) {
    for (x = 0; x < width; x += scal_x) {
      offset = ((y*width)+x)*4;
      fill(vid.pixels[offset],
        vid.pixels[offset+1],
        vid.pixels[offset+2]);
      rect(x+random(-4,4), y+random(-4,4), scal_x, scal_y); 
    }
  }
  }
}

function danceNow(){
  dance = 1;
}