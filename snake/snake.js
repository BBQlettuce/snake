(function () {
  window.SnakeGame = window.SnakeGame || {};

  var Snake = window.SnakeGame.Snake = function(initialPos) {
    this.dir = "N";
    this.segments = [initialPos];
  }

  Snake.prototype.move = function() {
    var currentHead = this.segments[0];
    switch (this.dir) {
      case "N":
        var newHead = [currentHead[0], currentHead[1] - 1];
        break;
      case "E":
        var newHead = [currentHead[0] + 1, currentHead[1]];
        break;
      case "S":
        var newHead = [currentHead[0], currentHead[1] + 1];
        break;
      case "W":
        var newHead = [currentHead[0] - 1, currentHead[1]];
        break;
    }
    this.segments.unshift(newHead);
    this.lastSegment= this.segments.pop();
  }



  Snake.prototype.turn = function(newDir) {
    this.dir = newDir;
  }

  Snake.prototype.grow = function() {
    this.segments.push(this.lastSegment);
  }

  })();
