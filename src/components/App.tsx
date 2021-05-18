import React from "react";
import {
  Container,
  createMuiTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@material-ui/core";

import { CELL_ALIVE_COLOR, CELL_DEAD_COLOR } from "../lib/constants";
import useBoard from "../lib/useBoard";
import Title from "./Title";
import SVGBoard from "./SVGBoard";
import Controls from "./Controls";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: CELL_ALIVE_COLOR,
    },
    secondary: {
      main: CELL_DEAD_COLOR,
    },
  },
});

const App: React.FC = () => {
  const { board, editCell, reset, randomize, resolveOneTurn } = useBoard();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid container item xs={12} justify="center">
            <Title />
          </Grid>
          <Grid container item xs={12} justify="center">
            <SVGBoard board={board} onCellEdit={editCell} />
          </Grid>
          <Grid container item xs={12} justify="center">
            <Controls
              resetBoard={reset}
              randomizeBoard={randomize}
              resolveOneTurn={resolveOneTurn}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
