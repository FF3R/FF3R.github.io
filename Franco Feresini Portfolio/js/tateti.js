const cells = document.querySelectorAll('.tateti-cell');
const restartBtn = document.getElementById('restart');
let turn = 'X';
let board = Array(9).fill('');

const winningCombinations = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function handleClick(e) {
  const idx = e.target.dataset.cell;
  if (board[idx] !== '' || checkWinner()) return;
  board[idx] = turn;
  e.target.textContent = turn;
  if (checkWinner()) {
    setTimeout(() => alert(`${turn} gana!`), 100);
  } else if (!board.includes('')) {
    setTimeout(() => alert('¡Empate!'), 100);
  } else {
    turn = turn === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  return winningCombinations.some(comb =>
    comb.every(i => board[i] === turn)
  );
}

function startGame() {
  board.fill('');
  turn = 'X';
  cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', startGame);
