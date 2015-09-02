(function () {
  window.SnakeGame = window.SnakeGame || {};

  var Board = SnakeGame.Board = function () {
    this.grid = [];

    for(var x = 0; x < Board.SIZE; x++) {
      this.grid.push([]);
      for(var y = 0; y < Board.SIZE; y++) {
        this.grid[x].push(".");

      }

    }

    this.snake = new SnakeGame.Snake([15,15]);
    this.applePosition = [10,10];
  }

  Board.SIZE = 30;

  Board.prototype.isOnApple = function() {
    var head = this.snake.segments[0];
    if (head[0] === this.applePosition[0] && head[1] === this.applePosition[1]) {
      this.snake.grow();
      this.generateApple();
    }
  }

  Board.prototype._updateBoard = function() {
    this.isOnApple();

    for(var x = 0; x < Board.SIZE; x++) {
      for(var y = 0; y < Board.SIZE; y++) {
        this.grid[x][y] = ".";
      }
    }

    for(var i = 0; i < this.snake.segments.length; i++){
      var currentSegment = this.snake.segments[i];
      var segmentX = currentSegment[0];
      var segmentY = currentSegment[1];
      this.grid[segmentX][segmentY] = "S";
    }

    this.grid[this.applePosition[0]][this.applePosition[1]] = "A";
  }

  Board.prototype.render = function () {
    this._updateBoard();

    for(var x = 0; x < Board.SIZE; x++) {
      var currentLine = "";
      for(var y = 0; y < Board.SIZE; y++) {
        currentLine += this.grid[y][x];
      }
      console.log(currentLine);
    }
  }

  Board.prototype.generateApple = function () {
    var emptyPosFound = false;
    while (emptyPosFound === false) {
      var randomX = Math.floor(Math.random() * 30);
      var randomY = Math.floor(Math.random() * 30);
      if (this.grid[randomX][randomY] === ".") {
        emptyPosFound = true;
        this.applePosition = [randomX, randomY];
      }
    }
  }

})();
