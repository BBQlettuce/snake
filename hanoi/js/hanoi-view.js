(function () {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.bindEvents();
    this.render();
    this.firstTowerSelected = null;
  };

  View.prototype.bindEvents = function () {
    this.$el.on("click", "ul", this.clickTower.bind(this));
  };

  View.prototype.clickTower = function (e) {
    console.log("click");
    var $towers = $("ul");
    var $towerSelected = $(e.currentTarget);
    var index = $towers.index($towerSelected);

    if( this.firstTowerSelected === null) {
      this.firstTowerSelected = index;
      $towerSelected.toggleClass("selected");
    }
    else {
      this.game.move(this.firstTowerSelected, index);
      $($towers[this.firstTowerSelected]).toggleClass("selected");
      this.render();
      this.firstTowerSelected = null;
    }

    if( this.game.isWon()) {
      var $h2 = $("<h2></h2>");
      $h2.text("A winner is you");
      this.$el.append($h2);
    }


  }

  View.prototype.setupTowers = function () {
    var $towers = $("<section></section>");
    $towers.addClass("towers group");

    for (var j = 0; j < 3; j++) {
      var $tower = $("<ul></ul>");
      for (var i = 0; i < 3; i++) {
        var $li = $("<li></li>");
        $tower.append($li);
      }
      $tower.addClass("tower");
      $towers.append($tower);
    }

    this.$el.append($towers);
  };

  View.prototype.render = function () {
    for (var towerNum = 0; towerNum < 3; towerNum++) {
      for (var discPos = 0; discPos < 3; discPos++) {
        var currentDisc = this.game.towers[towerNum][discPos];
        var $lis = $("li");

        var currentNumber = (towerNum * 3) + (2 - discPos);
        var $currentPosition = $($lis[currentNumber]);

        if (currentDisc === undefined) {
          $currentPosition.removeClass();
        }
        else {
          switch(currentDisc) {
            case 1:
              $currentPosition.addClass("one");
              break;
            case 2:
              $currentPosition.addClass("two");
              break;
            case 3:
              $currentPosition.addClass("three");
              break;
          }
        }
      }
    }
  };

})();
