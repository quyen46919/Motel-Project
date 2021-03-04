import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
import WcIcon from '@material-ui/icons/Wc';
import React from 'react';
import CustomCheckbox from '../CustomCheckbox';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ToysIcon from '@material-ui/icons/Toys';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WifiIcon from '@material-ui/icons/Wifi';
import OpacityIcon from '@material-ui/icons/Opacity';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "0 1rem"
    },
    wrapper: {
      width: "320px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "0rem"
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
        color: "#20274d"
    }
  }));

function ListCheckbox(props) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.titleWrap}>
                <h1 className={classes.textColor}>2. Yêu cầu của chủ trọ</h1>
            </div>
            <div className={classes.root}>
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
            </div>


            <div className={classes.titleWrap}>
                <h1 className={classes.titleColor}>3. Tiện ích trong phòng trọ</h1>
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
            </div>
        </>
    );
}

export default ListCheckbox;