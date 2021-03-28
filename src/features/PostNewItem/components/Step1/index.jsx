import { Button } from '@material-ui/core';
import React from 'react';
import CheckBox from '../../../../components/CheckBox';
import CustomInput from '../CustomInput';
import ListCheckbox from '../ListCheckbox';

import CustomCheckbox from '../CustomCheckbox';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ToysIcon from '@material-ui/icons/Toys';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WifiIcon from '@material-ui/icons/Wifi';
import OpacityIcon from '@material-ui/icons/Opacity';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import VideocamIcon from '@material-ui/icons/Videocam';
import DeleteIcon from '@material-ui/icons/Delete';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import InputCheckbox from '../../../../components/Header/components/InputCheckbox';
import PersonIcon from '@material-ui/icons/Person';
import WcIcon from '@material-ui/icons/Wc';
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import UploadButton from '../UploadButton';
import './styles.scss';
import Upload from '../Upload';


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "0 1rem",
      ["@media (max-width:1024px)"]: {
          justifyContent: "center"
      },
    },
    uploadRoot: {
        '& > *': {
          margin: theme.spacing(1),
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
    textStyles:{
        color: "#20274d",
        transform: "translateY(-2px)",
        textTransform: "uppercase"
    },
    root2: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "1.5rem"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "45%",
    },
    textField2: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "calc(60ch + 32px)"
    },
    wrapDiv: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        gap: "1rem!important"
    },
    titleWrap: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
    },
    titleStyles:{
        color: "#20274d",
        // margin: 0,
        textTransform: "uppercase"
    },
    ["@media (max-width: 600px)"] : {
        textField: {
            width: '80vw',
        },
        wrapDiv: {
            flexWrap: "wrap",
            flexDirection: "column",
            gap: "1rem 0"
        },
        textField2: {
            width: "80vw!important"
        },
    },
    buttonColor : {
        border: "1px solid #5392f9",
        background: "white",
        color: "#5392f9",
        height: "45px",
        width: "120px"
    },
    uploadInput: {
        display: 'none',
        // width: "200px",
      },
  }));


function Step1() {
    const {register, handleSubmit, errors, control} = useForm({
        defaultValues: {
            // input
            address: "K544/16 đường 2-9",
            districtAndCity: "Hải Châu - Đà Nẵng",
            streetNumber: "",
            district: "",
            city: "",
            motelPrices: 2500000,
            formality: 1,
            acreage: "15m2",
            mezzanine: "0",
            elecPrices: 7000,
            waterPrices: 3000,
            numberOfPeople: 3,
            sameRoom: 0,
            titlePost : "",
            generalDescription: "",
            // above options
            femaleOnly: false,
            splitMaleAndFemale: false,
            deposit: false,
            cookingInRoom: false,
            noDrink: false,
            inviteFriends: false,
            dontMakeNoise: false,
        },
        mode: "onChange"
       });
    
      const onSubmit = (values) => {
        console.log("FORM DATA: ", values);
      }

    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="step1-form">
            <div className="step1-form__upload">
                <Upload/>
            </div>
            <div className={`${classes.root2} step1-form__input`}>
                <div className={`custom-input__line`}>
                    <TextField
                        control={control}
                        inputRef={register}
                        label="Địa chỉ"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.textField}
                        helperText="Địa chỉ bao gồm số nhà + tên đường"
                        defaultValue="02"
                        name="address"
                    />
                    <TextField
                        control={control}
                        inputRef={register}
                        label="Địa chỉ"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.textField}
                        helperText="Địa chỉ bao gồm số nhà + tên đường"
                        defaultValue="02"
                        name="address"
                    />
                    <TextField
                        control={control}
                        inputRef={register}
                        label="Địa chỉ"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.textField}
                        helperText="Địa chỉ bao gồm số nhà + tên đường"
                        defaultValue="02"
                        name="address"
                    />
                    <TextField
                        control={control}
                        inputRef={register}
                        label="Địa chỉ"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.textField}
                        helperText="Địa chỉ bao gồm số nhà + tên đường"
                        defaultValue="02"
                        name="address"
                    />
                    <TextField
                        control={control}
                        inputRef={register}
                        label="Địa chỉ"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.textField}
                        helperText="Địa chỉ bao gồm số nhà + tên đường"
                        defaultValue="02"
                        name="address"
                    />
                    <TextField
                        control={control}
                        inputRef={register}
                        label="Địa chỉ"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.textField}
                        helperText="Địa chỉ bao gồm số nhà + tên đường"
                        defaultValue="02"
                        name="address"
                    />
                </div>
                {/* <div className={`${classes.wrapDiv} custom-input__line`}>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Địa chỉ"
                            id="outlined-basic"
                            variant="outlined"
                            className={classes.textField}
                            helperText="Địa chỉ bao gồm số nhà + tên đường"
                            defaultValue="02"
                            name="address"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Quận - Thành phố"
                            id="outlined-basic"
                            variant="outlined"
                            defaultValue="Xô Viết Nghệ Tĩnh"
                            className={classes.textField}
                            name="districtAndCity"
                        />
                    </div>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Số phòng tương tự"
                            id="outlined-number"
                            variant="outlined"
                            defaultValue="0"
                            className={classes.textField}
                            helperText="Trong trường hợp có nhiều phòng tương tự muốn đăng tin cùng lúc"
                            type="number"
                            name="sameRoom"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Hình thức"
                            id="outlined-basic"
                            variant="outlined"
                            defaultValue="Không chung chủ"
                            className={classes.textField}
                            helperText="1-Chung chủ / 2-Không chung chủ"
                            name="formality"
                            type="number"
                        />
                    </div>
                </div>
                <div className={`${classes.wrapDiv} custom-input__line`}>
                    <div className={classes.wrapDiv}>
                        
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Giá trọ"
                            id="outlined-basic"
                            variant="outlined"
                            defaultValue="2000000"
                            className={classes.textField}
                            helperText="Giá 1 phòng không phụ thuộc số người"
                            name="motelPrices"
                            type="number"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Số người tối đa"
                            id="outlined-number"
                            variant="outlined"
                            defaultValue={3}
                            className={classes.textField}
                            type="number"
                            name="numberOfPeople"
                        />
                    </div>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Giá điện"
                            id="outlined-number"
                            variant="outlined"
                            defaultValue={3000}
                            className={classes.textField}
                            helperText="Đơn vị: VND/kWh"
                            type="number"
                            name="elecPrices"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Giá nước"
                            id="outlined-number"
                            variant="outlined"
                            defaultValue={7000}
                            className={classes.textField}
                            helperText="Đơn vị: VND/Khối (hoặc thỏa thuận)"
                            type="number"
                            name="WaterPrices"
                        />
                    </div>
                </div>
                <div className={`${classes.wrapDiv} custom-input__line`}>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Mô tả chung"
                            id="outlined-basic"
                            variant="outlined"
                            defaultValue="Trọ có đầy đủ tiện nghi, giờ giấc linh hoạt"
                            className={classes.textField2}
                            helperText="Mô tả về phòng trọ, nhà trọ, ..."
                            name="generalDescription"
                        />
                    </div>              
                </div> */}
            </div>
        </form>
    );
}

export default Step1;