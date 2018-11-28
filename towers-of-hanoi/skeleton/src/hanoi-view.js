class HanoiView {
  constructor(hanoiGame, $el) {
    this.game = hanoiGame;
    $el.append(this.setupTowers());
    this.bindEvents();
  }

  bindEvents() {
    let $stack = $(".stack");
    $stack.on("click", (e) => {
      this.makeMove($(e.target));
    });
  }

  // need to curry this
  makeMove() {
    alert("Move made!");
  }

  setupTowers() {
    let $towers = $('<ul></ul><ul></ul><ul></ul>');
    $towers.addClass('stack')
    for(let i = 1; i <= 3; i++) {
      $towers.first().append($(`<li></li>`));
      $towers.first().children().last().addClass('disc');
      $towers.first().children().last().addClass(`size${i}`);
    }
    return $towers;
  }
}

module.exports = HanoiView;
