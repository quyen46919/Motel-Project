import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      minWidth: "35ch",

    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
        flex: "1",
        width: "35ch",
        // display: "flex",
        // justifyContent: "flex-start!important"
    }
  }));

export default function CustomSelect({props , title}) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState(1);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-select-currency"
          select
          label={title}
          value={currency}
          onChange={handleChange}
          className={classes.textField}
        >
          {props.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
}
