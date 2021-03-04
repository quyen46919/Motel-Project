import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },

}));
const buttonColor = {
  border: "1px solid #5392f9",
  background: "white",
  color: "#5392f9",
  height: "50px"
}
export default function UploadButton({title}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" style={buttonColor} component="span">
          {title}
        </Button>
      </label>
    </div>
  );
}
