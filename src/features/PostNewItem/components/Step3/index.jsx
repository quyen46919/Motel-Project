import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
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
import { useDispatch } from "react-redux";
import CustomCheckbox from '../CustomCheckbox';
import { insertStep3Values } from "../../PostNewItemSlice";
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0 1rem",
      marginBottom: "1rem",
      ["@media (max-width:1024px)"]: {
          justifyContent: "center"
      },
    },
    wrapper: {
      width: "320px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
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
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const action = insertStep3Values(state);
        dispatch(action);
        props.getStep3Values(state);
        props.handleNext();
    }
    const handleBack = () => {
        props.handleBack();
    }

    const [state, setState] = React.useState({
        checkedCarPark: false,
        checkedFan: false,
        checkedConditioner: false,
        checkedCamera: false,
        checkedGarbageBin: false,
        checkedKitchen: false,
        checkedToilet: false,
        checkedWifi: false,
        checkedCupboard: false,
        checkedDryingGround: false,
        checkedWaterHeater: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <div className="step3">
            <div className={classes.titleWrap}>
                <h3 className={classes.titleColor}>Tiện ích trong phòng trọ</h3>
            </div>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <MotorcycleIcon fontSize="large" className={classes.textColor}/>
                    {/* <CustomCheckbox props="Chỗ để xe"/> */}
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedCarPark" 
                            checked={state.checkedCarPark}
                            onChange={handleChange}
                            />
                        }
                        label="Chỗ để xe"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <ToysIcon fontSize="large"  className={classes.textColor}/>
                    {/* <CustomCheckbox props="Quạt"/> */}
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedFan" 
                            checked={state.checkedFan}
                            onChange={handleChange}
                            />
                        }
                        label="Quạt"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <AcUnitIcon fontSize="large" className={classes.textColor}/>
                    {/* <CustomCheckbox props="Điều hòa"/> */}
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedConditioner" 
                            checked={state.checkedConditioner}
                            onChange={handleChange}
                            />
                        }
                        label="Điều hòa"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <WifiIcon fontSize="large"  className={classes.textColor}/>
                    {/* <CustomCheckbox props="Wifi"/> */}
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedWifi" 
                            checked={state.checkedWifi}
                            onChange={handleChange}
                            />
                        }
                        label="Wifi"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <WcIcon fontSize="large"  className={classes.textColor}/>
                    {/* <CustomCheckbox props="Toilet riêng"/> */}
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedToilet" 
                            checked={state.checkedToilet}
                            onChange={handleChange}
                            />
                        }
                        label="Toilet riêng"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <OpacityIcon fontSize="large"  className={classes.textColor}/>
                    {/* <CustomCheckbox props="Máy nước nóng"/> */}
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedWaterHeater" 
                            checked={state.checkedWaterHeater}
                            onChange={handleChange}
                            />
                        }
                        label="Máy nước nóng"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <VideocamIcon fontSize="large"  className={classes.textColor}/>
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedCamera" 
                            checked={state.checkedCamera}
                            onChange={handleChange}
                            />
                        }
                        label="Camera an ninh"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <DeleteIcon fontSize="large"  className={classes.textColor}/>
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedGarbageBin" 
                            checked={state.checkedGarbageBin}
                            onChange={handleChange}
                            />
                        }
                        label="Chỗ đổ rác"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <DashboardIcon fontSize="large"  className={classes.textColor}/>
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedCupboard" 
                            checked={state.checkedCupboard}
                            onChange={handleChange}
                            />
                        }
                        label="Tủ chứa đồ"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <FreeBreakfastIcon fontSize="large"  className={classes.textColor}/>
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedKitchen" 
                            checked={state.checkedKitchen}
                            onChange={handleChange}
                            />
                        }
                        label="Chỗ nấu ăn"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.wrapper}>
                    <Brightness4Icon fontSize="large"  className={classes.textColor}/>
                    <FormControlLabel
                        control={
                            <Checkbox 
                            name="checkedDryingGround" 
                            checked={state.checkedDryingGround}
                            onChange={handleChange}
                            />
                        }
                        label="Chỗ phơi đồ"
                        labelPlacement="start"
                    />
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