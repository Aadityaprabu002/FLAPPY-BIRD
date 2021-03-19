var game = false;
var skyColor;
var Bird;
var PIPE_list = []; 
var BG_list=[];
var BASE_list = [];
var bgimg;
var baseimg;
var timer = 0;
var score = 0;
var stopTime = 200;
var prevx = 0;
function preload(){
   bgimg = loadImage('Sprites/background-day.png');
   baseimg = loadImage('Sprites/base.png');
}
function setup() {
  createCanvas(450, 600);
  skyColor = color(147, 237, 255);
  Bird = new bird(40,50,100,200);
  img = bgimg;
  for(let i =0;i<4;i++){
      sx = img.width*(i+1);
      sbx= baseimg.width*(i+1);
      BG_list[i]={img,sx};
      BASE_list[i]={baseimg,sbx}; 
  }

}
function mousePressed(){
  game = true;
  return;
}
function draw() {
  
  timer+=1;
  background(skyColor);
  image(bgimg,0,0,450,600);

  for(let i =0;i<4;i++){
    base = BASE_list[i];
     if(base.sbx<0){
       base.sbx = width+baseimg.width;
     }
     else{
       base.sbx-=2;
     }
     image(base.baseimg,base.sbx-baseimg.width,height-50);
   }
   if(!game){
    Bird.draw(0);
  
    return ;
   }
  if(mouseIsPressed){
    Bird.flap();
  }
  else{
    Bird.gravityPull();
  }
  moveAnddrawPipes();
  if(timer>stopTime){
      generatePipes();
      stopTime = random(175,200);
      timer=0;
  }
  if (PIPE_list){
     isCollide();
  }
}
function generatePipes(){

  let x = width+100;
  let h1 = random(100,300);
  let h2 = height - 50 - h1 - random(150,201)  ;//150 is gap between two pipes
  let w = 80; 
  let y1 = 0;
  let y2 = height-50;
  let newPipe = new pipe(h1,h2,w,x,y1,y2);
  append(PIPE_list,newPipe);

}
function moveAnddrawPipes(){
  for(everyPipe of PIPE_list){
    everyPipe.drawDownwardPipes();
    everyPipe.drawUpwardPipes();
    if (everyPipe.move()){
      PIPE_list.splice(0,1);
     
    }
  }
}
function showScore(){
  textSize(32);
  fill(0, 102, 153);
  text(score, 10, 60);
}
function isCollide(){
  birdCircle = Bird.getbirdCircle();
  bx = birdCircle[0];
  by = birdCircle[1];
  br = birdCircle[2];
  for(let i=0;i<PIPE_list.length;i++){
    pipes = PIPE_list[i];
    hit1 = hit2 = false;
    strokeWeight(3);
    stroke(255,0,0);
    fill(255)
    pipeRect1 = pipes.getpipeRect1();
    p1x = pipeRect1[0];
    p1y = pipeRect1[1];
    p1W = pipeRect1[2];
    p1H = pipeRect1[3];
    pipeRect2 = pipes.getpipeRect2();
    p2x = pipeRect2[0];
    p2y = pipeRect2[1];
    p2W = pipeRect2[2];
    p2H = pipeRect2[3];
    fill(255);
    circle(p1x+p1W,200,10);
    circle(bx-br,200,10);
    if(pipeRect1 && pipeRect2){
      hit1 = collideRectCircle(p1x, p1y, p1W, p1H,bx,by,br);
      hit2 = collideRectCircle(p2x, p2y, p2W, p2H,bx,by,br);
    }  
    if(p1x+p1W == bx-br ){
      score++;
    }
    console.log(score);
    if (hit1 || hit2)
    {
      console.log('BIRD HIT!!!');
      noLoop();
    }
  }
  noStroke();
  showScore();
}
