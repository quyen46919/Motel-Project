
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useForm } from 'react-hook-form';
import CheckBox from '../../../../components/CheckBox';
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

export default function ListOption() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const {register, handleSubmit, errors, control} = useForm();


  const onSubmit = (values) => {
    console.log("FORM DATA: ", values);
  }

  return (
    <>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component={'span'}>Tiện ích</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} className="custom-option__option--wrapper">
            <CheckBox props="Chổ để xe"/>
            <CheckBox props="Quạt"/>
            <CheckBox props="Điều hòa"/>
            <CheckBox props="Wifi"/>
            <CheckBox props="Toilet riêng"/>
            <CheckBox props="Máy nước nóng"/>
            <CheckBox props="Camera an ninh"/>
            <CheckBox props="Chỗ đổ rác"/>
            <CheckBox props="Tủ chứa đồ"/>
            <CheckBox props="khu nấu ăn"/>
            <CheckBox props="Chỗ phơi đồ"/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component={'span'}>Loại nhà trọ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <CheckBox props="Chung chủ"/>
            <CheckBox props="Không chung chủ"/>
            <CheckBox props="Căn hộ"/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component={'span'}>Sắp xếp theo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <CheckBox props="Từ cao xuống thấp"/>
            <CheckBox props="Từ thấp đến cao"/>
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
    </>
  );
}
