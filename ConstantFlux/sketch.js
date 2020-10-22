var shape = [];
var offSet = 1;

function setup() {
  createCanvas(400, 400);
  background(22);
}

//creates a rectangle at a random location and moves alternative rectangles up and down respectively.
function draw() {
  shape.push({rectX: random(30,370), rectY: random(30,370)});
  for (let i = 0; i <shape.length; i++){
      fill(random(255),random(255),25);
      rect(shape[i].rectX,shape[i].rectY,30,40);
      shape[i].rectY += pow(-1,i)*offSet;
  }
}

