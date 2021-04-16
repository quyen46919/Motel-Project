import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ForumIcon from '@material-ui/icons/Forum';
import BuildIcon from '@material-ui/icons/Build';
import BookIcon from '@material-ui/icons/Book';
import PeopleIcon from '@material-ui/icons/People';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
            color: "#5392f9!important"
        }
    },
  }));


function Menu(props) {
    const classes = useStyles();
    
    return (
        <div className="left-menu">
              <nav className="left-menu__navbar">
                <ul className="left-menu__navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/main/" className="nav-link">
                            <HomeIcon className={classes.root}/>
                            <span className="link-text">Thuê trọ</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/main/" className="nav-link">
                            <PeopleIcon className={classes.root}/>
                            <span className="link-text">Ghép trọ</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/main/" className="nav-link">
                            <HomeWorkIcon className={classes.root}/>
                            <span className="link-text">Căn hộ</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/main/post" className="nav-link">
                            <PostAddIcon className={classes.root}/>
                            <span className="link-text">Đăng tin</span>
                        </NavLink>
                    </li>

                    {/* <li className="nav-item">
                        <NavLink to="/main/favorite" className="nav-link">
                            <FavoriteIcon className={classes.root}/>
                            <span className="link-text">Yêu thích</span>
                        </NavLink>
                    </li> */}
                    
                    {/* <li className="nav-item">
                        <NavLink to="/blog" className="nav-link">
                            <BookIcon className={`${classes.root} ${classes.bookIcon}`}/>
                            <span className="link-text">Blog</span>
                        </NavLink>
                    </li> */}

                    <li className="nav-item">
                        <NavLink to="/main/contact" className="nav-link">
                            <ForumIcon className={classes.root}/>
                            <span className="link-text">Liên hệ</span>
                        </NavLink>
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