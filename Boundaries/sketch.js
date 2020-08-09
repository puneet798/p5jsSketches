var step=20,pos1=-50,pos2=50;

var fps = 30;

// the canvas capturer instance
//var capturer = new CCapture({ format: 'png', framerate: fps });

function setup() {
  createCanvas(600, 600);
  background(221,44,80);
  
   frameRate(fps);

  // start the recording
  //capturer.start();
}

var startMillis; 

function draw() {
  
  //fill(210,190,100,1);
  ellipse(pos1,height/2,100,100); 
  //fill(1,8,7,5);
  ellipse(width/2,pos1,100,100);
  pos1=pos1+step;
  
  if (pos1==width+50)
    pos1=50;
  
  fill(0,0,255,10);
  //ellipse(random(600),random(600),20,20);
  
  //quad(random(600),random(80),random(20),random(600),random(20),random(600),random(20),random(80))
  
    
 /* if (startMillis == null) {
    startMillis = millis();
  }

  // duration in milliseconds
  var duration = 7000;

  // compute how far we are through the animation as a value 
  // between 0 and 1.
  var elapsed = millis() - startMillis;
  var t = map(elapsed, 0, duration, 0, 1);

  // if we have passed t=1 then end the animation.
  if (t > 1) {
    noLoop();
    console.log('finished recording.');
    capturer.stop();
    capturer.save();
    return;
  }

  // actually draw
  //drawCircles(t); // ... excerpted for clarity

  // handle saving the frame
  console.log('capturing frame');
  capturer.capture(document.getElementById('defaultCanvas0'));*/
  
}