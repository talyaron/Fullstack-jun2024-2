import { useState } from "react";
import { allPlayers, Player, stalemate, tiktakBoard } from "../Model/tiktaktoeModel";
function UseTikTakVm() {
  const [tikBoard, setTikBoard] = useState<string[][]>(tiktakBoard);
  const [players] = useState<Player[]>(allPlayers);
  const [playersTurn, setPlayersTurn] = useState<Player>(players[0]);
  const [winner, setWinner] = useState<Player | null| string>(null);
  
  function turnPlayed(i: number, j: number) {
    if (winner !== null) return;
    if(tikBoard[i][j] !== "")return;
    const mapCell = (rowIndex: number, colIndex: number, cell: string) => {
      if (rowIndex === i && colIndex === j) {
        return playersTurn.symbol;
      }
      return cell;
    };

    const mapRow = (row: string[], rowIndex: number) => {
      return row.map((cell, colIndex) => mapCell(rowIndex, colIndex, cell));
    };

    setTikBoard((prevBoard) => {
      const newBoard = prevBoard.map((row, rowIndex) => mapRow(row, rowIndex));

      checkWinCondition(newBoard, i, j);
      console.log(newBoard[i][j]);

      return newBoard;
    });
    const playerId = players.findIndex((player) => player === playersTurn);

    if (players[playerId + 1] !== undefined) {
      setPlayersTurn(players[playerId + 1]);
    } else setPlayersTurn(players[0]);
    
  }

  function winnerFound(mySymbol: string) {
    setWinner(playersTurn);
    console.log("the winner is :", mySymbol);
  }

  function checkStalemate(board: string[][]){
    for (const row of board) { 
      for (const cell of row) { 
        if (cell === "") {
          return ; 
        }
      }
    }
    setWinner(stalemate);
  }

  function checkWinCondition(board: string[][], i: number, j: number) {
    
    const mySymbol = board[i][j];
    if (mySymbol === "") return;
    console.log(board.length);

    for (let idx = 0; idx < board.length; idx++) {
      if (board[idx][j] !== mySymbol) break;
      console.log(board[idx][j]);
      if (idx === board.length - 1) {
        console.log("winner!");
        winnerFound(mySymbol);
        return;

      }
    }
    for (let jdx = 0; jdx < board.length; jdx++) {
      if (board[i][jdx] !== mySymbol) break;
      console.log(board[i][jdx]);
      if (jdx === board.length - 1) {
        console.log("winner!");
        winnerFound(mySymbol);
        return;

      }
    }

    checkDiagonals(mySymbol, board);
  }

  function checkDiagonals(mySymbol: string, board: string[][]) {
    for (let idx = 0; idx < board.length; idx++) {
      if (board[idx][idx] !== mySymbol) break;
      if (idx === board.length - 1) {
        console.log("winner!");
        winnerFound(mySymbol);
        return;

      }
    }

    for (let idx = 0; idx < board.length; idx++) {
      if (board[idx][board.length - 1 - idx] !== mySymbol) break;
      if (idx === board.length - 1) {
        console.log("winner!");
        winnerFound(mySymbol);
        return;
      }
    }
    checkStalemate(board);
   
  }
  return { tikBoard, winner, turnPlayed };
}

export default UseTikTakVm;
