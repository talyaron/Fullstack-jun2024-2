import React, { useEffect, useState } from "react";
import styles from "./ticTacToe.module.scss";

const Grid = () => {
  const [grid, setGrid] = useState(Array(9).fill("")); // מערך עבור מצב כל משבצת
  const [isXNext, setIsXNext] = useState(true); // משתנה למעקב אחרי התור
  const [isXwinners, setIsXwinners] = useState(false); //
  const [isOwinners, setIsOwinners] = useState(false); //
  const [isDraw, setIsDraw] = useState(false); //

  function check(index: number) {
    if (grid[index] === "") {
      const newGrid = [...grid];
      newGrid[index] = isXNext ? "X" : "O"; 
      setGrid(newGrid);
      setIsXNext(!isXNext); 
      console.log(isXNext)
    }
    if (grid[0] === "X" && grid[1] === "X" && grid[2] === "X")
      setIsXwinners(true);
    else if (grid[3] === "X" && grid[4] === "X" && grid[5] === "X") 
      setIsXwinners(true);
    else if (grid[6] === "X" && grid[7] === "X" && grid[8] === "X") 
      setIsXwinners(true);
    else if (grid[0] === "X" && grid[3] === "X" && grid[6] === "X") 
      setIsXwinners(true);
    else if (grid[1] === "X" && grid[4] === "X" && grid[7] === "X")
      setIsXwinners(true);
    else if (grid[2] === "X" && grid[5] === "X" && grid[8] === "X")
      setIsXwinners(true);
    else if (grid[0] === "X" && grid[4] === "X" && grid[8] === "X")
      setIsXwinners(true);
    else if (grid[2] === "X" && grid[4] === "X" && grid[6] === "X")
      setIsXwinners(true);
    else if (grid[0] === "O" && grid[1] === "O" && grid[2] === "O") 
      setIsOwinners(true);
    else if (grid[3] === "O" && grid[4] === "O" && grid[5] === "O")
      setIsOwinners(true);
    else if (grid[6] === "O" && grid[7] === "O" && grid[8] === "O")
      setIsOwinners(true);
    else if (grid[0] === "O" && grid[3] === "O" && grid[6] === "O")
      setIsOwinners(true);
    else if (grid[1] === "O" && grid[4] === "O" && grid[7] === "O")
      setIsOwinners(true);
    else if (grid[2] === "O" && grid[5] === "O" && grid[8] === "O")
      setIsOwinners(true);
    else if (grid[0] === "O" && grid[4] === "O" && grid[8] === "O")
      setIsOwinners(true);
    else if (grid[2] === "O" && grid[4] === "O" && grid[6] === "O")
      setIsOwinners(true);
    else if (grid.every(cell => cell)) {
      setIsDraw(true);
    }
  }

  function restGame() {
    setGrid(Array(9).fill(""));
    setIsXNext(true);
    console.clear();
    setIsXwinners(false);
    setIsOwinners(false);
    setIsDraw(false);
  }


  return (
    <div className={styles.grid}>
   {isXwinners && <h1 className={styles.winner}>X wins!</h1>}
   {isOwinners && <h1 className={styles.winner}>O wins!</h1>}
   {isDraw && <h1 className={styles.winner}>It's a draw!</h1>}

      {grid.map((value, index) => (
        <div
          key={index}
          className={styles.cell}
          onClick={() => check(index)} 
          onMouseUp={() => check(index)}
        >
          {value}
        </div>
      ))}
      <p style={{backgroundColor:"yellow"}}>tourn now for : {isXNext? "X" : "O"}</p>
      <br />
      <button style={{backgroundColor:"tomato"}} onClick={restGame}>Rest</button>
    </div>
  );
};

export default Grid;
