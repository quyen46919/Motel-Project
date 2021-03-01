import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
CustomSelect.propTypes = {
    data : PropTypes.object.isRequired,
};


export default function CustomSelect({data}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
            {data.title}
        </InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value="">{data.value1}</option>
          <option value={10}>{data.value2}</option>
          <option value={20}>{data.value3}</option>
          <option value={30}>{data.value4}</option>
          <option value={30}>{data.value5}</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
