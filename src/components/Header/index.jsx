import React from 'react';
// import CustomSelect from './components/CustomSelect';
import '../../fontawesome/css/all.css';
import './styles.scss';

Header.propTypes = {};

function Header(props) {
    return (
        <div className="header">
            <div className="header__logo">
                <h1>LOGO</h1>
            </div>
            <form action="" className="header__form">
                <div className="header__search--wrapper">
                    <div className="header__icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <input type="text" className="header__search" placeholder="Nhập tên đường bạn muốn tìm..."/>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="header__select--content">
                        <p>Khu vực</p>
                        <select name="" className="header_location">
                            <option value="0">Hải Châu</option>
                        </select>
                    </div>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="header__select--content">
                        <p>Giá phòng</p>
                        <select name="" className="header_location">
                            <option value="0">2.500.000</option>
                        </select>
                    </div>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="header__select--content">
                        <p>Diện tích</p>
                        <select name="" className="header_location" >
                            <option value="0">25m2</option>
                        </select>
                    </div>
                </div>
                <button className="header__submit">
                    Tìm kiếm
                </button>
            </form>
            <div className="header__login">
                <i className="fas fa-sign-in-alt"></i>
            </div>


            <form action="" className="header__form--sub">
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="header__select--content">
                        <p>Khu vực</p>
                        <select name="" className="header_location">
                            <option value="0">Hải Châu</option>
                        </select>
                    </div>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="header__select--content">
                        <p>Giá phòng</p>
                        <select name="" className="header_location">
                            <option value="0">2.500.000</option>
                        </select>
                    </div>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="header__select--content">
                        <p>Diện tích</p>
                        <select name="" className="header_location" >
                            <option value="0">25m2</option>
                        </select>
                    </div>
                </div>
                <button className="header__submit">
                    Tìm kiếm
                </button>
            </form>
        </div>
    );
}

export default Header;