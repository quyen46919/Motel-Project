import { MenuItem, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import NearMeIcon from '@material-ui/icons/NearMe';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Filter from '../../features/Filter';
import SideMenu from './components/SideMenu';
import Menu from './components/Menu';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    logIn: {
      color: "white",
      fontSize: "35px"
    },
    textField: {
      flex: "3",
      minWidth: "10px!important",
      height: "90%",
      paddingLeft: "10px",
      "& > *" : {
        border: "none!important",
        padding: 0,
        color: "#64707c!important"
      },
      "& ~ MuiSelect-iconOutlined" : {
        marginRight: "-5px!important"
      }
  },
  submitBtn: {
    background: "#1379ff!important",
    height: "45px!important"
  },
  iconStyles: {
    color: "#a1b1c1!important"
  },
  loginBtn: {
    border: "1px solid #1379ff!important",
    color: "#1379ff!important",
  }
}));

function Header(props) {
    const classes = useStyles();
    const {register, handleSubmit, errors, control} = useForm();
    const [open, setOpen] = useState(false);
    const handleOpenMenu = () => {
      setOpen(!open);
    }

    const onSubmit = (values) => {
      console.log("FORM DATA: ", values);
    }

    return (
        <div className="header">
            <div className="header__logo">
                  <NavLink to="/main"> 
                    ChiaSeTro
                  </NavLink>
            </div>
            <form action="" className="header__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="header__search--wrapper">
                    <div className="header__icon">
                        <SearchIcon/>
                    </div>
                    <input type="text"
                      name="search" 
                      className="header__search" 
                      placeholder="Tìm kiếm" 
                      ref={register}
                     />
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <NearMeIcon className={classes.iconStyles}/>
                    </div>
                    <Controller 
                      control={control}
                      as={Select}
                      name="location"
                      inputRef={register}
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.textField}
                      defaultValue="haichau"
                    >
                      <MenuItem value="haichau" className="header__menu-item">Hải Châu</MenuItem>
                      <MenuItem value="camle" className="header__menu-item">Cẩm Lệ</MenuItem>
                      <MenuItem value="lienchieu" className="header__menu-item">Liên Chiểu</MenuItem>
                      <MenuItem value="sontra" className="header__menu-item">Sơn Trà</MenuItem>
                      <MenuItem value="nguhanhson" className="header__menu-item">Ngũ Hành Sơn</MenuItem>
                    </Controller>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <AttachMoneyIcon/>
                    </div>
                    <Controller 
                      control={control}
                      as={Select}
                      name="prices"
                      inputRef={register}
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.textField}
                      defaultValue="1tr"
                    >
                      <MenuItem value="1tr" className="header__menu-item">Dưới 1 triệu</MenuItem>
                      <MenuItem value="1tr5-2tr" className="header__menu-item">1.5 - 2 triệu</MenuItem>
                      <MenuItem value="2tr-2.5tr" className="header__menu-item">2 - 2.5 triệu</MenuItem>
                      <MenuItem value="2.5tr-3tr" className="header__menu-item">2.5 - 3 triệu</MenuItem>
                      <MenuItem value="3tr" className="header__menu-item">Hơn 3 triệu</MenuItem>
                    </Controller>
                </div>
                <div className="header__select--wrapper">
                    <div className="header__icon">
                        <HomeIcon/>
                    </div>
                    <Controller 
                      control={control}
                      as={Select}
                      inputRef={register}
                      name="acreage"
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.textField}
                      defaultValue="15"
                    >
                      <MenuItem value="15" className="header__menu-item">Dưới 15m2</MenuItem>
                      <MenuItem value="20" className="header__menu-item">15-20m2</MenuItem>
                      <MenuItem value="25" className="header__menu-item">20-25m2</MenuItem>
                      <MenuItem value="30" className="header__menu-item">25-30m2</MenuItem>
                      <MenuItem value="35" className="header__menu-item">Hơn 30m2</MenuItem>
                    </Controller>
                </div>
                <Button type="submit" variant="contained" color="primary" className={classes.submitBtn}>
                  Tìm kiếm
                </Button>
            </form>
            {/* <div className="header__login"> */}
            <div className="header__menu-search">
              <div className="header__filter">
                  <Filter/>
              </div>
              {/* <div className="header__menu">
                  <MenuIcon className={classes.logIn} />
              </div> */}
              <NavLink to="/login" className="header__login">
                <Button type="submit" color="primary" className={classes.loginBtn}>
                  Đăng nhập
                </Button>
              </NavLink>
              <NavLink to="/register" className="header__login">
                <Button type="submit" color="primary" className={classes.loginBtn}>
                  Đăng ký
                </Button>
              </NavLink>    
            </div>
            <div className="header__side-menu">
              <SideMenu/>
            </div>
            {/* <div className="header__menu-search header__menu-search--hidden">
              <div to="/sign-in-sign-up" className="header__search">
                  
              </div>
              <div className="header__menu">
                  <MenuIcon className={classes.logIn}/>
              </div>
              <NavLink to="/sign-in-sign-up" className="header__login">
                  <ExitToAppIcon className={classes.logIn}/>
              </NavLink>
            </div> */}
            <Menu/>
        </div>
    );
}

export default Header;