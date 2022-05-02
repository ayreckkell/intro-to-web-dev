var canvasWidth = 900;
var canvasHeight = 500;

function startGame() {
  gameCanvas.start();

  //Player using our functions
  player = new createPlayer (40,40,20);

  //assign the block var with the value from create block
  block = new createBlock();
//assign scoreBoard
  scoreBoard = new createScoreBoard(10, 30);
}

var gameCanvas = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },

  stop : function(){
    //Player using our functions
    player = new createPlayer (40,40,20);

    //assign the block var with the value from create block
    block = new createBlock();
  //assign scoreBoard
    scoreBoard = new createScoreBoard(10, 30);
  }
}

//Creating var for fallspeed
var fallSpeed = 0;
//create a new interval
var interval = setInterval(updateCanvas, 20);

//Creating the player
var player;
//Creating a var for the y-postion
var playerYPostion = 250;

//Create and isjumping boolean
var isJumping = false;
//create a jumpspeed
var jumpSpeed = 0;

//Create blocks
var block;

//create a score of 0 to startGame
// var score = 0;

//create a variable to hold score

var scoreBoard;

//Function called createPlayer
function createPlayer(width, height, x) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = playerYPostion;

//Draw Function
this.draw = function(){
  ctx = gameCanvas.context;
  ctx.fillStyle = "#f1faee";
  ctx.fillRect(this.x, this.y, this.width, this.height);

}

  //make fall function
  this.makeFall = function() {
    if (!isJumping) {
    this.y += fallSpeed;
    fallSpeed += 0.1;
}
    //StopPlayer functions
    this.stopPlayer();
  }

//StopPlayer functions
  this.stopPlayer = function() {
    var ground = canvasHeight - this.height;
    if(this.y > ground) {
      this.y = ground;
    }
  }

  this.jump = function () {
    if (isJumping) {
      this.y -= jumpSpeed;
      jumpSpeed += 0.25;
    }
  }
}

function createBlock() {
  var width = randomNumber(10, 100);
  var height = randomNumber(10, 250);
  var speed = randomNumber(1, 10);

  this.x= canvasWidth;
  this.y= canvasHeight - height;

  this.draw = function() {
    ctx = gameCanvas.context;
    ctx.fillStyle = "#e63946";
    ctx.fillRect(this.x, this.y, width, height);
  }

this.attackPlayer = function() {
  this.x -= speed;

  //call the returntoattack functions
  this.returnToAttackPostion();
}

//create returntoattack function
this.returnToAttackPostion = function() {
  if(this.x < 0) {
    width = randomNumber(10, 100);
    height = randomNumber(50, 250);
    speed = randomNumber(5, 10);
    this.y = canvasHeight - height;
    this.x = canvasWidth;
    scoreBoard.score += 1;
  }
}
}

//Collision function

function Collision() {
  var playerLeft = player.x;
  var playerRight = player.x +player.width;
  var blockLeft = block.x;
  var blockRight = block.x + block.width;

  var playerBottom = player.y + player.height;
  var blockTop= block.y;

  if(playerRight > blockLeft &&
     playerLeft < blockLeft &&
     playerBottom > blockTop) {

      gameCanvas.stop();
     }
}

// creating score board function
function createScoreBoard(x, y){

  this.score = 0;
  this.x = x;
  this.y = y;
  this.draw = function(){
    ctx = gameCanvas.context;
    ctx.font = "25px ";
    ctx.fillStyle = "white"
    ctx.fillText( this.text, this.x, this.y);
  }
}
// function to redraw our player and make him fall
function updateCanvas() {

  //check for Collision you canvas updateCanvas
  Collision();

  ctx = gameCanvas.context;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  player.makeFall();
  player.draw();
  player.jump();

  block.draw();
  block.attackPlayer();

  scoreBoard.text = "SCORE:" + scoreBoard.score;
  scoreBoard.draw();
}

function resetJump() {
  jumpSpeed = 0;
  isJumping = false;
}

document.onkeyup = function(e) {
    if (e.keyCode == 32) {
        isJumping = true;
        setTimeout( function() { resetJump(); }, 1000);
    }
}

function randomNumber(min, max){
  return Math.floor( Math.random() * (max - min + 1) + min)
}
