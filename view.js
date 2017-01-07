snakeGame.view = {
  init: function() {
    this.gameWrapper = document.getElementsByTagName('snake-game')[0];
  },
  render: function(board, snakeBody) {
    this.gameWrapper.innerHTML = "";
    var grid = board.grid;

    // for(var i = 0; i < grid.length; i++) {
    //   var cell = document.createElement('DIV');
    //   cell.classList.add('row');
    //   cell.classList.add('cell');
    //
    //   if (grid[i].value) cell.classList.add(grid[i].value);
    //
    //   cell.style.top = grid[i].y * 100;
    //   cell.style.left = grid[i].x * 100;
    //
    //   this.gameWrapper.appendChild(cell);
    // }


    for(coor in grid) {
      var cell = document.createElement('DIV');
      cell.classList.add('cell');

      if (grid[coor].value) cell.classList.add(grid[coor].value);

      cell.style.top = grid[coor].y * 100;
      cell.style.left = grid[coor].x * 100;

      this.gameWrapper.appendChild(cell);
    }
  }
}
