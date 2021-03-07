import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  styles: {
    margin: theme.spacing(1),
    width: "350px",
    height: "60px",
    backgroundColor:"#ec5252!important",
    border:"#ec5252!important",
    color: "white",
    ["@media (max-width: 375px)"]: {
      width: "250px"
    }
  },
}));

export default function CustomButton2({title}) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className={classes.styles}
      >
        {title}
      </Button>
    </div>
  );
}
