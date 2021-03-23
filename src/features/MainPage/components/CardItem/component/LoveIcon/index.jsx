import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import MuiAlert from '@material-ui/lab/Alert';
import { Button, Snackbar } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(0)
    },
  },
  icon: {
    // color: "white",
    transform: "translateY(3px)"
  },
}));



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

function LoveIcon(props) {
  const classes = useStyles();
  return (
    <SvgIcon {...props}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
        className={classes.icon}
      />
    </SvgIcon>
  );
}

export default function SvgLoveIcons() {
  const classes = useStyles();
  const [color, setColor] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setColor(true);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };



  return (
    <div className={classes.root}>
      <LoveIcon 
        color={color == false ? "action" : "secondary"} 
        onClick={handleClick}
      />

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Đã thêm vào danh sách yêu thích
          {/* {Abc} */}
        </Alert>
      </Snackbar>
    </div>

  );
}
