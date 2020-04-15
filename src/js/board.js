export default class Board {
  constructor(boardSize) {
    this.boardSize = boardSize ** 2;
    this.board = document.getElementByClassName('board');
  }

  createBoard() {
    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'field';
      itemBoard.id = `field${i}`;
      this.board.appendChild(itemBoard);

      // <div id="board">
      //   <div class="field" id=`field${i}`></div>
      // </div>
    }
  }
}