var runSound = new Audio('asset/sound/run.mp3');
runSound.loop = true;

var jumpSound = new Audio("asset/sound/jump.mp3");

var deadSound = new Audio("asset/sound/dead.mp3");





var playerID = document.getElementById("player");

var runWorkId = 0;
var runImageNumber = 1;

function run(){
    runImageNumber++;

    if(runImageNumber == 9){
        runImageNumber = 1;
    }

    playerID.src = "asset/image/Run (" + runImageNumber + ").png";

}

