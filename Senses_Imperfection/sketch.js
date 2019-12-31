
var mic;
var snapshots = [];
var i =0;


function setup() {
   canvas = createCanvas(1920,1080);
    video = createCapture(VIDEO);
    video.size(800,800);
  
  //makes it one pixel per pixel whatever resolution user is on
   pixelDensity(1);
  
    mic = new p5.AudioIn();
    mic.start();
  
  //  button = createButton('Click me');
 //   button.position(10, 10);
  
 //  button.mousePressed(takesSnap);
   image(video,0,0);
}

function draw() {
 // background(220);
  image(video,0,0);
  //video.hide();
  //ellipse(canvas.width/2,canvas.height/2,30,30); 
  //ellipse(random(canvas.width),random(canvas.height),50,50); 
  var vol = mic.getLevel();
 // count[i] = vol;

  i++;
  
  vol = vol*255;
    console.log(vol);
  
  if (i % 30 == 0)
    i=0;
  
  /*loadPixels();

    for (var y = 0;y <height; y++)
    { 
      for (var x = 0; x <width; x++)
      {
          var index = (x + y*width)*4;
        
            pixels[index]   = vol;
            pixels[index+1] = vol-50;
        //    pixels[index+2] = vol-250;
           // pixels[index+3] = 255;
      }
    }
  
  updatePixels();*/
  
  tint(vol,vol,vol);
  

}


function takesSnap()
{
   // snapshots.push(video.get());
   image(video, 0, 0);
}
