import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  styles: {
    margin: theme.spacing(1),
    width: "350px",
    height: "60px"
  },
}));

export default function CustomButton({title}) {
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
