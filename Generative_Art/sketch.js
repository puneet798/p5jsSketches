let pos = [];
let size = 2;

function setup() {
  if (frameCount%100==0){
  canvas = createCanvas(600, 400);
  background(240);
    for (var i=10 ; i<canvas.width ; i=i+10){
    	for (var j=10; j<canvas.height ; j=j+10){
      	ellipse(i,j,2,2);
      	pos.push({x:i,y:j});
    	}
   }
  }
}

function draw() {
   background(mouseX,mouseY,100);
   for (var item = 0; item< pos.length; item++){
     fill(random(255),135,random(100))
     ellipse(pos[item].x,pos[item].y,size,size);
   }
  size = size + 1;
  if (size>10)
    size = 2;
}


//draw grid if you want to using this function
/*function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		//text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		//text(y, 1, y+12);
	}
}*/
