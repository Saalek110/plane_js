
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
     ctx = myGameArea.context;
     ctx.fillStyle = color;
     ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
