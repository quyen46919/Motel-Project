import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedAccordions from '../MainPage/components/CustomizedAccordions';
import CreateIcon from '@material-ui/icons/Create';
import './styles.scss'

const useStyles = makeStyles((theme) => ({
  styles: {
      margin: theme.spacing(1),
      width: "40px!important",
      height: "40px",
      border: "none",
      background: "white!important",
      // backgroundColor:"#ec5252!important",
      // border:"#ec5252!important",
      color: "#3f51b5!important",
      ["@media (max-width: 375px)"]: {
        width: "40px"
      }
    },
    // dialog : {
    //   height: "auto",
    //   width: "500px!important"
    // }
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
      >
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Tắt bảng lọc
          </Button>
          
        </DialogActions>
        <DialogContent className="dialog">
          <CustomizedAccordions/>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
