
function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
    
        if (hero.crashWith(myObstacles[i])) {
heart--;
if (heart<0)
            return;
        }
 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 130;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 180
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap)+50;
		
        myObstacles.push(new component(40, height, "#887922", x, 0));
        myObstacles.push(new component(130, x - height - gap, "#888000", x, height + gap));
    
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }

 
        ctx = myGameArea.context;
        text="SCORE: " + myGameArea.frameNo;
           ctx.font = "20px" + " "+"Consolas" ;
            ctx.fillStyle = "black";
           ctx.fillText(text, 240, 30);

document.getElementById("the_heart").innerHTML="heart= " + JSON.stringify(heart);
    hero.newPos();
    hero.update();
}
