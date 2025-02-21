import { useTicTacToeVM } from "./TicTacToeVM";
import styles from './TicTacToe.module.scss'
export function TicTacToe() {
  const {resetGame, isXNext, handleCellClick, winner, board} = useTicTacToeVM();

  return (
<div className={styles.tictactoe}>
  <h1>Tic Tac Toe</h1>
  <p className={`${styles.status} ${winner === "Draw" ? styles.draw : winner ? styles.winner : styles.currentPlayer}`}>
    {winner ? winner === "Draw" ? "It's a draw!" : `Winner: ${winner}` : `Current Player: ${isXNext ? "X" : "O"}`}
  </p>
  <div className={styles.board}>
    {board.map((cell, index) => (
      <button key={index} onClick={() => handleCellClick(index)} className={`${styles.cell} ${cell ? styles[cell] : ""}`}>
        {cell}
      </button>
    ))}
  </div>
  <button onClick={resetGame} className={styles.resetbutton}>
    Reset Game
  </button>
</div>
  );
}
