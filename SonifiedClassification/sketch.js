
var redX,redY,greenX,greenY;

// The neural network is the brain
let brain;

function setup() {
  let canvas = createCanvas(400, 400);
  // Only when clicking on the canvas
  canvas.mousePressed(addData);
  
  // Create the model
  const options = {
  inputs: ['x', 'y'],  // TODO: support ['x', 'y']
  outputs: ['freq'], // TODO: support ['freq']
  task:'classification',
  debug: true,
  }
  brain = ml5.neuralNetwork(options);
  
  background(0);
  
  // Train Model button
  train = createButton('Train Model')
  train.mousePressed(trainModel); 
  b1 = createButton('Red')
  b2 = createButton('Green')
  b1.mousePressed(check1)
  b2.mousePressed(check2)
  stop = createButton('stopOsc')
  stop.mousePressed(stopOsc)
}

function addData(){
  if (state=='0'){
  //redX = round(random(400)); 
  //redY = round(random(400));
  fill('red')
  ellipse(mouseX,mouseY,50,50);
  brain.addData({x:mouseX, y:mouseY}, {freq:'0'});
  }
  else if (state=='1'){
  fill('green')
  ellipse(mouseX,mouseY,50,50);
  brain.addData({x:mouseX, y:mouseY}, {freq:'1'});
  }
}

function draw() {
}

// Train the model
function trainModel() {
// ml5 will normalize data to a range between 0 and 1 for you.
  brain.normalizeData();
  // Train the model
  // Epochs: one cycle through all the training data
  brain.train({ epochs: 64 }, finishedTraining);
}

// When the model is trained
function finishedTraining() {
  
  // Start playing sound
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(0.5);
  osc.start();
  
brain.predict([mouseX, mouseY], gotFrequency);
}

/*function mousePressed(){
  fill('blue')
  ellipse(mouseX,mouseY,10,10);
  // Predict a frequency
  brain.predict([mouseX, mouseY], gotFrequency);
}*/

// Got a result
function gotFrequency(error, outputs) {
  if (error) {
    console.error(error);
    return;
  }
  
  frequency = parseFloat(outputs[0].value);
  print(frequency)
  
  if (frequency>=0.5){
    osc.freq(440);
    //background('red')
    //print(outputs[0].value)
  }
  else{
    osc.freq(350);
    //background('green')
  }
  
  // Predict again
  brain.predict([mouseX, mouseY], gotFrequency);
}

function check1(){
  /*redX = round(random(400)); 
  redY = round(random(400));
  fill('red')
  ellipse(redX,redY,50,50);
   brain.addData({x:mouseX, y:mouseY}, {freq:1});*/
  state = '0';
}

function check2(){
  /*greenX = round(random(400));
  greenY = round(random(400));
  fill('green')
  ellipse(greenX,greenY,50,50);
  brain.addData({x:mouseX, y:mouseY}, {freq:2});*/
  state = '1';
}

function stopOsc(){
  osc.stop()
}