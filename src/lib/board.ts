export type Board = boolean[][];
export type Coord = {
  x: number;
  y: number;
};

const cloneBoard = (board: Board) => {
  const rowCount = board.length;
  const columnCount = board[0].length;
  const clone: Board = [];

  for (let iy = 0; iy < rowCount; iy++) {
    clone[iy] = [];
    for (let ix = 0; ix < columnCount; ix++) {
      clone[iy][ix] = board[iy][ix];
    }
  }

  return clone;
};

export const generateBoard = (rowCount: number, columnCount: number) => {
  const board: Board = [];

  for (let iy = 0; iy < rowCount; iy++) {
    board[iy] = [];
    for (let ix = 0; ix < columnCount; ix++) {
      board[iy][ix] = false;
    }
  }

  return board;
};

export const generateRandomBoard = (rowCount: number, columnCount: number) => {
  const board: Board = [];

  for (let iy = 0; iy < rowCount; iy++) {
    board[iy] = [];
    for (let ix = 0; ix < columnCount; ix++) {
      board[iy][ix] = Math.random() < 0.5;
    }
  }

  return board;
};

export const editBoardCell = (board: Board, coord: Coord, isAlive: boolean) => {
  const newBoard = cloneBoard(board);
  newBoard[coord.y][coord.x] = isAlive;

  return newBoard;
};

const cellResolver =
  (board: Board) =>
  ({ x, y }: Coord): boolean => {
    // prettier-ignore
    const neighboursCoords: Coord[] = [
      [x-1, y-1], [x, y-1], [x+1, y-1],
      [ x-1, y ],           [ x+1, y ],
      [x-1, y+1], [x, y+1], [x+1, y+1]
    ].map(coordTuple => ({x: coordTuple[0], y: coordTuple[1]}));

    const isCoordInBoard = (coord: Coord) =>
      coord.x >= 0 &&
      coord.y >= 0 &&
      coord.x < board[0].length &&
      coord.y < board.length;

    const isCurrentlyAlive = board[y][x];

    const aliveNeighboursCount = neighboursCoords
      .filter(isCoordInBoard)
      .map(({ x, y }) => board[y][x]) // get all neighbours
      .filter((neighbour) => neighbour === true).length; // count alive ones

    const isAliveNextTurn = isCurrentlyAlive
      ? aliveNeighboursCount === 2 || aliveNeighboursCount === 3
      : aliveNeighboursCount === 3;

    return isAliveNextTurn;
  };

export const getNextTurnBoard = (board: Board): Board => {
  const getNextTurnCell = cellResolver(board);
  const nextCells = board.map((row, iy) =>
    row.map((_isAlive, ix) => getNextTurnCell({ x: ix, y: iy }))
  );

  return nextCells;
};
