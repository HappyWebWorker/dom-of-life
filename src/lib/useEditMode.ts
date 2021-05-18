import { useMemo, useState } from "react";
import { debounce } from "lodash";

import { Coord } from "./board";

type EditMode = "none" | "draw" | "erase";

const useEditMode = (onEdit: Function) => {
  const [editMode, setEditMode] = useState<EditMode>("none");

  const onMouseDown = (coord: Coord, isAlive: boolean) => {
    setEditMode(isAlive ? "erase" : "draw");
    onEdit(coord, !isAlive);
  };

  const onMouseUp = () => {
    setEditMode("none");
  };

  const onMouseEnter = useMemo(
    () =>
      debounce((coord) => {
        if (editMode === "none") return;

        onEdit(coord, editMode === "draw");
      }, 1),
    [editMode, onEdit]
  );

  return { onMouseDown, onMouseUp, onMouseEnter };
};

export default useEditMode;
