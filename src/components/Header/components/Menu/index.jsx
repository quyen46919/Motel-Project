// import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from '@material-ui/core/styles';
import ForumIcon from '@material-ui/icons/Forum';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PostAddIcon from '@material-ui/icons/PostAdd';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        // background: "#de4552",
        width: "2rem!important",
        minWidth: "2rem!important",
        height: "25px",
        margin: "0 1.25rem!important",
        marginRight: "0!important",
        fontSize: "30px!important",
        padding: "5px 1px!important",
        color: "#a1b1c1!important",
        borderRadius: "3px!important",
        display: "flex!important",
        justifyContent: "center!important",
        fontSize: "30px!important",
        "@media (max-width: 1240px)": {
            // color: "#5392f9!important"
        }
    },
  }));


function Menu(props) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    return (
        <div className="left-menu">
              <nav className="left-menu__navbar">
                <ul className="left-menu__navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/main" className="nav-link">
                            <HomeIcon className={classes.root}/>
                            <span className="link-text">Thuê trọ</span>
                            {/* <KeyboardArrowDownIcon className={classes.root}/> */}
                            
                        </NavLink>
                        <div className="left-menu__list">
                            <List component="nav">
                                <ListItem button >
                                    <ListItemText primary="Hải Châu" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Cẩm Lệ" />
                                </ListItem>
                                <ListItem button >
                                    <ListItemText primary="Sơn Trà" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Ngũ Hành Sơn" />
                                </ListItem>
                                <ListItem button >
                                    <ListItemText primary="Hòa Vang" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Liên Chiểu" />
                                </ListItem>
                            </List>
                        </div>
                    </li>
                    

                    {/* <li className="nav-item">
                        <NavLink to="/main/merge" className="nav-link" activeClassName="actived">
                            <PeopleIcon className={classes.root}/>
                            <span className="link-text">Ghép trọ</span>
                        </NavLink>
                        <div className="left-menu__list">
                            <List component="nav" >
                                <ListItem button >
                                    <ListItemText primary="Hải Châu" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Cẩm Lệ" />
                                </ListItem>
                                <ListItem button >
                                    <ListItemText primary="Sơn Trà" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Ngũ Hành Sơn" />
                                </ListItem>
                                <ListItem button >
                                    <ListItemText primary="Hòa Vang" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Liên Chiểu" />
                                </ListItem>
                            </List>
                        </div>
                    </li> */}

                    <li className="nav-item">
                        <NavLink to="/main/post" className="nav-link" activeClassName="actived">
                            <PostAddIcon className={classes.root}/>
                            <span className="link-text">Đăng tin</span>
                        </NavLink>
                        <div className="left-menu__list">
                            <List component="nav" >
                                <ListItem button >
                                    <ListItemText primary="Đăng tin tìm trọ" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Đăng tin ghép trọ" />
                                </ListItem>
                            </List>
                        </div>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/main/contact" className="nav-link" activeClassName="actived">
                            <ForumIcon className={classes.root}/>
                            <span className="link-text">Liên hệ</span>
                        </NavLink>
                    </li>

                    {/* <li className="nav-item">
                        <NavLink to="/main/about" className="nav-link">
                            <HelpIcon className={classes.root}/>
                            <span className="link-text">Về chúng tôi</span>
                        </NavLink>
                    </li> */}
                     <li className="nav-item">
                        <NavLink to="/main/account" className="nav-link" activeClassName="actived">
                            <HelpIcon className={classes.root}/>
                            <span className="link-text">Tài khoản</span>
                        </NavLink>
                        <div className="left-menu__list">
                            <List component="nav" >
                                <ListItem button >
                                    <ListItemText primary="Cập nhật thông tin" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Đổi mật khẩu" />
                                </ListItem>
                            </List>
                        </div>
                    </li>
                    
                    {/* <li className="nav-item" id="nav-item--hidden">
                        <NavLink to="/main/about" className="nav-link">
                            <RecentActorsIcon className={classes.root}/>
                            <span className="link-text">Về chúng tôi</span>
                        </NavLink>
                    </li> */}

                    {/* <li className="nav-item">
                        <NavLink to="/main/setting" className="nav-link">
                            <BuildIcon className={classes.root}/>
                            <span className="link-text">Cài đặt</span>
                        </NavLink>
                    </li> */}
{/* 
                    <li className="nav-item nav-item--hidden">
                        <Link to="/sign-in-sign-up" className="nav-link">
                            <ExitToAppIcon className={classes.root}/>
                            <span className="link-text">Đăng nhập</span>
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Menu;