import { MenuItem, Select, Typography } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import React from "react";
import { Controller, useForm } from 'react-hook-form';
import Input from '../InputCheckbox';
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
  },
  textField: {
    minWidth: "90%!important",
    gap: "0 2rem",
    justifyContent: "center",
    alignItems: "center",
    "& i input ": {
      minWidth: "90%!important",
    }
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

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
  

  // handle data change
  const {register, handleSubmit, errors, control} = useForm({
    defaultValues: {
      carPark: false,
      fan: false,
      airCondition: false,
      wifi: false,
      waterHeater: false,
      toilet: false,
      camera: false,
      desc: false,
      asc: false,
      trashCan: false,
      kitchen: false,
      board: false,
      dryingGround: false,
      coOwner: false,
      noCoOwner: false,
      apartment: false
    },
    mode: "onChange"
   });


  const onSubmit = (values) => {
    console.log("FORM DATA: ", values);
  }

  const list = (anchor) => (
    <form
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onSubmit={handleSubmit(onSubmit)}
    >
      <List>
        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography component={'span'}>Tìm kiếm theo</Typography>
          </AccordionSummary>

          <AccordionDetails className="accor-details">
            <TextField 
              id="outlined-basic"
              variant="outlined"
              className={classes.textField}
            />
            <Controller 
              control={control}
              as={Select}
              name="location"
              inputRef={register}
              id="outlined-basic"
              variant="outlined"
              className={classes.textField}
              defaultValue="haichau"
            >
              <MenuItem value="haichau">Hải Châu</MenuItem>
              <MenuItem value="camle">Cẩm Lệ</MenuItem>
              <MenuItem value="lienchieu">Liên Chiểu</MenuItem>
              <MenuItem value="sontra">Sơn Trà</MenuItem>
              <MenuItem value="nguhanhson">Ngũ Hành Sơn</MenuItem>
            </Controller>
            <Controller 
              control={control}
              as={Select}
              name="prices"
              inputRef={register}
              id="outlined-basic"
              variant="outlined"
              className={classes.textField}
              defaultValue="1tr"
            >
              <MenuItem value="1tr">Dưới 1 triệu</MenuItem>
              <MenuItem value="1tr5-2tr">1.5 - 2 triệu</MenuItem>
              <MenuItem value="2tr-2.5tr">2 - 2.5 triệu</MenuItem>
              <MenuItem value="2.5tr-3tr">2.5 - 3 triệu</MenuItem>
              <MenuItem value="3tr">Hơn 3 triệu</MenuItem>
            </Controller>
            <Controller 
                control={control}
                as={Select}
                inputRef={register}
                name="acreage"
                id="outlined-basic"
                variant="outlined"
                className={classes.textField}
                defaultValue="15"
              >
                <MenuItem value="15">Dưới 15m2</MenuItem>
                <MenuItem value="20">15-20m2</MenuItem>
                <MenuItem value="25">20-25m2</MenuItem>
                <MenuItem value="30">25-30m2</MenuItem>
                <MenuItem value="35">Hơn 30m2</MenuItem>
              </Controller>
          </AccordionDetails>
        </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component={'span'}>Tiện ích</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} className="custom-option__option--wrapper">
          <Input 
            control={control} 
            name="carPark" 
            props="Chỗ để xe"
          />
          <Input 
            control={control} 
            name="fan" 
            props="Quạt"
          />
          <Input 
            control={control} 
            name="airCondition" 
            props="Điều hòa"
          />
          <Input 
            control={control} 
            name="wifi" 
            props="Wifi"
          />
          <Input 
            control={control} 
            name="toilet" 
            props="Toilet riêng"
          />
          <Input 
            control={control} 
            name="waterHeater" 
            props="Điều hòa"
          />
          <Input 
            control={control} 
            name="camera" 
            props="Camera an ninh"
          />
          <Input 
            control={control} 
            name="trashCan" 
            props="Chỗ đổ rác"
          />
          <Input 
            control={control} 
            name="board" 
            props="Tủ chứa đồ"
          />
          <Input 
            control={control} 
            name="kitchen" 
            props="Bếp / Chỗ nấu ăn"
          />
          <Input 
            control={control} 
            name="dryingGround" 
            props="Chỗ phơi đồ"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component={'span'}>Loại nhà trọ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
          <Input 
            control={control} 
            name="coOwner" 
            props="Chung chủ"
          />
          <Input 
            control={control} 
            name="noCoOwner" 
            props="Không chung chủ"
          />
          <Input 
            control={control} 
            name="apartment" 
            props="Căn hộ"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component={'span'}>Sắp xếp theo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
          <Input 
            control={control} 
            name="asc" 
            props="Từ cao xuống thấp"
          />
          <Input 
            control={control} 
            name="desc" 
            props="Từ thấp đến cao"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Button type="reset" variant="outlined" color="primary" className="custom-option__btn">
            Đặt lại
          </Button>
          <Button type="submit" variant="contained" color="primary" className="custom-option__btn">
            Áp dụng
          </Button>
        </AccordionSummary>
      </Accordion>
      </List>
    </form>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button 
            onClick={toggleDrawer(anchor, true)} 
            className="sub-menu" 
            variant="contained" 
            color="primary"
          >
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
