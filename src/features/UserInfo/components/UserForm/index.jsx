import Button from '@material-ui/core/Button';
import React from 'react';
import CustomInput from '../CustomInput';
import './styles.scss';

import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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
    }
  }));

UserForm.propTypes = {
    
};
const firstName = {
    label: "Họ đệm",
    value: "Nguyễn Châu",
}
const lastName = {
    label: "Tên",
    value: "Quyền",
}
const address = {
    label: "Địa chỉ",
    value: "02 Cống Quỳnh, Cẩm Lệ, Đà Nẵng",
}
const phone = {
    label: "Số điện thoại",
    value: "0123456789",
}
const sex = {
    label: "Giới tính",
    value: "Nam",
}
const email = {
    label: "Email liên lạc",
    value: "abc12345@donga.edu.vn",
}
function UserForm(props) {
    const classes = useStyles();

    return (
        <form action="" className="user-form">
            <div className="user-form__info--wrapper">
                <div className="user-form__input">
                    <CustomInput data={firstName}/>
                    <CustomInput data={lastName}/>
                    <CustomInput data={address}/>
                    <CustomInput data={phone}/>
                    <CustomInput data={sex}/>
                    <CustomInput data={email}/>
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
                <Button variant="outlined" color="primary">
                    Lưu thay đổi
                </Button>
            </div>
        </form>
    );
}

export default UserForm;