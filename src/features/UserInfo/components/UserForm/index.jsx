import { MenuItem, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from '../CustomSelect';
import './styles.scss';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    changeAvatar : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textFieldStyles: {
        minWidth: "35ch!important",
        width: "35ch!important"
    },
    button: {
        background: "#1379ff!important",
        color: "white!important",
        padding : "0.8rem 2rem!important",
        marginTop: "1rem!important",
    }
  }));


UserForm.propTypes = {
    
};
function UserForm(props) {
    const classes = useStyles();

    const {register, handleSubmit, errors, control} = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            sex: "male",
            job: "sv"
        }
    });

    const onSubmit = (values) => {
      console.log("FORM DATA: ", values);
    }

    return (
        <form action="" className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="user-form__info--wrapper">
                <div className="user-form__input">
                <div className="user-form__avatar user-form__avatar--hidden">
                    <div className="user-form__avatar--wrapper">
                        {/* background-img in here */}
                    </div>
                    <div className={classes.root}>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file" className={classes.changeAvatar}>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>
                            <p>Thay đổi ảnh đại diện</p>
                        </label>
                    </div>
                </div>
                    <TextField
                        required
                        id="outlined-basic"
                        variant="outlined"
                        label="Họ đệm"
                        defaultValue="Nguyễn Văn"
                        className={classes.textFieldStyles}
                        name="firstName"
                        inputRef={register}
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        variant="outlined"
                        label="Tên"
                        defaultValue="Quyền"
                        className={classes.textFieldStyles}
                        name="lastName"
                        inputRef={register}
                    />
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
                        label="Số điện thoại"
                        id="outlined-number"
                        variant="outlined"
                        defaultValue="0123456789"
                        className={classes.textFieldStyles}
                        type="number"
                        name="phoneNumber"
                        inputRef={register}
                    />
                    {/* <CustomSelect props={sex} title="Giới tính"/> */}
                    <Controller 
                      control={control}
                      as={Select}
                      name="sex"
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
                    <Controller 
                      control={control}
                      as={Select}
                      name="job"
                      inputRef={register}
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.textFieldStyles}
                      defaultValue="sv"
                    >
                      <MenuItem value="sv">Sinh viên</MenuItem>
                      <MenuItem value="hs">Học sinh</MenuItem>
                      <MenuItem value="ld">Người lao động</MenuItem>
                      <MenuItem value="other">Khác</MenuItem>
                    
                    </Controller>
                </div>
                <div className="user-form__avatar">
                    <div className="user-form__avatar--wrapper">
                        {/* background-img in here */}
                    </div>
                    <div className={classes.root}>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file" className={classes.changeAvatar}>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>
                            <p>Thay đổi ảnh đại diện</p>
                        </label>
                    </div>
                </div>
            </div>
            <div className="user-form__submit-btn">
                <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                    Lưu thay đổi
                </Button>
            </div>
            
        </form>
    );
}

export default UserForm;