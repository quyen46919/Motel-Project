
import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { useController } from "react-hook-form";
import './styles.scss'


export default function Input(props) {
    const { field } = useController(props);

    return (
      <div className="checkbox">
        <input
          className="checkbox__input"
          {...field}
          type="checkbox"
          checked={field.value}
          onChange={(e) => field.onChange(e.target.checked)}
        />
        {props.props}
      </div>
    );
  }