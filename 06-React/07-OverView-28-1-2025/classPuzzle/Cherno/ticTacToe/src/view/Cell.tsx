import { MouseEventHandler } from "react";
import CellModel from "../models/cellModel";

interface props
{
    cell: CellModel
    onClick: () => void;
}

const cell: React.FC<props> = ({ cell, onClick }) =>
{
    return(
        <div id={cell.id.toString()} className="cell" onClick={onClick}>
            {cell.player}
        </div>
    )
}

export default cell;