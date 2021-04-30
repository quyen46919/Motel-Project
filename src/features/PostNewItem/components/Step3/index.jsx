import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Upload from '../Upload';
import './styles.scss';
import { Button, makeStyles } from '@material-ui/core';

Step3.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    buttonStyles: {
        background: "#1379ff!important",
        height: "50px",
        padding: "0 2rem",
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

function Step3(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleBtnClick = () => {
        setOpen(!open);
    }

    return (
        <div className="step3">
            <p>Bạn phải tải lên ít nhất <span>1 ảnh về nhà trọ</span> và <span>2 ảnh về phòng trọ</span></p>
            {open ? (
                <div className="step3__block">
                    <Upload title="Ảnh nhà trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                    <Upload title="Ảnh phòng trọ"/>
                </div>
            ) : (
                <div className="step3__block">
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
        </div>
    );
}

export default Step3;