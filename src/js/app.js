import Board from './board';
import Game from './game';

const gamesBoard = new Board(4);
gamesBoard.createBoard();
const game = new Game(gamesBoard);
game.startGame();