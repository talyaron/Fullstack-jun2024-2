import React, { useEffect, useState } from "react";
import style from "./TikTakToe.module.scss";
import { tiktakBoard } from "../Model/tiktaktoeModel";

function TiktTakToe() {
  const [tikBoard, setBoard] = useState<number[][]>(tiktakBoard);
  const [circleTurn, setCircleTurn] = useState<boolean>(false);
  const [winner, setWinner] = useState<number>(0);

  function turnPlayed(i: number, j: number) {
    if (winner !== 0) return;
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === i && colIndex === j && cell === 0
            ? circleTurn
              ? 1
              : 2
            : cell
        )
      );
      checkWinCondition(newBoard, i, j);
      console.log(newBoard[i][j]);

      return newBoard;
    });
    setCircleTurn(!circleTurn);
  }
  function checkWinCondition(board: number[][], i: number, j: number) {
    const mySymbol = board[i][j];
    if (mySymbol === 0) return;

    if (
      board[0][j] === mySymbol &&
      board[1][j] === mySymbol &&
      board[2][j] === mySymbol
    ) {
      console.log("the winner is:", mySymbol);
      setWinner(mySymbol);
    } else if (
      board[i][0] === mySymbol &&
      board[i][1] === mySymbol &&
      board[i][2] === mySymbol
    ) {
      setWinner(mySymbol);
      console.log("the winner is :", mySymbol);
    } else if (
      board[0][0] === mySymbol &&
      board[1][1] === mySymbol &&
      board[2][2] === mySymbol
    ) {
      setWinner(mySymbol);
      console.log("the winner is :", mySymbol);
    } else if (
      board[2][0] === mySymbol &&
      board[1][1] === mySymbol &&
      board[0][2] === mySymbol
    ) {
      setWinner(mySymbol);
      console.log("the winner is :", mySymbol);
    }
  }

  return (
    <div>
        {winner !== 0 ? (
       <button onClick={()=>window.location.reload()} className={style.reset}>reset</button>
      ) : (
        ""
      )}
      {winner === 1 ? (
        <h4 className={style.winner}>winner is: ⭕</h4>
      ) : winner === 2 ? (
        <h4 className={style.winner}>winner is: ❌</h4>
      ) : (
        ""
      )}
      <div className={style.boardContainer}>
        {tikBoard.map((box, i) =>
          box.map((cell, j) => (
            <div key={j} className={style.box} onClick={() => turnPlayed(i, j)}>
              <div className={style.symbol}>
                {cell === 1 ? "⭕" : cell === 2 ? "❌" : ""}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TiktTakToe;
