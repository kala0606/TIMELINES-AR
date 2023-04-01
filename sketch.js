let myImage;
let c;
let ts = 40;

let yP = [];
let x2P = [];
let y2P = [];

// function preload() {
//   myImage = loadImage('nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.avif');
// }

var DEFAULT_SIZE = 1000;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var DIM = Math.min(WIDTH, HEIGHT);
var M = DIM / DEFAULT_SIZE;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  
  // pixelDensity(1);
  // image(myImage, 0, 0, width, height);
  
   myVid = createCapture(VIDEO);
  myVid.size(WIDTH, HEIGHT);
  myVid.hide(); // hide it
 
  
}

function draw() {
  
  let letter = [];
  rectMode(CENTER)

  translate(WIDTH/2, HEIGHT/2)
  scale(0.8)
  translate(-WIDTH/2, -HEIGHT/2)
  
  // loadPixels()
  myVid.loadPixels();
  
  c = 0;
  for(var y = 0; y < HEIGHT; y+=ts*2){
    for(var x = 0; x < WIDTH; x+=ts/5){
      var index = (x + y * WIDTH) * 4;
      // letter[c] = round(map(myVid.pixels[index], 0, 255, 0, 9));
      alpha[c] = myVid.pixels[index];
      // fill(255);
      // textSize(5);
      // text(letter, x, y);
      c++;
      
    }
  }
  
  background(0);
  
  c = 0;
  for(var y = 0; y < HEIGHT; y+=ts*2){
    for(var x = 0; x < WIDTH; x+=ts/5){
      var index = (x + y * WIDTH) * 4;
      // var letter = round(map(pixels[index], 0, 255, 0, 9));
      // fill(255, 255, 255, alpha[c]);
      textSize(ts);
      let r = map(myVid.pixels[index], 0, 255, -PI/2, PI/2);
      push();
      // fill(255)
      noStroke()
      // strokeWeight(0.1)
      translate(x,y)
      r+=noise(x/100,y/100)
      rotate(r)
      rect(0,0,1,ts*2-5);
      pop();
      
      // text(letter[c], x, y);
      c++;      
    }
  }
  
  
  
 
  // noLoop();
}