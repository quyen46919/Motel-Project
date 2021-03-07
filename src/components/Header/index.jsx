import React, { useState } from 'react';
// import CustomSelect from './components/CustomSelect';
import '../../fontawesome/css/all.css';
import CustomSelect from './components/CustomSelect';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import NearMeIcon from '@material-ui/icons/NearMe';
import HomeIcon from '@material-ui/icons/Home';
import './styles.scss';


Header.propTypes = {};



function Header(props) {

    const area = [
        {
          value: 1,
          label: 'Hải Châu',
        },
        {
          value: 2,
          label: 'Cẩm Lệ',
        },
        {
          value: 3,
          label: 'Ngũ Hành Sơn',
        },
        {
          value: 4,
          label: 'Liên Chiểu',
        },
        {
          value: 5,
          label: 'Sơn Trà',
        },
      ];
      const prices = [
        {
          value: 1,
          label: 'Dưới 1 triệu',
        },
        {
          value: 2,
          label: '1 - 1.5 triệu',
        },
        {
          value: 3,
          label: '1.5 - 2 triệu',
        },
        {
          value: 4,
          label: '2 - 2.5 triệu',
        },
        {
          value: 5,
          label: 'Trên 2.5 triệu',
        },
      ];
      const acreage = [
        {
          value: 1,
          label: 'Dưới 15m2',
        },
        {
          value: 2,
          label: '15 - 20m2',
        },
        {
          value: 3,
          label: '20 - 25m2',
        },
        {
          value: 4,
          label: '25 - 30m2',
        },
        {
          value: 5,
          label: 'Trên 30m2',
        },
      ];
    const title = {
        value1: "Khu vực",
        value2: "Giá phòng",
        value3: "Diện tích"
    }

    return (
        <div className="header">
            <div className="header__logo">
                <h1>LOGO</h1>
            </div>
            <form action="" className="header__form">
                <div className="header__search--wrapper">
                    <div className="header__icon">
                        <SearchIcon/>
                    </div>
                    <input type="text" className="header__search" placeholder="Nhập tên đường bạn muốn tìm..."/>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <NearMeIcon/>
                    </div>
                    {/* <CustomSelect data={data1}/> */}
                    <CustomSelect props={area} title={title.value1}/>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <RoomIcon/>
                    </div>
                    <CustomSelect props={prices} title={title.value2}/>
                    {/* <CustomSelect data={data2}/> */}
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <HomeIcon/>
                    </div>
                    <CustomSelect props={acreage} title={title.value3}/>
                    {/* <CustomSelect data={data3}/> */}
                </div>
                <Button variant="contained" color="primary" disableElevation>
                    TÌM KIẾM
                </Button>
            </form>
            <div className="header__login">
                <i className="fas fa-sign-in-alt"></i>
            </div>


            <form action="" className="header__form--sub">
            <div className="header__select--wrapper">
                    <div className="header__icon">
                        <SearchIcon/>
                    </div>
                    <CustomSelect props={area} title={title.value1}/>
                    {/* <CustomSelect data={data1}/> */}
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <NearMeIcon/>
                    </div>
                    <CustomSelect props={prices} title={title.value2}/>
                    {/* <CustomSelect data={data2}/> */}
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <HomeIcon/>
                    </div>
                    <CustomSelect props={acreage} title={title.value3}/>
                    {/* <CustomSelect data={data3}/> */}
                </div>
                <Button variant="contained" color="primary" disableElevation className="header__button">
                    Tìm kiếm
                </Button>
            </form>
        </div>
    );
}

export default Header;