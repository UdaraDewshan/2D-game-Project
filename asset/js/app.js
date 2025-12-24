var runSound = new Audio('asset/sound/run.mp3');
runSound.loop = true;

var jumpSound = new Audio("asset/sound/jump.mp3");

var deadSound = new Audio("asset/sound/dead.mp3");


function keyCheck(event){

    //enter key
    if(event.which == 13){


        if(runWorkerId == 0){
           runWorkerId = setInterval(run,100);
            runSound.play();

           moveBackgroundWorkerId = setInterval(moveBackground,100);
           scoreWorkerId = setInterval(updateScore,50);
           creatBlockWorkerId = setInterval(creatBlock,100);
           moveBlockWorkerId =  setInterval(moveBlock,100);
        }
    }

    //space key
    if(event.which == 32){

        if (jumpWorkerId == 0){

            clearInterval(runWorkerId);
            runSound.pause();

            runWorkerId = -1;

            jumpWorkerId = setInterval(jump, 100);
            jumpSound.play();

        }
    }
}


var playerID = document.getElementById("player");

var runWorkerId = 0;
var runImageNumber = 1;

function run(){
    runImageNumber++;

    if(runImageNumber == 9){
        runImageNumber = 1;
    }

    playerID.src = "asset/image/Run (" + runImageNumber + ").png";

}


var backgroundId = document.getElementById("background");

var backgroundX = 0;
var moveBackgroundWorkerId = 0;

function moveBackground(){

    backgroundX = backgroundX - 20;

    backgroundId.style.backgroundPositionX = backgroundX + "px";
}

//score
var score = document.getElementById("score");
var newScore = 0;
var scoreWorkerId = 0;

function updateScore(){
    newScore++;
    score.innerHTML = newScore;
}


//jump
var jumpImageNumber = 1;
var jumpWorkerId = 0;
var playerMarginTop = 390;

function jump(){
   jumpImageNumber++;
   //fly
   if(jumpImageNumber <= 7){ //jump images 2-7

    playerMarginTop = playerMarginTop - 40;
    playerId.style.marginTop = playerMarginTop +"px";

   }

   //land
   if(jumpImageNumber >= 8){ //jump image 8-1

    playerMarginTop = playerMarginTop + 40;
    playerId.style.marginTop = playerMarginTop + "px";

   }
  


   if(jumpImageNumber ==13){
      jumpImageNumber = 1;

      clearInterval(jumpWorkerId);
      jumpWorkerId = 0;

      runWorkerId = setInterval(run,100);
      runSound.play();
      

      if(scoreWorkerId==0){
         scoreWorkerId = setInterval(updateScore,100);
      }


      if(moveBackgroundWorkerId == 0){
        moveBackgroundWorkerId = setInterval(moveBackground,100);
      }

      if(creatBlockWorkerId == 0){
        creatBlockWorkerId = setInterval(creatBlock,100);
      }

      if(moveBlockWorkerId==0){
         moveBlockWorkerId = setInterval(moveBlock,100);
      }

   }

   playerId.src= "Jump (" + jumpImageNumber + ").png";
}
