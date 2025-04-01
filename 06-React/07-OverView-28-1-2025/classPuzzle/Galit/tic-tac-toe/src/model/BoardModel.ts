export class Board {
  size: number;
  grid: string[][];

  constructor(size: number = 3) {
    this.size = size;
    this.grid = Array(size)
      .fill("")
      .map(() => Array(size).fill(""));
  }
}
