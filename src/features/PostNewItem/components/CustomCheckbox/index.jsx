import Checkbox from "@material-ui/core/Checkbox";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const GrayCheckbox = withStyles({
  root: {
    color: "rgba(0, 0, 0, 0.54)",
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  customStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0 1rem",
    ["@media (max-width: 320px)"]: {
      width: "200px!important"
    }
  },
  centerDiv : {
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textStyles : {
    color: "#20274d",
    marginLeft: "10px",
  }
}));


export default function CustomCheckbox({props}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.customStyles}>
        <div className={classes.centerDiv}>
            <p className={classes.textStyles}>{props}</p>
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
