import React, { useState } from "react";
import { GameVM } from "./GameVM";
import styles from './Game.module.scss'


const Game: React.FC = () => {
  const [gameVM] = useState(new GameVM(3));
  const [grid, setGrid] = useState(gameVM.getGrid());
  const [winner, setWinner] = useState<string | null>(null);

  const handleCellClick = (row: number, col: number) => {
    if (grid[row][col] !== "" || winner) return; 

    if (gameVM.makeMove(row, col)) {
      setGrid([...gameVM.getGrid()]);

      if (gameVM.checkWin(gameVM.getCurrentPlayer())) {
        setWinner(gameVM.getCurrentPlayer());
      } else if (gameVM.isDraw()) {
        setWinner("Draw");
      } else {
        gameVM.switchPlayer();
      }
    }
  };

  const resetGame = () => {
    gameVM.resetGame();
    setGrid([...gameVM.getGrid()]);
    setWinner(null);
  };

  return (
    <div>
      <h1 className={styles.h1} >Tic Tac Toe</h1>
      {winner ? (
        <div>
          <h2 className={styles.h2}> {winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}</h2>
          <button onClick={resetGame} className={styles.button} >Play Again</button>
        </div>
      ) : (
        <h2>Current Player: {gameVM.getCurrentPlayer()}</h2>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)" }}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              className={styles.grid}
            >
              {cell}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Game;
