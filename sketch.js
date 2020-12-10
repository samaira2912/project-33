var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState = "play";
var divisionHeight=300;
var particle;

var turn = 0;
var score =0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 textSize(20)
 text("500",30,520)
 textSize(20)
 text("500",100,520)
 textSize(20)
 text("200",180,520)
 textSize(20)
 text("200",260,520)
 textSize(20)
 text("100",340,520)
 textSize(20)
 text("100",420,520)
 textSize(20)
 text("200",500 ,520)
 textSize(20)
 text("200",580 ,520)
 textSize(20) 
 text("500",660 ,520)
 textSize(20)
 text("500",740,520)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 //  if(frameCount%60===0){
   //  particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     //score++;
 //S  }


 if (particle != null) { 
   particle.display(); if (particle.body.position.y > 760) { if (particle.body.position.x < 300) { score = score + 500; particle = null; if (count >= 5) gameState = "end"; } else if (particle.body.position.x < 600 && particle.body.position.x > 301) { score = score + 100; particle = null; if (count >= 5) gameState = "end"; } else if (particle.body.position.x < 900 && particle.body.position.x > 601) { score = score + 200; particle = null; if (count >= 5) gameState = "end"; } } }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState !== "end"){
        particle = new Particle(mouseX,10,10,10);
    count++;

  }
}