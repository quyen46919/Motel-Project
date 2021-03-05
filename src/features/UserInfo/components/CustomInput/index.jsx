import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "35ch"
  }
}));

export default function CustomInput({data}) {
  const classes = useStyles();

  return (
      <div>
        <TextField
          required
          id="standard-required"
          label={data.label}
          defaultValue={data.value}
          className={classes.root}
        />
      </div>
  );
}
