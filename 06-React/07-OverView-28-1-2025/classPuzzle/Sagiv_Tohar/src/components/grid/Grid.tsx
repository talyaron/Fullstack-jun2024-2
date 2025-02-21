import React, { useState } from "react";
import styles from './Grid.module.scss';

type CellValue = 'X' | 'O' | null;

const Grid: React.FC = () => {
    const [board, setBoard] = useState<CellValue[][]>(Array(3).fill(null).map(() => Array(3).fill(null)));
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
    const [winner, setWinner] = useState<'X' | 'O' | 'Draw' | null>(null);

    // Check if there is winner
    const checkWinner = (board: CellValue[][]): 'X' | 'O' | 'Draw' | null => {
        for (let row = 0; row < 3; row++) {
            if (board[row][0] && board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
                return board[row][0];
            }
        }
        for (let col = 0; col < 3; col++) {
            if (board[0][col] && board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
                return board[0][col];
            }
        }
        if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2];
        }
        if (board.flat().every(cell => cell !== null)) {
            return 'Draw';
        }

        return null;
    };

    const handleClick = (row: number, col: number) => {
        if (board[row][col] || winner) return;

        // update board
        const newBoard = [...board];
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);

        // Check if someone won
        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        } else {
            //Check if game has winnder
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            console.log(currentPlayer)
        }
    };
    // Reset Board
    const handleReset = () => {
        setBoard(Array(3).fill(null).map(() => Array(3).fill(null)));
        setWinner(null);
        setCurrentPlayer('X');
        console.log("Board has reset")
    };

    return (
        <div className={styles.game}>
            <div className={styles.message}>
                {winner ? (winner === 'Draw' ? "It's a Draw!" : `${winner} wins!`) : `Current Player: ${currentPlayer}`}
            </div>
            <div className={styles.board}>
                {board.map((row, rowIndex) => (
                    <div className={styles.row} key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <button
                                key={colIndex}
                                className={styles.cell}
                                onClick={() => handleClick(rowIndex, colIndex)}
                            >
                                {cell}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <button className={styles.resetButton} onClick={handleReset}>Reset Game</button>
        </div>
    );
};

export default Grid;
