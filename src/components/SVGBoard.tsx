import React from "react";
import { Box, createStyles, makeStyles } from "@material-ui/core";

import {
  BOARD_COLUMN_COUNT,
  BOARD_FRAME_PIXEL_SIZE,
  BOARD_ROW_COUNT,
  CELL_ALIVE_COLOR,
  CELL_DEAD_COLOR,
  CELL_PIXEL_SIZE,
} from "../lib/constants";
import { Board } from "../lib/board";
import useEditMode from "../lib/useEditMode";

const useStyles = makeStyles((_theme) =>
  createStyles({
    boardFrame: {
      width: `${
        BOARD_COLUMN_COUNT * CELL_PIXEL_SIZE + BOARD_FRAME_PIXEL_SIZE * 2
      }px`,
      height: `${
        BOARD_ROW_COUNT * CELL_PIXEL_SIZE + BOARD_FRAME_PIXEL_SIZE * 2
      }px`,
      border: `${BOARD_FRAME_PIXEL_SIZE}px solid #fff`,
    },
  })
);

interface SVGBoardProps {
  board: Board;
  onCellEdit: Function;
}

const SVGBoard: React.FC<SVGBoardProps> = ({ board, onCellEdit }) => {
  const classes = useStyles();
  const { onMouseDown, onMouseUp, onMouseEnter } = useEditMode(onCellEdit);

  return (
    <Box className={classes.boardFrame}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {board.map((row, iy) =>
          row.map((isAlive, ix) => (
            <rect
              key={`${ix}${iy}`}
              x={ix * CELL_PIXEL_SIZE}
              y={iy * CELL_PIXEL_SIZE}
              width={CELL_PIXEL_SIZE}
              height={CELL_PIXEL_SIZE}
              fill={isAlive ? CELL_ALIVE_COLOR : CELL_DEAD_COLOR}
              style={{ cursor: "pointer" }}
              onMouseDown={() => onMouseDown({ x: ix, y: iy }, isAlive)}
              onMouseEnter={() => onMouseEnter({ x: ix, y: iy })}
              onMouseUp={() => onMouseUp()}
            />
          ))
        )}
      </svg>
    </Box>
  );
};

export default SVGBoard;
