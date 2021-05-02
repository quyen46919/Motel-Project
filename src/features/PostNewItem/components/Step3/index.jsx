import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeleteIcon from '@material-ui/icons/Delete';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import OpacityIcon from '@material-ui/icons/Opacity';
import ToysIcon from '@material-ui/icons/Toys';
import VideocamIcon from '@material-ui/icons/Videocam';
import WcIcon from '@material-ui/icons/Wc';
import WifiIcon from '@material-ui/icons/Wifi';
import React from 'react';
import CustomCheckbox from '../CustomCheckbox';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0 1rem",
      ["@media (max-width:1024px)"]: {
          justifyContent: "center"
      },
    },
    wrapper: {
      width: "320px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "0rem",
      ["@media (maxWidth:1024px)"]: {
        justifyContent: "center"
      },
    },
    IconStyles: {
        transform: 'translateY(10px)'
    },
    titleWrap : {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    textColor:{
        color: "#20274d",
        transform: "translateY(-2px)"
    }
  }));

function ListCheckbox(props) {
    const classes = useStyles();
    const handleSubmit = () => {
        props.handleNext();
    }
    const handleBack = () => {
        props.handleBack();
    }

    return (
        <div className="step3">
            <div className={classes.titleWrap}>
                <h3 className={classes.titleColor}>Tiện ích trong phòng trọ</h3>
            </div>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <MotorcycleIcon fontSize="large" className={classes.textColor}/>
                    <CustomCheckbox props="Chỗ để xe"/>
                </div>
                <div className={classes.wrapper}>
                    <ToysIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Quạt"/>
                </div>
                <div className={classes.wrapper}>
                    <AcUnitIcon fontSize="large" className={classes.textColor}/>
                    <CustomCheckbox props="Điều hòa"/>
                </div>
                <div className={classes.wrapper}>
                    <WifiIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Wifi"/>
                </div>
                <div className={classes.wrapper}>
                    <WcIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Toilet riêng"/>
                </div>
                <div className={classes.wrapper}>
                    <OpacityIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Máy nước nóng"/>
                </div>
                <div className={classes.wrapper}>
                    <VideocamIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Camera an ninh"/>
                </div>
                <div className={classes.wrapper}>
                    <DeleteIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Chỗ đổ rác"/>
                </div>
                <div className={classes.wrapper}>
                    <DashboardIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Tủ chứa đồ"/>
                </div>
                <div className={classes.wrapper}>
                    <FreeBreakfastIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Chỗ nấu ăn"/>
                </div>
                <div className={classes.wrapper}>
                    <Brightness4Icon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Chỗ phơi đồ"/>
                </div>
            </div>
            <div className="step__btn-block">
                <Button variant="contained" onClick={handleBack} className="step-btn--2">
                    Quay lại
                </Button>
                <Button variant="contained" onClick={handleSubmit} className="step-btn--1">
                    Bước tiếp theo
                </Button>
            </div>
                        {/* <div className={classes.titleWrap}>
                <h1 className={classes.textColor}>2. Yêu cầu của chủ trọ</h1>
            </div> */}
            {/* <div className={classes.root}>
                <div className={classes.wrapper}>
                    <PersonIcon fontSize="large" className={classes.textColor}/>
                    <CustomCheckbox props="Chỉ cho nữ thuê" className={classes.IconStyles}/>
                </div>
                <div className={classes.wrapper}>
                    <WcIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Nam nữ ở riêng"/>
                </div>
                <div className={classes.wrapper}>
                    <CreditCardIcon fontSize="large" className={classes.textColor}/>
                    <CustomCheckbox props="Đặt cọc trước"/>
                </div>
                <div className={classes.wrapper}>
                    <WhatshotIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Nấu ăn trong phòng"/>
                </div>
                <div className={classes.wrapper}>
                    <FormatColorResetIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Không nhậu nhẹt"/>
                </div>
                <div className={classes.wrapper}>
                    <PersonAddDisabledIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Cấm mời bạn qua đêm"/>
                </div>
                <div className={classes.wrapper}>
                    <RecordVoiceOverIcon fontSize="large"  className={classes.textColor}/>
                    <CustomCheckbox props="Cấm làm ồn sau 22h"/>
                </div>
            </div> */}
        </div>
    );
}

export default ListCheckbox;