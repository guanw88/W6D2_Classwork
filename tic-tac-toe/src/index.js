const View = require('./ttt-view');
const Game = require('../node_solution/game');

  $(() => {
    const game = new Game();
    const view = new View(game, $('.ttt'));

  });
