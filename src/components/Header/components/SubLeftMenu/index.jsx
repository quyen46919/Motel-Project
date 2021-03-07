import { Typography } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import React, {useState} from "react";
import ListOption from '../../../../features/MainPage/components/ListOption';
import CustomSelect from '../CustomSelect';
import './styles.scss';

const useStyles = makeStyles({
  list: {
    width: '80vw'
  },
  ["@media (max-width: 2200px) and (min-width: 600px)"] : {

    list: {
      width: '50vw'
    }
    
  },
  fullList: {
    width: "auto"
  }
});
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);




export default function SubLeftMenu() {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const abc = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase'
  }
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
  const area = [
    {
      value: 1,
      label: 'Hải Châu',
    },
    {
      value: 2,
      label: 'Cẩm Lệ',
    },
    {
      value: 3,
      label: 'Ngũ Hành Sơn',
    },
    {
      value: 4,
      label: 'Liên Chiểu',
    },
    {
      value: 5,
      label: 'Sơn Trà',
    },
  ];
  const prices = [
    {
      value: 1,
      label: 'Dưới 1 triệu',
    },
    {
      value: 2,
      label: '1 - 1.5 triệu',
    },
    {
      value: 3,
      label: '1.5 - 2 triệu',
    },
    {
      value: 4,
      label: '2 - 2.5 triệu',
    },
    {
      value: 5,
      label: 'Trên 2.5 triệu',
    },
  ];
  const acreage = [
    {
      value: 1,
      label: 'Dưới 15m2',
    },
    {
      value: 2,
      label: '15 - 20m2',
    },
    {
      value: 3,
      label: '20 - 25m2',
    },
    {
      value: 4,
      label: '25 - 30m2',
    },
    {
      value: 5,
      label: 'Trên 30m2',
    },
  ];
const title = {
    value1: "Khu vực",
    value2: "Giá phòng",
    value3: "Diện tích"
}

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography component={'span'}>Tìm kiếm theo</Typography>
          </AccordionSummary>
          <AccordionDetails className="accor-details">
            <TextField id="standard-basic" label="Tên đường" />
          </AccordionDetails>
          <AccordionDetails className="accor-details">
            <CustomSelect props={area} title={title.value1}/>
            <CustomSelect props={prices} title={title.value2}/>
          </AccordionDetails>
          <AccordionDetails className="accor-details">
          <CustomSelect props={acreage} title={title.value3}/>
          </AccordionDetails>
        </Accordion>
        <ListOption/>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="sub-menu" variant="contained" color="primary">
            LỌC THEO NHU CẦU
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
