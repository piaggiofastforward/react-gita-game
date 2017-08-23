const generator = require('generate-maze');

// Width and height == 4
const maze = generator(20);
maze.forEach(row => {
  row.forEach(item => {
    item.energy = Math.floor(Math.random() * 5) ? 1 : 0;
  });
}); // generate energyPod

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
} // get random integer from min to max

const sx = getRandomInteger(0, 5);
const ex = getRandomInteger(15, 19);
const sy = getRandomInteger(0, 19);
const ey = getRandomInteger(0, 19);
maze[sy][sx].start = 1;
maze[sy][sx].energy = 0;
maze[ey][ex].end = 1;
maze[ey][ex].energy = 0;

window.addEventListener('keydown', checkArrow);

function checkArrow(event) {
  const keyValue = event.keyCode;
  const left = 37;
  const up = 38;
  const right = 39;
  const down = 40;

  if (keyValue === left) window.appState.player.direction = 'left';
  if (keyValue === right) window.appState.player.direction = 'right';
  if (keyValue === up) window.appState.player.direction = 'top';
  if (keyValue === down) window.appState.player.direction = 'bottom';
}

function checkCollision(x, y, direction) {
  const board = window.appState.board;
  const value = {
    block: false,
    energy: 0,
  };

  if (direction === 'right' && x < 19) {
    value.block = board[y][x + 1].left;
    value.energy = board[y][x + 1].energy;
  }
  if (direction === 'left' && x > 0) {
    value.block = board[y][x - 1].right;
    value.energy = board[y][x - 1].energy;
  }
  if (direction === 'bottom' && y < 19) {
    value.block = board[y + 1][x].top;
    value.energy = board[y + 1][x].energy;
  }
  if (direction === 'top' && y > 0) {
    value.block = board[y - 1][x].bottom;
    value.energy = board[y - 1][x].energy;
  }
  return value;
}

function Player(player) {
  const direction = player.direction;
  let x = player.x;
  let y = player.y;
  let styles = {};

  const collisionVal = checkCollision(x, y, direction);

  if (!collisionVal.block) {
    if (direction === 'right' && x < 19) x += 1;
    if (direction === 'left' && x > 0) x -= 1;
    if (direction === 'bottom' && y < 19) y += 1;
    if (direction === 'top' && y > 0) y -= 1;

    window.appState.player.x = x;
    window.appState.player.y = y;

    if (collisionVal.energy === 1) {
      window.appState.player.score += 1;
      window.appState.board[y][x].energy = 0;
      console.log(window.appState.player.score);
    }
  }

  const xPercent = x * 100 / 20;
  const yPercent = y * 100 / 20;
  const roateDeg = (styles = {
    left: `${xPercent}%`,
    top: `${yPercent}%`,
    transition: 'all 200ms linear',
  });

  return React.createElement('div', {
    className: `player ${direction}`,
    style: styles,
  });
}

function Square(square) {
  let classVal = 'square';
  const img = React.createElement('img', { src: './assets/energyPod.svg' });
  const squares = square.map((item, i) => {
    const style = {};
    if (item.bottom === false) style.borderBottom = 'none';
    if (item.top === false) style.borderTop = 'none';
    if (item.left === false) style.borderLeft = 'none';
    if (item.right === false) style.borderRight = 'none';
    classVal = item.energy
      ? 'square dot'
      : item.end === 1 ? 'square flag' : 'square';
    return React.createElement('div', {
      key: i,
      className: classVal,
      style,
    });
  });
  return squares;
}

function Score(player) {
  return React.createElement(
    'div',
    null,
    React.createElement('span', null, player.name),
    React.createElement('span', null, '  ', player.score, ' pts.'),
  );
}

function Board(state) {
  const board = state.board;
  const rows = board.map((item, i) =>
    React.createElement('div', { key: i, className: 'row' }, Square(item)),
  );
  return React.createElement(
    'div',
    { className: 'board' },
    Player(state.player),
    rows,
  );
}

function App(state) {
  return React.createElement(
    'div',
    { className: 'game' },
    React.createElement('div', null, Board(state)),
  );
}

// -----------------------------------------------------------------------------
// App State
// -----------------------------------------------------------------------------
const appState = {
  board: maze.slice(0),
  player: {
    name: 'playerName:',
    score: 0,
    direction: 'right',
    x: sx,
    y: sy,
  },
};

window.appState = appState;

// -----------------------------------------------------------------------------
// Render Loop
// -----------------------------------------------------------------------------
const rootEl = document.getElementById('app');
const renderTime = 200;

function renderNow() {
  ReactDOM.render(App(appState), rootEl);
}

renderNow();
