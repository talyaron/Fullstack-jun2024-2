export class ClickModel {
   currentPlayer: string;

    constructor(startingPlayer: string = "X") {
        this.currentPlayer = startingPlayer;
    }

    getCurrentPlayer(): string {
        return this.currentPlayer;
    }

    switchPlayer(): void {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X"; 
    }

    resetPlayer(): void {
        this.currentPlayer = "X"; 
    }
}
