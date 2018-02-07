var starObj=function(){
  this.x;
  this.y;
  this.picNum;
  this.timer;

  this.xspeed;
  this.yspeed;
}

starObj.prototype.update=function(){
  this.x+=this.xspeed*deltaTime*0.004;
  this.y+=this.yspeed*deltaTime*0.004;

  if(this.x<100 || this.x>700){
    this.init();
    return;
  }
  if(this.y<150 || this.y>450){
    this.init();
    return;
  }

  this.timer+=deltaTime;
  if(this.timer>50){
    this.picNum+=1;
    this.picNum%=7;
    this.timer=0;
  }
}

starObj.prototype.init=function(){
  this.x=Math.random()*600+100;
  this.y=Math.random()*300+150;
  this.picNum=Math.floor(Math.random()*7);
  this.timer=0;

  this.xspeed=Math.random()*2-1;
  this.yspeed=Math.random()*2-1;
}

starObj.prototype.draw=function(){
  ctx.save();
  ctx.globalAlpha=life;
  ctx.drawImage(star,this.picNum*7,0,7,7,this.x,this.y,7,7);
  ctx.restore();
}

function drawstars(){
  for(var i=0;i<num;i++){
    stars[i].update();
    stars[i].draw();
  }
}

function control(){
  if(switchy){
    life+=0.03*deltaTime*0.05;
    if(life>1){
      life=1;
    }
  }else{
    life-=0.03*deltaTime*0.05;
    if(life<0){
      life=0;
    }
  }
}
