import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(0)
    }
  }
}));

function ShareIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  const classes = useStyles();
  const [color, setColor] = useState(false);

  return (
    <div className={classes.root}>
      <ShareIcon color={color == false ? "action" : "primary"} onClick={() => setColor(!color)}/>
    </div>
  );
}
