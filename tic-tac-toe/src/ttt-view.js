class View {
  constructor(game, $el) {
    this.$grid = this.setupBoard();
    $el.append(this.$grid);
    this.game = game;
    this.bindEvents();
  }

  bindEvents() {
    let $cell = $(".cell");
    $cell.on("click", (e) => {
      this.makeMove($(e.target));
    });
  }

  makeMove($square) {
    if ($square.hasClass('unclicked_cell')) {
      $square.removeClass('unclicked_cell');
      $square.addClass('clicked_cell');
      $square.addClass(this.game.currentPlayer);
      let pos = $square.attr('id').split(",").map(Number);
      this.game.playMove(pos);
      if (this.game.isOver()) {
        if (this.game.winner()) {
          alert(`${this.game.winner()} has won!`);
        } else {
          alert('NO ONE WINS!');
        }
      }
    } else {
      alert("Please select an unclicked cell!")
    }
  }

  setupBoard() {
    let positions = {0: [0,0], 1: [0,1], 2: [0,2],
                     3: [1,0], 4: [1,1], 5: [1,2],
                     6: [2,0], 7: [2,1], 8: [2,2]};
    let $grid = $('<ul></ul>');

    for (let i = 0; i < 9; i++) {
      let $li = $('<li></li>');
      $li.addClass('cell unclicked_cell');
      $li.attr('id', positions[i]);
      $grid.append($li);
    }

    $grid.addClass('grid-styling');
    return $grid;
  }
}
module.exports = View;
