import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    },
    transform : "translateY(-2px)"
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function CheckBox({props}) {
  const [data1, setData1] = React.useState({
    checkedA: true
  });

  const handleCheckboxChange = (event) => {
    setData1({ ...data1, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={data1.checkedG}
            onChange={handleCheckboxChange}
            name="checkedG"
          />
        }
        label={props}
      />
    </FormGroup>
  );
}
