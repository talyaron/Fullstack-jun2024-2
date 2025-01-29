import styles from './Board.module.scss'
import CellModel from '../models/cellModel';
import useBoardVM from './BoardVM';
import Cell from './Cell'

const Board = () =>
{
    const { board, ifFirstTurn, gameState, onClick, resetBoard } = useBoardVM();

    return(
        <div >
            <h1>{ifFirstTurn ? "X" : "O"} {gameState}</h1>
            <div className={styles["board"]}>
                {board.map((row: CellModel[], i: number) => (
                    <div key={i} className="row">
                        {row.map((cell: CellModel, j:number) => (
                            <Cell key={j} cell={cell} onClick={() => onClick(cell)}/>
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={resetBoard}>Reset Board</button>
        </div>
    )
}

export default Board;