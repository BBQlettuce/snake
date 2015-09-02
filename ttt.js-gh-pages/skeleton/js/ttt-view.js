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

  // View.prototype.playMove = function(e) {
  //   // console.log(e);
  //   $li = $("li");
  //   var $square = $(e.currentTarget);
  //   console.log($square);
  //   console.log($li.index($square));
  //   this.makeMove($square);
  // };

  View.prototype.makeMove = function ($square) {
    var $tiles = $("li");
    var $li = $($square.currentTarget);
    var index = $tiles.index($li);

    var currentPosition = [Math.floor(index / 3), (index % 3)]
    console.log(currentPosition);
    var symbol = this.game.currentPlayer;
    this.game.playMove(currentPosition);
    $li.addClass("occupied");
    $li.text(symbol);

    if(this.game.isOver()) {
      var $h2 = $("<h2></h2>");
      $h2.text("A winner is " + this.game.winner());
      console.log($h2);
      this.$el.append($h2);
    };

  };

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
