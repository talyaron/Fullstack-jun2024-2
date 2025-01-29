import React, { useState } from "react";
import styles from "./ticTacToe.module.scss";

const Grid = () => {
  const [grid, setGrid] = useState(Array(9).fill("")); // מערך עבור מצב כל משבצת
  const [isXNext, setIsXNext] = useState(true); // משתנה למעקב אחרי התור

  function check(index: number) {
    if (grid[index] === "") {
      const newGrid = [...grid];
      newGrid[index] = isXNext ? "X" : "O"; 
      setGrid(newGrid);
      setIsXNext(!isXNext); 
      console.log(isXNext)
    }
  }

  function restGame() {
    setGrid(Array(9).fill(""));
    setIsXNext(true);
  }

  return (
    <div className={styles.grid}>
      {grid.map((value, index) => (
        <div
          key={index}
          className={styles.cell}
          onClick={() => check(index)} 
        >
          {value}
        </div>
      ))}
      <p>tourn now for : {isXNext? "X" : "O"}</p>
      <br />
      <button onClick={restGame}>Rest</button>
    </div>
  );
};

export default Grid;
