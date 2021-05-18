import { useState } from "react";
import {
  Coord,
  generateBoard,
  generateRandomBoard,
  editBoardCell,
  getNextTurnBoard,
} from "./board";
import { BOARD_COLUMN_COUNT, BOARD_ROW_COUNT } from "./constants";

const useBoard = () => {
  const [board, setBoard] = useState(
    generateBoard(BOARD_ROW_COUNT, BOARD_COLUMN_COUNT)
  );

  const editCell = (coord: Coord, isAlive: boolean) => {
    setBoard((oldBoard) => editBoardCell(oldBoard, coord, isAlive));
  };

  const reset = () => {
    setBoard(() => generateBoard(BOARD_ROW_COUNT, BOARD_COLUMN_COUNT));
  };

  const randomize = () => {
    setBoard(() => generateRandomBoard(BOARD_ROW_COUNT, BOARD_COLUMN_COUNT));
  };

  const resolveOneTurn = () => {
    setBoard((oldBoard) => getNextTurnBoard(oldBoard));
  };

  return { board, editCell, reset, randomize, resolveOneTurn };
};

export default useBoard;
