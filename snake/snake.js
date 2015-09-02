(function () {
  window.SnakeGame = window.SnakeGame || {};

  var Snake = window.SnakeGame.Snake = function(){
    this.dir = "N";
    this.segments = [];
  }

  Snake.prototype.move = function() {
    var currentHead = this.segments[0];
    switch (this.dir) {
      case "N":
        var newHead = new Coord(currentHead[0], currentHead[1] - 1);
        break;
      case "E":
        var newHead = new Coord(currentHead[0] + 1, currentHead[1]);
        break;
      case "S":
        var newHead = new Coord(currentHead[0], currentHead[1] + 1);
        break;
      case "W":
        var newHead = new Coord(currentHead[0] - 1, currentHead[1]);
        break;
    }
    this.segments.unshift(newHead);
    this.segments.pop();
  }

  Snake.prototype.turn = function(newDir) {
    this.dir = newDir;
  }

  })();
