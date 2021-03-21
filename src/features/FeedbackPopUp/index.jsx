import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  styles: {
      margin: theme.spacing(1),
      width: "350px",
      height: "60px",
      // backgroundColor:"#ec5252!important",
      // border:"#ec5252!important",
      color: "#3f51b5!important",
      ["@media (max-width: 375px)"]: {
        width: "250px"
      }
    },
}));


export default function FeedBackPopUp({props}) {
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
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Lời nhắn của bạn"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {props.btn1}
          </Button>
          <Button onClick={handleClose} color="primary">
            {props.btn2}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
