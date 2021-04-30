import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedAccordions from '../MainPage/components/CustomizedAccordions';
import CreateIcon from '@material-ui/icons/Create';
import './styles.scss'

const useStyles = makeStyles((theme) => ({
  styles: {
      width: "40px!important",
      height: "40px",
      border: "none",
      background: "white!important",
      padding: 0,
      color: "#1379ff!important",
      ["@media (max-width: 375px)"]: {
        width: "40px"
      }
    },
}));

export default function Filter(props) {
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
        <CreateIcon/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialog"
      >
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <CloseIcon/>
          </Button>
          
        </DialogActions>
        <DialogContent className="dialog__block">
          <CustomizedAccordions/>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
