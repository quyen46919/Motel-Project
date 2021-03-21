import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      minWidth: 125,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
        flex: "1",
        width: "120px"
    }
  }));
  // CustomSelect.propTypes = {
  //   formControl: PropTypes.object.isRequired,
  //   name: PropTypes.string.isRequired,

  //   disabled: PropTypes.bool,
  // };
export default function CustomSelect({props , title, form}) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState(1);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  // console.log(form.control);

  return (
    // <Controller
    //   control={form.control}
    // >
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
    // </Controller>
  );
}
