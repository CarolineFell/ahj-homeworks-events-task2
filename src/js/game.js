export default class Game {
  constructor(newBoard) {
    this.newBoard = newBoard;
    this.boardSize = newBoard.boardSize;
    this.cellPrevious = 0;
    this.celCurrent = 0;
    this.hit = 0;
    this.hitPoints = document.getElementById('points');
    this.missed = 0;
    this.interval = 0;
  }

  startGame() {
    this.newBoard.board.addEventListener('click', (e) => {
      this.clickCell(e);
    });
    this.jumpImg();
  }

  clickCell(e) {
    if (e.target.id !== 'goblin') {
      return;
    }
    this.addHitPoints();
    this.clearCell(e.target);
  }

  addHitPoints() {
    this.missed = 0;
    this.hit += 1;
    this.hitPoints.innerHTML = this.hit;
  }

  /* eslint-disable */
  clearCell(e) {
    const Goblin = e;
    Goblin.parentNode.innerHTML = '';
  }

  moveToAnotherCell() {
    this.interval = setInterval(() => {
      this.checkPlayerMove();
    }, 1000);
  }
  
  checkPlayerMove() {
    do {
      this.cellCurrent = Math.floor(Math.random() * this.boardSize); // true
    } while (this.cellCurrent === this.cellPrevious); // false

    if (this.cellPrevious >= 0) {
      const indexPrevious = document.getElementById(`field${this.oldPosition}`);
      indexPrevious.innerHTML = '';
    }
    const indexCurrent = document.getElementById(`field${this.cellCurrent}`);
    indexCurrent.innerHTML = '<img id = "goblin" src = "./goblin.png">';
    this.cellPrevious = this.cellCurrent;
    this.missed += 1;
    if (this.missed > 5) {
      clearInterval(this.interval);
      alert('GAME OVER');
    }
    if (this.hit === 10) {
      alert('YOU WON');
    }
  }
}