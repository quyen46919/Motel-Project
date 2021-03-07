import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React from 'react';
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
  const job = [
    {
        value: 1,
        label: "Học sinh"
    },
    {
        value: 2,
        label: "Sinh viên"
    },
    {
        value: 3,
        label: "Người lao động"
    },
    {
        value: 4,
        label: "Công nhân viên chức"
    },
]

UserForm.propTypes = {
    
};
function UserForm(props) {
    const classes = useStyles();

    return (
        <form action="" className="user-form">
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
                        id="standard-required"
                        label="Họ đệm"
                        defaultValue="Nguyễn Văn"
                        className={classes.textFieldStyles}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Tên"
                        defaultValue="Quyền"
                        className={classes.textFieldStyles}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Địa chỉ"
                        defaultValue="02 Cống Quỳnh, Cẩm Lệ, Đà Nẵng"
                        className={classes.textFieldStyles}
                    />
                    <TextField
                        required
                        label="Số điện thoại"
                        id="standard-number"
                        defaultValue="0123456789"
                        className={classes.textFieldStyles}
                        type="number"
                    />
                    <CustomSelect props={sex} title="Giới tính"/>
                    <CustomSelect props={job} title="Nghề nghiệp"/>
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