import { Button, ButtonGroup } from "@material-ui/core";
import { Casino, Delete, Pause, PlayArrow } from "@material-ui/icons";
import React from "react";
import { FRAME_PER_SECOND } from "../lib/constants";
import useTimer from "../lib/useTimer";

interface ControlsProps {
  resetBoard: Function;
  randomizeBoard: Function;
  resolveOneTurn: Function;
}

const Controls: React.FC<ControlsProps> = ({
  resetBoard,
  randomizeBoard,
  resolveOneTurn,
}) => {
  const { start, stop, isRunning } = useTimer(() => {
    resolveOneTurn();
  }, 1000 / FRAME_PER_SECOND);

  const onPlayButtonClick = () => {
    isRunning ? stop() : start();
  };

  return (
    <ButtonGroup color="default">
      <Button
        onClick={onPlayButtonClick}
        variant="contained"
        startIcon={isRunning ? <Pause /> : <PlayArrow />}
      >
        {isRunning ? "pause" : "play"}
      </Button>
      <Button
        variant="contained"
        startIcon={<Delete />}
        onClick={() => resetBoard()}
      >
        reset
      </Button>
      <Button
        variant="contained"
        startIcon={<Casino />}
        onClick={() => randomizeBoard()}
      >
        randomize
      </Button>
    </ButtonGroup>
  );
};

export default Controls;
