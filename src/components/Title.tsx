import React from "react";
import { createStyles, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  console.log(theme.palette.primary.main);
  return createStyles({
    dom: {
      color: theme.palette.primary.main,
    },
    life: {
      color: theme.palette.secondary.main,
    },
  });
});

const Title: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography variant="h2">
      <span>{"<"}</span>
      <span className={classes.dom}>{"DOM"}</span>
      <span>{"Of"}</span>
      <span className={classes.life}>{"Life"}</span>
      <span>{" />"}</span>
    </Typography>
  );
};

export default Title;
