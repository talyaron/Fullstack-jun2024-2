import { useEffect, useState } from "react";
import { CellModel } from "../../../model/cell/CellModel";

export function useTicTacToeVM() {
  const [cells, setCells] = useState<CellModel[]>([
    {
      XorY: "",
      played: false,
      _id: 1,
    },
    {
      XorY: "",
      played: false,
      _id: 2,
    },
    {
      XorY: "",
      played: false,
      _id: 3,
    },
    {
      XorY: "",
      played: false,
      _id: 4,
    },
    {
      XorY: "",
      played: false,
      _id: 5,
    },
    {
      XorY: "",
      played: false,
      _id: 6,
    },
    {
      XorY: "",
      played: false,
      _id: 7,
    },
    {
      XorY: "",
      played: false,
      _id: 8,
    },
    {
      XorY: "",
      played: false,
      _id: 9,
    },
  ]);

  function play(cellId: number) {
    try {

      console.log("played");
      console.log(cellId);
      
     
      const updatedCells = cells.map(cell =>
        cell._id === cellId
          ? { ...cell, XorY: 'y', played: true }
          : cell
      );
      setCells(updatedCells);
      console.log(updatedCells);
    } catch (error) {
      console.error(error);
    }

  }

  return {
    cells,
    play,
    setCells,
  };
}
