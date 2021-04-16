import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img2 from '../../../../assets/images/big-icon-2.png';
import img1 from '../../../../assets/images/big-icon-3.png';
import img3 from '../../../../assets/images/big-icon-1.png';
import './styles.scss';

function Step1(props) {

    const [choose, setChoose] = useState(0);
    const handleClick1 = () => {
        setChoose(1);
        props.handleStep1(1);
    }
    const handleClick2 = () => {
        setChoose(2);
        props.handleStep1(2);
    }
    const handleClick3 = () => {
        setChoose(3);
        props.handleStep1(3);
    }
    return (
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
                <div
                    className={choose === 3 ? 'step1__block active' : 'step1__block'} 
                    onClick={handleClick3}
                >
                    <img src={img3} alt="sadsa"/>
                    <h3>Căn hộ</h3>
                </div>
            </div>
        </div>
    );
}

export default Step1;