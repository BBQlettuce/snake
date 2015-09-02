(function () {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  };



  View.prototype.setupTowers = function () {
    var $towers = $("<ul></ul>");
    $towers.addClass("towers");

    var $tower1 = $("<ul></ul>");
    for (var i = 0; i < 3; i++) {
      var $li = $("<li></li>");
      $tower1.append($li);
    }
    $tower1.addClass("tower");

    var $tower2 = $("<ul></ul>");
    for (var i = 0; i < 3; i++) {
      var $li = $("<li></li>");
      $tower2.append($li);
    }
    $tower2.addClass("tower");


    var $tower3 = $("<ul></ul>");
    for (var i = 0; i < 3; i++) {
      var $li = $("<li></li>");
      $tower3.append($li);
    }
    $tower3.addClass("tower");

    $towers.append($tower1);
    $towers.append($tower2);
    $towers.append($tower3);

    this.$el.append($towers);

    console.log("asdf");
  };

  View.prototype.render = function () {
    for (var towerNum = 0; towerNum < 3; towerNum++) {
      for (var discPos = 0; discPos < 3; discPos++) {
        // if empty, toggle empty
        // if not, display a number in appropriate position
        var currentDisc = this.game.towers[towerNum][discPos];
        // var $towers = $(".tower");
        // var $tower = $towers[towerNum];
        // var $disc = $tower[discNum];

        var $lis = $("li");

        var currentNumber = (towerNum * 3) + (2 - discPos);
        var $currentPosition = $($lis[currentNumber]);
        console.log($currentPosition);

        if (currentDisc === undefined) {
          $currentPosition.text("");
        }
        else {
          $currentPosition.text(currentDisc);
        }

      }
    }
  };

})();
