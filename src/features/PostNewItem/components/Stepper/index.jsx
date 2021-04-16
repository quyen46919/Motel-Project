import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';

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
  return ['Loại hình trọ', 'Thông tin về phòng trọ', 'Upload ảnh'];
}

const handleStep1 = (value) => {
  console.log(value);
}
const handleStep2 = (value) => {
  console.log(value);
}
const handleStep3 = (value) => {
  console.log(value);
}
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Step1 handleStep1={handleStep1}/>;
    case 1:
      return <Step2 handleStep1={handleStep2}/>;
    case 2:
      return <Step3 handleStep1={handleStep3}/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
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
    <form className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
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
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div>
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
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
