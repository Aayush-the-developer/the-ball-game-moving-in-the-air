var ball = { //key : value
  x:20,
  y:30,
  r:30,
  xspeed:0,
  yspeed:0, 
  color:["blue","red","green","purple"],
 
};
var Student = {
  name : "Aayush",
  grade : 8,
  roll_no : 21,
  favorite_subject: "coding",
  marks : [30,35,40,50]
  
};
function setup() 
{
  createCanvas(400, 400);
 
}

function draw() 
{
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[3]);
  ball.xspeed = 3;
  ball.x= ball.x + ball.xspeed;
    text("The game is developed by "+Student.name,200,200)
}

