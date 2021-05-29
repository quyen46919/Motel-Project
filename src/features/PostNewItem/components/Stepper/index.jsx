import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from '../Step1';
import Step2 from '../Step2';
import LastStep from '../LastStep';
import { useForm } from 'react-hook-form';
import './styles.scss';
import Step3 from '../Step3';
import Step4 from '../Step4';
import Step4BackUp from '../Step4BackUp';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    height: "50px",
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonStyles:{
    height: "50px",
    background: "#1379ff!important",
  }
}));


function getSteps() {
  return ['Loại hình trọ', 'Thông tin về phòng trọ','Mô tả tiện ích', 'Upload ảnh','Vị trí','Xác thực'];
}

export default function CustomStepper() {
  
  const [formValues, setFormValues] = React.useState({
    formality: 1,
    name: '',
    phone: '',
    houseNumber: '1',
    prices: '',
    acreage: '',
    mezzanine: '',
    maxPeople: '',
    elec: '',
    water: '',
    sameRoom: '',
    details: ''
  })

  const onSubmit = (values) => {
    console.log("FORM DATA: ", values);
  }

  const getStep1Values = (values) => {
    console.log(values);
    setFormValues({...formValues, formality: values});
  }

  const getStep2Values = (values) => {
    console.log(values);
      setFormValues({
        ...formValues, 
        name: values.name, 
        phone: values.phone,
        houseNumber: values.houseNumber,
        prices: values.prices,
        acreage: values.acreage,
        mezzanine: values.mezzanine,
        maxPeople: values.maxPeople,
        elec: values.elec,
        water: values.elec,
        sameRoom: values.sameRoom,
        details: values.details
      });
      console.log(formValues);
  }
  const getStep3Values = (values) => {
    console.log(values);
    setFormValues({
      ...formValues,
      checkedCarPark: false,
      checkedFan: false,
      checkedConditioner: false,
      checkedCamera: false,
      checkedGarbageBin: false,
      checkedKitchen: false,
      checkedKitchen: false,
      checkedToilet: false,
      checkedWifi: values.checkedWifi,
      checkedCupboard: values.checkedCupboard,
      checkedDryingGround: values.checkedDryingGround,
      checkedWaterHeater: values.checkedWaterHeater,
    })
  }
  const getStep4Values = (value) => {
    console.log(value);
  }
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Step1 handleNext={handleNext} getStep1Values={getStep1Values}/>;
      case 1:
        return <Step2 handleNext={handleNext} handleBack={handleBack}  getStep2Values={getStep2Values}/>;
      case 2:
        return <Step3 handleNext={handleNext} handleBack={handleBack} getStep3Values={getStep3Values}/>;
      // case 1:
      //   return <Step4BackUp handleNext={handleNext} handleBack={handleBack}  getStep4Values={getStep4Values}/>;
      case 3:
        return <LastStep handleBack={handleBack} />;
      default:
        return 'Unknown stepIndex';
    }
  }


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} className="stepper-form">
      <Stepper activeStep={activeStep} alternativeLabel className="stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Yêu cầu của bạn đã được gửi đi. Chúng tôi sẽ xử lí trong thời gian sớm nhất!</Typography>
            <Button onClick={handleReset}>Tạo yêu cầu mới</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            {/* <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Quay lại
              </Button>
              <Button 
                variant="contained"   
                color="primary" 
                onClick={handleNext} 
                className={classes.buttonStyles}
              >
                {activeStep === steps.length - 1 ? 'Hoàn tất' : 'Bước tiếp theo'}
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
