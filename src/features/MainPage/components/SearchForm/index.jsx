import React from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../../../Intro/components/CustomSelect';
import {PEOPLE, AREA, PRICES, ACREAGE} from '../../../../assets/constant';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './styles.scss';

SearchForm.propTypes = {
    
};

function SearchForm(props) {
    return (
        <div className="search-form__form--wrapper">
            <form className="search-form__search--form">
                <div className="search-form__wrapper">
                    <p className="title">Khu vực</p>  
                    <CustomSelect props={AREA} />
                </div>
                <div className="search-form__wrapper">
                    <p className="title">Diện tích</p>  
                    <CustomSelect props={ACREAGE} />
                </div>   
                <div className="search-form__wrapper">
                    <p className="title">Giá phòng</p>  
                    <CustomSelect props={PRICES} />
                </div>
                <div className="search-form__wrapper">
                    <p className="title">Số người</p>  
                    <CustomSelect props={PEOPLE} />
                </div>
                <NavLink to="/main/" className="search-form__redirect-btn">
                    <Button variant="contained" className="search-form__button">
                            Tìm kiếm
                    </Button>
                </NavLink>
            </form>
        </div>
    );
}

export default SearchForm;