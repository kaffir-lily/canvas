var can;
var ctx;

var w;
var h;

var girl=new Image();
var star=new Image();

var num=60;
var stars=[];

var lastTime;
var deltaTime;

var switchy=false;//标记
var life=1;

function init(){
  can=document.getElementById("canvas");
  ctx=can.getContext("2d");

  w=can.width;
  h=can.height;

  document.addEventListener("mousemove",mousemove,false);

  girl.src="src/girl.jpg";
  star.src="src/star.png";

  for(var i=0;i<num;i++){
    var obj=new starObj();
    stars.push(obj);
    stars[i].init();
  }

  lastTime=Date.now();
  gameloop();
}

document.body.onload=init;

function gameloop(){
  window.requestAnimFrame(gameloop);

  var now=Date.now();
  deltaTime=now-lastTime;
  lastTime=now;
  drawBackground();
  drawgril();
  drawstars();
  control();
}

function drawBackground(){
  ctx.fillStyle="#393550";
  ctx.fillRect(0,0,w,h);
}

function drawgril(){
  ctx.drawImage(girl,100,150,600,300);
}

function mousemove(e){
  if(e.offsetX || e.layerX){
    var px=e.offsetX==undefined?e.layerX:e.offsetX;
    var py=e.offsetY==undefined?e.layerY:e.offsetY;

    if(px>100 && px<700 && py>150 && py<450){
      switchy=true;
    }
    else{
      switchy=false;
    }
    console.log(switchy);
  }
}
