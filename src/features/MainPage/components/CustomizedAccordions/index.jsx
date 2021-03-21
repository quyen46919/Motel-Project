
import { Button } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../../components/Header/components/InputCheckbox';
import ListOption from '../ListOption';
import './styles.scss';


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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const typoStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase'
  }

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

  return (
    <form className="custom-option" onSubmit={handleSubmit(onSubmit)}>
      <Accordion square className="custom-option__test">
        <AccordionSummary>
          <Typography component={'span'} style={typoStyles}>Lọc theo yêu cầu</Typography>
        </AccordionSummary>
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
      
    </form>
  );
}
