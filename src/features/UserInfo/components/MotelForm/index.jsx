import Button from '@material-ui/core/Button';
import React from 'react';
// import CustomInput from '../CustomInput';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import './styles.scss';
import CustomSelect from '../CustomSelect';
import { Controller, useForm } from 'react-hook-form';
import { MenuItem, Select } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    textFieldStyles: {
        width: "35ch",
        ["@media (max-width: 970px)"]: {
            width: "30ch"
        },
        ["@media (max-width: 650px)"]: {
            width: "90vw"
        }
    },
    button: {
        background: "#1379ff!important",
        color: "white!important",
        padding : "0.8rem 2rem!important",
        marginTop: "0rem!important",
    }
  }));

function MotelForm(props) {

    const classes = useStyles();
    const {register, handleSubmit, errors, control} = useForm({
        defaultValues: {
            address: "",
            prices: 0,
            numberOfPeople: 1,
            bossFullName: "",
            bossPhoneNumber: "",
            person1Name: "",
            person1Sex: "male",
            person1PhoneNumber: "",
            person2Name: "",
            person2Sex: "male",
            person2PhoneNumber: "",
        }
    });

    const onSubmit = (values) => {
      console.log("FORM DATA: ", values);
    }

    return (
        <form action="" className="motel-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="motel-form__input">
                <h2>1. Thông tin về nhà trọ</h2>
                <div className="motel-form__input--wrapper">
                    <TextField
                        required
                        id="outlined-basic"
                        variant="outlined"
                        label="Địa chỉ"
                        defaultValue="02 Cống Quỳnh, Cẩm Lệ, Đà Nẵng"
                        className={classes.textFieldStyles}
                        name="address"
                        inputRef={register}
                    />
                    <TextField
                        required
                        label="Giá trọ"
                        id="outlined-number"
                        variant="outlined"
                        defaultValue="2500000"
                        type="number"
                        className={classes.textFieldStyles}
                        name="prices"
                        inputRef={register}
                    />
                    <TextField
                        required
                        label="Số người trong phòng"
                        id="outlined-number"
                        variant="outlined"
                        defaultValue="3"
                        type="number"
                        className={classes.textFieldStyles}
                        name="numberOfPeople"
                        inputRef={register}
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        variant="outlined"
                        label="Chủ trọ"
                        defaultValue="Nguyễn Văn A"
                        className={classes.textFieldStyles}
                        name="bossFullName"
                        inputRef={register}
                    />
                    <TextField
                        required
                        label="Số điện thoại"
                        id="outlined-number"
                        variant="outlined"
                        defaultValue="0321121312312"
                        type="number"
                        className={classes.textFieldStyles}
                        name="bossPhoneNumber"
                        inputRef={register}
                    />

                </div>
                <h2>2. Thông tin về bạn cùng phòng</h2>
                <div className="motel-form__friends">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Bạn cùng trọ 1"
                        defaultValue="Nguyễn Văn ASA"
                        className={classes.textFieldStyles}
                        name="person1Name"
                        inputRef={register}
                    />
                    <Controller 
                      control={control}
                      as={Select}
                      name="person1Sex"
                      inputRef={register}
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.textFieldStyles}
                      defaultValue="male"
                    >
                      <MenuItem value="male">Nam</MenuItem>
                      <MenuItem value="female">Nữ</MenuItem>
                      <MenuItem value="nodefined">Không xác định</MenuItem>
                    
                    </Controller>
                    <TextField
                        label="Số điện thoại"
                        id="outlined-number"
                        variant="outlined"
                        defaultValue="032112218812"
                        type="number"
                        className={classes.textFieldStyles}
                        name="person1PhoneNumber"
                        inputRef={register}
                    />
                </div>
                <div className="motel-form__friends">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Bạn cùng trọ 2"
                        defaultValue="Nguyễn Phúc AKDL"
                        className={classes.textFieldStyles}
                        name="person2Name"
                        inputRef={register}
                    />
                    <Controller 
                      control={control}
                      as={Select}
                      name="person2Sex"
                      inputRef={register}
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.textFieldStyles}
                      defaultValue="male"
                    >
                      <MenuItem value="male">Nam</MenuItem>
                      <MenuItem value="female">Nữ</MenuItem>
                      <MenuItem value="nodefined">Không xác định</MenuItem>
                    
                    </Controller>
                    <TextField
                        required
                        label="Số điện thoại"
                        id="outlined-number"
                        variant="outlined"
                        defaultValue="0364333312"
                        type="number"
                        className={classes.textFieldStyles}
                        name="person2PhoneNumber"
                        inputRef={register}
                    />
                </div>

                <div className="motel-form__submit-btn">
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                        Lưu thay đổi
                    </Button>
                </div>
            </div>

        </form>
    );
}

export default MotelForm;