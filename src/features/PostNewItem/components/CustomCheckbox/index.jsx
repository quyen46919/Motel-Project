import Checkbox from "@material-ui/core/Checkbox";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import React from "react";


const GrayCheckbox = withStyles({
  root: {
    color: "rgba(0, 0, 0, 0.54)",
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const customStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0 1rem",
}
const centerDiv = {
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
}
const textStyles = {
  color: "#20274d",
  marginLeft: "10px",
}

export default function CustomCheckbox({props}) {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div style={customStyles}>
        <div style={centerDiv}>
            <p style={textStyles}>{props}</p>
        </div>
        
        <FormControlLabel
        control={
          <GrayCheckbox
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
          />
        }
        />
      
    </div>
  );
}
