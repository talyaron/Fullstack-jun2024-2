import { Board } from "../../../model/BoardModel";
import { ClickModel } from "../../../model/ClickModel";

export class GameVM {
  private board: Board;
  private clickModel: ClickModel;

  constructor(boardSize: number = 3) {
    this.board = new Board(boardSize);
    this.clickModel = new ClickModel();
  }

  getGrid(): string[][] {
    return this.board.grid;
  }

  getCurrentPlayer(): string {
    return this.clickModel.getCurrentPlayer();
  }

  makeMove(row: number, col: number): boolean {
    if (this.board.grid[row][col] !== "") return false;

    this.board.grid[row][col] = this.clickModel.getCurrentPlayer();
    return true;
  }

  switchPlayer(): void {
    this.clickModel.switchPlayer();
  }

  resetGame(): void {
    this.board = new Board(this.board.size);
    this.clickModel.resetPlayer();
  }

  checkWin(player: string): boolean {
    const size = this.board.size;
    const grid = this.board.grid;

    const rowWin = grid.some((row) => row.every((cell) => cell === player));
    const colWin = grid[0].some((_, col) => grid.every((row) => row[col] === player));

    const diagWin =
      grid.every((row, i) => row[i] === player) ||
      grid.every((row, i) => row[size - 1 - i] === player);

    return rowWin || colWin || diagWin;
  }

  isDraw(): boolean {
    return this.board.grid.flat().every((cell) => cell !== "");
  }
}
