

function hero(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.ahead = 0;
    this.update = function() {
        ctx = myGameArea.context;

              var img = document.getElementById("plane");
                ctx.drawImage(   document.getElementById("img2") ,this.x,this.y,this.width,this.height);
  
 
    }
    this.newPos = function() {
       // this.gravitySpeed += this.gravity;
       // this.x += this.speedX;
      //  this.y += this.speedY + this.gravitySpeed;
          this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;  
        this.hitBottom();
		this.hittop();
    }
    this.hitBottom = function() {
          var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
 this.hittop = function() {
          
        if (this.y < 0) {
            this.y = 0;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}



