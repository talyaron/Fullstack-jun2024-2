import React from "react";
import { CellModel } from "../../../model/cell/CellModel";
import style from "./Cell.module.scss";
import { useTicTacToeVM } from "../../pages/ticTacToe/ticTacToeVM";

interface Props {
  cell: CellModel;
  play: (cellId: number) => void;
}

const Cell: React.FC<Props> = ({ cell, play }) => {
  return (
    <button onClick={() => play(cell._id)} className={style.cell}>
      <div>{cell.XorY}</div>
    </button>
  );
};

export default Cell;
