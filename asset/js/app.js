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



