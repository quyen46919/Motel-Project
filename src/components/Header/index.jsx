import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import NearMeIcon from '@material-ui/icons/NearMe';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomSelect from './components/CustomSelect';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import './styles.scss';
import { Controller, useForm } from 'react-hook-form';
import { MenuItem, Select, TextField } from '@material-ui/core';


Header.propTypes = {

};
const useStyles = makeStyles((theme) => ({
    logIn: {
      color: "white",
      fontSize: "40px"
    },
    textField: {
      flex: "3",
      minWidth: "10px!important",
      height: "90%",
      paddingLeft: "10px",
      "& > *" : {
        border: "none!important",
        padding: 0
      },
      "& ~ MuiSelect-iconOutlined" : {
        marginRight: "-5px!important"
      }
  },
  submitBtn: {
    background: "#1379ff!important"
  }
}));

function Header(props) {
    const classes = useStyles();
    const [location, setLocation] = React.useState("haichau");

    const {register, handleSubmit, errors, control} = useForm();


    const onSubmit = (values) => {
      console.log("FORM DATA: ", values);
    }

    return (
        <div className="header">
            <div className="header__logo">
                <h1>LOGO</h1>
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
                        <NearMeIcon/>
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
            <Link to="/sign-in-sign-up" className="header__login">
                <ExitToAppIcon className={classes.logIn}/>
            </Link>
                
            {/* </div> */}


          <form action="" className="header__form--sub" onSubmit={handleSubmit(onSubmit)}>
            <div className="header__select--wrapper">
                    <div className="header__icon">
                        <NearMeIcon/>
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
        </div>
    );
}

export default Header;