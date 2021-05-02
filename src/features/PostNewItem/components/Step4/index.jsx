import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Upload from '../Upload';
import './styles.scss';
import { Button, makeStyles } from '@material-ui/core';

Step4.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    buttonStyles: {
        background: "#1379ff!important",
        height: "50px",
        padding: "0 2rem",
        marginBottom: "2rem",
        "& > *": {
            color: "white!important"
        }
    },
    disabledStyles: {
        "& span": {
            textDecoration: "line-through"
        }
    }
  }));

function Step4(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleBtnClick = () => {
        setOpen(!open);
    }
    const handleSubmit = () => {
        props.handleNext();
    }
    const handleBack = () => {
        props.handleBack();
    }

    return (
        <div className="step4">
            <p>Bạn phải tải lên ít nhất <span className="step4__span">1 ảnh về nhà trọ</span> và <span className="step4__span">2 ảnh về phòng trọ</span></p>
            {open ? (
                <div className="step4__block">
                    <Upload title="Ảnh nhà trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                </div>
            ) : (
                <div className="step4__block">
                    <Upload title="Ảnh nhà trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                </div>
            )}
            {open ? (
                    <Button className={classes.buttonStyles} onClick={handleBtnClick}>
                        Ẩn bớt
                    </Button>
                ) : (
                    <Button className={classes.buttonStyles} onClick={handleBtnClick}>
                        Hiển thị thêm
                    </Button>
                )
            }
            <div className="step__btn-block">
                <Button variant="contained" onClick={handleBack} className="step-btn--2">
                    Quay lại
                </Button>
                <Button variant="contained" onClick={handleSubmit} className="step-btn--1">
                    Bước tiếp theo
                </Button>
            </div>
        </div>
    );
}

export default Step4;