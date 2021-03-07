import Button from '@material-ui/core/Button';
import React from 'react';
// import CustomInput from '../CustomInput';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import './styles.scss';
import CustomSelect from '../CustomSelect';


const useStyles = makeStyles((theme) => ({
    textFieldStyles: {
        width: "35ch"
    }
  }));

  const sex = [
    {
        value: 1,
        label: "Nam"
    },
    {
        value: 2,
        label: "Nữ"
    },
    {
        value: 3,
        label: "Không xác định"
    },
]
function MotelForm(props) {
const classes = useStyles();
    return (
        <form action="" className="motel-form">
            <div className="motel-form__input">
                <h2>1. Thông tin về nhà trọ</h2>
                <div className="motel-form__input--wrapper">
                    
                    <TextField
                        required
                        id="standard-required"
                        label="Địa chỉ"
                        defaultValue="02 Cống Quỳnh, Cẩm Lệ, Đà Nẵng"
                        className={classes.textFieldStyles}
                    />
                    <TextField
                        required
                        label="Giá trọ"
                        id="standard-number"
                        defaultValue="2500000"
                        type="number"
                        className={classes.textFieldStyles}
                    />
                    <TextField
                        required
                        label="Số người trong phòng"
                        id="standard-number"
                        defaultValue="3"
                        type="number"
                        className={classes.textFieldStyles}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Chủ trọ"
                        defaultValue="Nguyễn Văn A"
                        className={classes.textFieldStyles}
                    />
                    <TextField
                        required
                        label="Số điện thoại"
                        id="standard-number"
                        defaultValue="0321121312312"
                        type="number"
                        className={classes.textFieldStyles}
                    />

                </div>
                <h2>2. Thông tin về bạn cùng phòng</h2>
                <div className="motel-form__friends">
                    <TextField
                        required
                        id="standard-required"
                        label="Bạn cùng trọ 1"
                        defaultValue="Nguyễn Văn ASA"
                        className={classes.textFieldStyles}
                    />
                    <CustomSelect props={sex} title="Giới tính"/>
                    <TextField
                        required
                        label="Số điện thoại"
                        id="standard-number"
                        defaultValue="032112218812"
                        type="number"
                        className={classes.textFieldStyles}
                    />
                </div>
                <div className="motel-form__friends">
                    <TextField
                        required
                        id="standard-required"
                        label="Bạn cùng trọ 2"
                        defaultValue="Nguyễn Phúc AKDL"
                        className={classes.textFieldStyles}
                    />
                    <CustomSelect props={sex} title="Giới tính"/>
                    <TextField
                        required
                        label="Số điện thoại"
                        id="standard-number"
                        defaultValue="0364333312"
                        type="number"
                        className={classes.textFieldStyles}
                    />
                </div>

                <div className="motel-form__submit-btn">
                    <Button variant="outlined" color="primary">
                        Lưu thay đổi
                    </Button>
                </div>
            </div>

        </form>
    );
}

export default MotelForm;