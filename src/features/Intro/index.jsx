import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import img from '../../assets/images/genshin_12_4K.jpg';
import {PEOPLE, AREA, PRICES, ACREAGE} from '../../assets/constant';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CustomSelect from './components/CustomSelect';

Intro.propTypes = {
    
};


function Intro(props) {
    return (
        <div className="intro">
            <div className="intro__nav">
                <div className="intro__logo">
                    <h2>LOGO</h2>
                </div>
                <div className="intro__menu">
                    <p>
                        <NavLink to="/main">
                            Tìm trọ
                        </NavLink>
                    </p>
                    <p>
                        <NavLink to="/post">
                            Đăng tin
                        </NavLink>
                    </p>
                    <p>
                        <NavLink to="/contact">
                            Cộng tác
                        </NavLink>
                    </p>
                    <p>
                        <NavLink to="/about">
                            Về chúng tôi
                        </NavLink>
                    </p>
                </div>
                <div className="intro__auth">
                    <a href="#">
                        <NavLink to="/sign-in-sign-up">
                            Đăng nhập
                        </NavLink>
                    </a>
                    <a href="#">
                        <NavLink to="/sign-in-sign-up">
                            Đăng ký
                        </NavLink>
                    </a>
                </div>
            </div>
            <div className="intro__main">
                <div className="intro__title">
                    <h1>Bạn muốn thuê trọ - ghép trọ ở đâu?</h1>
                    <p>Chọn các mục thông tin phía dưới, chúng tôi sẽ cho bạn những đề xuất tốt nhất!</p>
                </div>
                <div className="intro__form--wrapper">
                    <form action className="intro__search--form">
                        <div class="intro__wrapper">
                            <p class="title">Khu vực</p>  
                            <CustomSelect props={AREA} />
                        </div>
                        <div class="intro__wrapper">
                            <p class="title">Diện tích</p>  
                            <CustomSelect props={ACREAGE} />
                        </div>   
                        <div class="intro__wrapper">
                            <p class="title">Giá phòng</p>  
                            <CustomSelect props={PRICES} />
                        </div>
                        <div class="intro__wrapper">
                            <p class="title">Số người</p>  
                            <CustomSelect props={PEOPLE} />
                        </div>
                        <NavLink to="/" className="intro__redirect-btn">
                            <Button variant="contained" className="intro__button">
                                    Tìm kiếm
                            </Button>
                        </NavLink>
                    </form>
                </div>
            </div>
            </div>
    );
}

export default Intro;