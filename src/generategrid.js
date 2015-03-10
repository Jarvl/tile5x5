//Lauch board
var board = new Board(5, 5, 10);

function Board(boardwidth, boardheight, squarepx) {
  this.tiles = [];
  var currentTile = 0;
  for (var y = 0; y < boardheight; y++) {
   for (var x = 0; x < boardwidth; x++) {
      if (x == 2 && y == 2) {
       this.tiles.push(new Tile (x, y, x * squarepx, y * squarepx, true));
      }
     else {
      this.tiles.push(new Tile (x, y, x * squarepx, y * squarepx, false));
     }
      this.tiles[currentTile].announceTileLocation();
      this.tiles[currentTile].drawTile();
      currentTile++;
    }
  }
}

function Tile(x, y, topLeftLocX, TopLeftLocY, center) {
  this.xCoord = x;
  this.yCoord = y;
  this.topLeftLocX = topLeftLocX;
  this.yCoord = y;
  this.TopLeftLocY = TopLeftLocY;
  this.center = center;
  this.announceTileLocation = function(){
   console.log("Tile [" + this.xCoord + "], [" + this.yCoord + "] center = " + center);
  };
  this.drawTile = function(){
   //Draw tile here
  };
}