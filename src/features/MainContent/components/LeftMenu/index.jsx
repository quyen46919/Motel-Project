import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink, useRouteMatch } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ForumIcon from '@material-ui/icons/Forum';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#de4552",
        width: "2rem",
        minWidth: "2rem",
        margin: "0 1.25rem",
        fontSize: "25px",
        padding: "5px 1px",
        color: "white",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "center",
    },
    postIcon: {
        background: "#f19c2d"
    },
    favoriteIcon: {
        background: "#ff6a84"
    },
    forumIcon: {
        background: "#2cc6f6"
    },
    recentActorsIcon: {
        background: "#524f87"
    },
    buildIcon: {
        background: "#c0c0c0"
    }
  }));
LeftMenu.propTypes = {
    
};


function LeftMenu(props) {
    const classes = useStyles();
    // const match = useRouteMatch();
    let { path, url } = useRouteMatch();
    
    return (
        <div className="left-menu">
              <nav className="left-menu__navbar">
                <ul className="left-menu__navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <HomeIcon className={`${classes.root} ${classes.homeIcon}`}/>
                            <span className="link-text">Thuê trọ</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/post" className="nav-link">
                            <PostAddIcon className={`${classes.root} ${classes.postIcon}`}/>
                            <span className="link-text">Đăng tin</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/favorite" className="nav-link">
                            <FavoriteIcon className={`${classes.root} ${classes.favoriteIcon}`}/>
                            <span className="link-text">Yêu thích</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">
                            <ForumIcon className={`${classes.root} ${classes.forumIcon}`}/>
                            <span className="link-text">Liên hệ</span>
                        </NavLink>
                    </li>

                    <li className="nav-item" id="nav-item--hidden">
                        <NavLink to="/about" className="nav-link">
                            <RecentActorsIcon className={`${classes.root} ${classes.recentActorsIcon}`}/>
                            <span className="link-text">Về chúng tôi</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/setting" className="nav-link">
                            <BuildIcon className={`${classes.root} ${classes.buildIcon}`}/>
                            <span className="link-text">Cài đặt</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LeftMenu;