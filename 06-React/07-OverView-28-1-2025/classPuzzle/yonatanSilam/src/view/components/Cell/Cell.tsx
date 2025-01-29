import React from "react";
import { CellModel } from "../../../model/cell/CellModel";
import style from "./Cell.module.scss";

import { useTicTacToeVM } from "../../pages/ticTacToe/ticTacToeVM";
interface Props {
  cell: CellModel;
}
const Cell: React.FC<Props> = ({ cell }) => {
  const { play } = useTicTacToeVM();
  return (
    <div onClick={()=>play(cell._id)} className={style.cell}>
      <div>{cell.XorY}</div>
    </div>
  );
};

export default Cell;
