import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  styles: {
      margin: theme.spacing(1),
      width: "350px",
      height: "60px",
      backgroundColor:"#ec5252!important",
      border:"#ec5252!important",
      color: "white",
      ["@media (max-width: 375px)"]: {
        width: "250px"
      }
    },
}));

export default function ConfirmPopUp({props}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.styles}>
        {props.btnTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`${props.title}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          <NavLink to="/login">{props.btn1}</NavLink>
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            {props.btn2}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
