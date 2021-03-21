import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeleteIcon from '@material-ui/icons/Delete';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import OpacityIcon from '@material-ui/icons/Opacity';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ToysIcon from '@material-ui/icons/Toys';
import VideocamIcon from '@material-ui/icons/Videocam';
import WcIcon from '@material-ui/icons/Wc';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import WifiIcon from '@material-ui/icons/Wifi';
import React from 'react';
import { useForm } from "react-hook-form";
import InputCheckbox from '../../../../components/Header/components/InputCheckbox';
import UploadButton from '../UploadButton';
import './styles.scss';



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
        width: "30ch",
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
    titleColor:{
        color: "#20274d",
        margin: 0,
        padding: 0,
    },
    ["@media (max-width: 600px)"] : {
        textField: {
            width: '80vw'
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
  }));


function PostForm({id}) {
    const {register, handleSubmit, errors, control} = useForm({
        defaultValues: {
            // input
            homeNumber: "",
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
            // below options
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
            apartment: false,
            policy: false
        },
        mode: "onChange"
       });
    
      const onSubmit = (values) => {
        console.log("FORM DATA: ", values);
      }

    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`${classes.root2} custom-input`}>
                <div className={classes.titleWrap}>
                    <h1 className={classes.titleColor}>
                    1. Thông tin về nhà trọ 
                    </h1>
                </div>
                <div className={`${classes.wrapDiv} custom-input__line`}>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Số nhà / Số hẻm"
                            id="standard-helperText"
                            className={classes.textField}
                            defaultValue="02"
                            name="homeNumber"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Tên đường"
                            id="standard-helperText"
                            defaultValue="Xô Viết Nghệ Tĩnh"
                            className={classes.textField}
                            name="streetName"
                        />
                    </div>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Quận / Huyện"
                            id="standard-helperText"
                            defaultValue="Hải Châu"
                            className={classes.textField}
                            name="district"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Thành phố"
                            id="standard-helperText"
                            defaultValue="Đà Nẵng"
                            className={classes.textField}
                            InputProps={{
                            readOnly: true,
                            }}
                            name="city"
                        />
                </div>
                </div>
                <div className={`${classes.wrapDiv} custom-input__line`}>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Giá trọ"
                            id="standard-number"
                            defaultValue="2000000"
                            className={classes.textField}
                            helperText="Giá 1 phòng không phụ thuộc số người"
                            name="motelPrices"
                            type="number"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Hình thức"
                            id="standard-helperText"
                            defaultValue="Không chung chủ"
                            className={classes.textField}
                            helperText="1-Chung chủ / 2-Không chung chủ/ 3-Căn hộ"
                            name="formality"
                            type="number"
                        />
                    </div>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Diện tích phòng"
                            id="standard-helperText"
                            defaultValue="25"
                            className={classes.textField}
                            helperText="Đơn vị: m2"
                            name="acreage"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Diện tích gác lửng"
                            id="standard-helperText"
                            defaultValue="0"
                            className={classes.textField}
                            helperText="Bỏ trống nếu không có gác lửng (Đơn vị: m2)"
                            name="mezzanine"
                        />
                    </div>
                </div>
                <div className={`${classes.wrapDiv} custom-input__line`}>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Giá điện"
                            id="standard-number"
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
                            id="standard-number"
                            defaultValue={7000}
                            className={classes.textField}
                            helperText="Đơn vị: VND/Khối (hoặc thỏa thuận)"
                            type="number"
                            name="WaterPrices"
                        />
                    </div>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Số người cần ghép"
                            id="standard-number"
                            defaultValue={3}
                            className={classes.textField}
                            type="number"
                            name="numberOfPeople"
                        />
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Ngày vào ở"
                            id="standard-number"
                            defaultValue="2014-02-09"
                            className={classes.textField}
                            type="date"
                            value="2021-01-01"
                            name="numberOfPeople"
                        />
                    </div>
                </div>

                <div className={`${classes.wrapDiv} custom-input__line`}>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Tiêu đề bài đăng"
                            id="standard-helperText"
                            defaultValue="Cho thuê 1 phòng trọ cho 3 người"
                            className={classes.textField2}
                            helperText="Cho thuê phòng cho mấy người, yêu cầu người thuê phải như thế nào,..."
                            name="titlePost"
                        />
                        </div>
                    <div className={classes.wrapDiv}>
                        <TextField
                            control={control}
                            inputRef={register}
                            label="Mô tả chung"
                            id="standard-helperText"
                            defaultValue="Trọ có đầy đủ tiện nghi, giờ giấc linh hoạt"
                            className={classes.textField2}
                            helperText="Mô tả về phòng trọ, nhà trọ, ..."
                            name="generalDescription"
                        />
                    </div>
                </div>

                <div className={`${classes.wrapDiv} custom-input__line`} >
                    <div className={`${classes.wrapDiv} custom-input__upload`}>   
                        <UploadButton 
                            title="UPLOAD"
                        />
                        <UploadButton title="UPLOAD"/>
                        <UploadButton title="UPLOAD"/>
                        <UploadButton title="UPLOAD"/>
                    </div>
                </div>

            </div>
            <div className={classes.titleWrap}>
                <h1 className={classes.textColor}>2. Yêu cầu của chủ trọ</h1>
            </div>
            <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <PersonIcon fontSize="large" className={classes.textColor}/>
                        <div className="post-form__text">
                            <p>Chỉ cho nữ thuê</p>
                        </div>
                        <InputCheckbox 
                            control={control}
                            name="femaleOnly" 
                        />
                    </div>
                    <div className={classes.wrapper}>
                        <WcIcon fontSize="large"  className={classes.textColor}/>
                        <div className="post-form__text">
                            <p>Nam nữ ở riêng</p>
                        </div>
                        <InputCheckbox 
                            control={control}
                            name="splitMaleAndFemale" 
                        />
                    </div>
                    <div className={classes.wrapper}>
                        <CreditCardIcon fontSize="large" className={classes.textColor}/>
                        <div className="post-form__text">
                            <p>Đặt cọc trước</p>
                        </div>
                        <InputCheckbox 
                            control={control}
                            name="deposit" 
                        />
                    </div>
                    <div className={classes.wrapper}>
                        <WhatshotIcon fontSize="large"  className={classes.textColor}/>
                        <div className="post-form__text">
                            <p>Nấu ăn trong phòng</p>
                        </div>
                        <InputCheckbox 
                            control={control}
                            name="cookingInRoom" 
                        />
                    </div>
                    <div className={classes.wrapper}>
                        <FormatColorResetIcon fontSize="large"  className={classes.textColor}/>
                        <div className="post-form__text">
                            <p>Không nhậu nhẹt</p>
                        </div>
                        <InputCheckbox 
                            control={control}
                            name="noDrink" 
                        />
                    </div>
                    <div className={classes.wrapper}>
                        <PersonAddDisabledIcon fontSize="large"  className={classes.textColor}/>
                        <div className="post-form__text">
                            <p>Không mời bạn bè qua đêm</p>
                        </div>
                        <InputCheckbox 
                            control={control}
                            name="inviteFriends" 
                        />
                    </div>
                    <div className={classes.wrapper}>
                    <RecordVoiceOverIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Cấm làm ồn sau 22h</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="dontMakeNoise" 
                    />
                </div>
            </div>


            <div className={classes.titleWrap}>
                <h1 className={classes.titleColor}>3. Tiện ích trong phòng trọ</h1>
            </div>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <MotorcycleIcon fontSize="large" className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Chỗ để xe</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="carPark" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <ToysIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Quạt</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="fan" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <AcUnitIcon fontSize="large" className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Điều hòa</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="airCondition" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <WifiIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Wifi</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="wifi" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <WcIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Toilet riêng</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="toilet" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <OpacityIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Máy nước nóng</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="waterHeater" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <VideocamIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Camera</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="camera" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <DeleteIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Chỗ đổ rác</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="trashCan" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <DashboardIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Tủ chứa đồ</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="board" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <FreeBreakfastIcon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Bếp / Chỗ nấu ăn</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="kitchen" 
                    />
                </div>
                <div className={classes.wrapper}>
                    <Brightness4Icon fontSize="large"  className={classes.textColor}/>
                    <div className="post-form__text">
                        <p>Chỗ phơi đồ</p>
                    </div>
                    <InputCheckbox 
                        control={control}
                        name="dryingGround" 
                    />
                </div>
            </div>
            <div className="post-form__policy">
                <InputCheckbox 
                    control={control}
                    props="Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật của website" 
                    className="policy__checkbox"
                    name="policy"
                />
                <Button type="submit" variant="contained"  className="post-form__submit-btn">
                    Gửi yêu cầu
                </Button>
            </div>
        </form>
    );
}

export default PostForm;