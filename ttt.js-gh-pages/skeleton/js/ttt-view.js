(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    this.$el.on("click", "li", this.makeMove.bind(this));
  };

  View.prototype.makeMove = function ($square) {
    var $tiles = $("li");
    var $li = $($square.currentTarget);
    var index = $tiles.index($li);

    var currentPosition = [Math.floor(index / 3), (index % 3)]
    var symbol = this.game.currentPlayer;

    try {
      this.game.playMove(currentPosition);
      $li.addClass("occupied");
      $li.text(symbol);
    }
    catch(e) {
      alert("Invalid move");
    }

    if(this.game.isOver()) {
      this.winCleanUp();
    };

  };

  View.prototype.winCleanUp = function() {
    var $h2 = $("<h2></h2>")
    var winner = this.game.winner();
    if(winner === null) {
      $h2.text("It's a draw!")
    }
    else {
      $winnerTiles = $("li:contains('" + winner + "')");
      $winnerTiles.addClass("winner");
      $winnerTiles.removeClass("occupied");
      
      $(".occupied").addClass("loser");

      $h2.text("A winner is " + this.game.winner());
    }
    this.$el.append($h2);
    this.$el.off("click"); // disables listeners at end of game
  }

  View.prototype.setupBoard = function () {
    console.log("hello");
    var $ul = $("<ul></ul>");
    $ul.addClass("grid");
    $ul.addClass("group");
    for (var i = 0; i < 9; i++) {
      var $li = $("<li></li>");
      $ul.append($li);
    }
    this.$el.append($ul);
  };
})();
