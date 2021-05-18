import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";

const BodyText: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">
        Conway's game of life running in the DOM
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        A simple, yet surprising, cellular automaton. A no player game
        determined by its initial state.
      </Typography>
      <Box margin="16px"></Box>
      <Typography variant="h6">How to set initial state ?</Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="1. Click on randomize or draw directly on the board." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Press play and observe, or continue to draw to change some determined lifes. :)" />
        </ListItem>
      </List>
    </Box>
  );
};

export default BodyText;
