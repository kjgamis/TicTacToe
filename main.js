var gameBoard = document.querySelector('.board');
var cells     = document.querySelectorAll('.board-cell');

cells.forEach( function(cell) {
  cell.addEventListener('click', function() {
    cell.innerText = 'X';
  });
});
