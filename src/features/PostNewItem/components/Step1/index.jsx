import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img2 from '../../../../assets/images/big-icon-2.png';
import img1 from '../../../../assets/images/big-icon-3.png';
import img3 from '../../../../assets/images/big-icon-1.png';
import './styles.scss';
import { Controller } from 'react-hook-form';
import { Button } from '@material-ui/core';

function Step1(props) {
    const {form, name} = props;
    const [choose, setChoose] = useState(1);
    const handleClick1 = () => {
        setChoose(1);
        // props.handleStep1(1);
    }
    const handleClick2 = () => {
        setChoose(2);
    }
    const handleSubmit = () => {
        props.handleNext();
    }
    return (
        <Controller
            name={name}
            control={form.control}

            as={'div'}
        >
            <div className="step1">
                <h2>Chọn hình thức của trọ</h2>
                <div className="step1__wrapper">
                    <div 
                        className={choose === 1 ? 'step1__block active' : 'step1__block'} 
                        onClick={handleClick1}
                    >
                        <img src={img1} alt="sadsa"/> 
                        <h3>Phòng trọ</h3>
                    </div>
                    <div
                        className={choose === 2 ? 'step1__block active' : 'step1__block'} 
                        onClick={handleClick2}
                    >
                        <img src={img2} alt="sadsa"/>
                        <h3>Ghép trọ</h3>
                    </div>
                </div>
                <Button variant="contained" onClick={handleSubmit} className="step-btn--1">
                    Bước tiếp theo
                </Button>
            </div>
        </Controller>
    );
}

export default Step1;