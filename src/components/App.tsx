import React from "react";
import {
  Container,
  createMuiTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import { CELL_ALIVE_COLOR, CELL_DEAD_COLOR } from "../lib/constants";
import useBoard from "../lib/useBoard";
import Title from "./Title";
import SVGBoard from "./SVGBoard";
import Controls from "./Controls";
import BodyText from "./BodyText";

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
      <Container style={{ height: "100vh" }}>
        <Grid container spacing={1} style={{ height: "100%" }}>
          <Grid container item xs={12} justify="center" alignItems="center">
            <Title />
          </Grid>
          <Grid container item xs={12} justify="center" alignItems="flex-start">
            <SVGBoard board={board} onCellEdit={editCell} />
          </Grid>
          <Grid container item xs={12} justify="center" alignItems="flex-start">
            <Controls
              resetBoard={reset}
              randomizeBoard={randomize}
              resolveOneTurn={resolveOneTurn}
            />
          </Grid>
          <Grid container item xs={12} justify="center" alignItems="flex-start">
            <BodyText />
          </Grid>
          <Grid container item xs={12} justify="center" alignItems="flex-end">
            <Typography>♥</Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
