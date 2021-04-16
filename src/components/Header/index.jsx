import { MenuItem, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import NearMeIcon from '@material-ui/icons/NearMe';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Filter from '../../features/Filter';
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
    background: "#1379ff!important"
  },
  iconStyles: {
    color: "#a1b1c1!important"
  }
}));

function Header(props) {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = React.useState(true);

    const {register, handleSubmit, errors, control} = useForm();


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
                      placeholder="Nhập tên đường bạn muốn tìm..." 
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
                      <MenuItem value="haichau">Hải Châu</MenuItem>
                      <MenuItem value="camle">Cẩm Lệ</MenuItem>
                      <MenuItem value="lienchieu">Liên Chiểu</MenuItem>
                      <MenuItem value="sontra">Sơn Trà</MenuItem>
                      <MenuItem value="nguhanhson">Ngũ Hành Sơn</MenuItem>
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
                      <MenuItem value="1tr">Dưới 1 triệu</MenuItem>
                      <MenuItem value="1tr5-2tr">1.5 - 2 triệu</MenuItem>
                      <MenuItem value="2tr-2.5tr">2 - 2.5 triệu</MenuItem>
                      <MenuItem value="2.5tr-3tr">2.5 - 3 triệu</MenuItem>
                      <MenuItem value="3tr">Hơn 3 triệu</MenuItem>
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
                      <MenuItem value="15">Dưới 15m2</MenuItem>
                      <MenuItem value="20">15-20m2</MenuItem>
                      <MenuItem value="25">20-25m2</MenuItem>
                      <MenuItem value="30">25-30m2</MenuItem>
                      <MenuItem value="35">Hơn 30m2</MenuItem>
                    </Controller>
                </div>
                <Button type="submit" variant="contained" color="primary" className={classes.submitBtn}>
                  Tìm kiếm
                </Button>
            </form>
            {/* <div className="header__login"> */}
            <div className="header__menu-search">
              <div to="/sign-in-sign-up" className="header__search">
                  <Filter/>
              </div>
              <div className="header__menu">
                  <MenuIcon className={classes.logIn} onClick={() => setOpenMenu(!openMenu)}/>
              </div>
              <NavLink to="/sign-in-sign-up" className="header__login">
                  <ExitToAppIcon className={classes.logIn}/>
              </NavLink>
            </div>

          {openMenu && <Menu/>}
        </div>
    );
}

export default Header;