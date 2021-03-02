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


    const [data1, setData1] = useState({
        title: "Khu vực",
        value1: "Cẩm Lệ", 
        value2: "Hải Châu",
        value3: "Ngũ Hành Sơn",
        value4: "Sơn Trà",
        value5: "Liên Chiểu"
    });
    const [data2, setData2] = useState({
        title: "Giá phòng",
        value1: "Dưới 1 triệu", 
        value2: "1 - 1.5 triệu",
        value3: "1.5 - 2 triệu",
        value4: "2.5 - 3 triệu",
        value5: "cao hơn"   
    });
    const [data3, setData3] = useState({
        title: "Diện tích",
        value1: "Dưới 15m2", 
        value2: "15-20m2",
        value3: "20-25m2",
        value4: "25-30m2",
        value5: "Lớn hơn"
    });

    
    
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
                    <CustomSelect data={data1}/>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <RoomIcon/>
                    </div>
                    <CustomSelect data={data2}/>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <HomeIcon/>
                    </div>
                    <CustomSelect data={data3}/>
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
                    <CustomSelect data={data1}/>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <NearMeIcon/>
                    </div>
                    <CustomSelect data={data2}/>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <HomeIcon/>
                    </div>
                    <CustomSelect data={data3}/>
                </div>
                <Button variant="contained" color="primary" disableElevation className="header__button">
                    Tìm kiếm
                </Button>
            </form>
        </div>
    );
}

export default Header;