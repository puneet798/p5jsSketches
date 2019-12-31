var wave,j=1000,playing=0;

var slider;


function setup() {
  createCanvas(400, 400);
  
 
  
  wave =  new p5.Oscillator();

    wave.setType('saw');
  
  button = createButton('play/pause');
   button.mousePressed(toggle);
  
  slider = createSlider(100,1200,440);
  
}

function draw() {
 // background(220);
  let xaxis = map(slider.value(),100,1200,5,400)
   ellipse(200,200,xaxis,xaxis);
  wave.freq(slider.value());
 /* if (!playing)
    background(130,134,200);
  else 
  background(51,51,90);*/
  
  //print(xaxis);
} 

function toggle()
{
  if (!playing){
 fullscreen();
  wave.start();
  wave.amp(2.5);
  wave.freq(140);
    playing = 1;
  }
  else{
    wave.stop();
  playing = 0;
  }
}