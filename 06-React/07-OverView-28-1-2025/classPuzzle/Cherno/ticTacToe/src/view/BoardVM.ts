import { useState } from "react"
import CellModel from "../models/cellModel";


const useBoardVM = () =>
{   
    const [ size, setSize ] = useState(3);
    const [ gameState, changeState ] = useState<String>("turn");
    const [ ifFirstTurn, switchTurn ] = useState<Boolean>(true);
    const [ board, setBoard ] = useState<Array<Array<CellModel>>>(createBoard(size));

    const onClick = (cell: CellModel) =>
    {
        if (cell.player !== "-") return;
        if (ifFirstTurn) cell.player = "X";
        else cell.player = "O";
        if (checkWinner(ifFirstTurn ? 'X' : 'O')) return;
        switchTurn(!ifFirstTurn);
    }

    const resetBoard = () =>
    {
        setBoard(createBoard(size));
        switchTurn(true);
        changeState("turn");
    }

    const checkWinner = (player:string):boolean =>
    {
        if (board.some((row, i) => 
                row.every((_, j) => board[i][j].player == player) ||
                row.every((_, j) => board[j][i].player == player)
            ) ||
            Array.from({ length : size }).every((_, i) => board[i][i].player == player) ||
            Array.from({ length : size }).every((_, i) => board[i][size - i - 1].player == player)
        )
        {
            changeState("wins");
            return true;
        }
        if (!board.some((row) => row.find(cell => cell.player === '-'))) 
        {
            changeState("draws");
            return true;
        }
        return false;
    }

    return { board, ifFirstTurn, gameState, onClick, resetBoard };
}

function createBoard(size: number): CellModel[][]
{
    const board = Array.from({ length: size }, (_, i) => 
        Array.from({ length: size }, (_, j) => 
            ({ id:[i, j] , player: "-" })));
    return board;
}

export default useBoardVM;