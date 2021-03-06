import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink, useRouteMatch } from 'react-router-dom';


LeftMenu.propTypes = {
    
};


function LeftMenu(props) {
    // const match = useRouteMatch();
    let { path, url } = useRouteMatch();
    
    return (
        <div className="left-menu">
              <nav className="left-menu__navbar">
                <ul className="left-menu__navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <i className="fas fa-h-square"></i>
                            <span className="link-text">Thuê trọ</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/post" className="nav-link">
                            <i className="fab fa-pushed"></i>
                            <span className="link-text">Đăng tin</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/favorite" className="nav-link">
                            <i className="fas fa-heart"></i>
                            <span className="link-text">Yêu thích</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">
                            <i className="fas fa-ad"></i>
                            <span className="link-text">Liên hệ</span>
                        </NavLink>
                    </li>

                    <li className="nav-item" id="nav-item--hidden">
                        <NavLink to="/about" className="nav-link">
                            <i className="fas fa-id-card-alt"></i>
                            <span className="link-text">Về chúng tôi</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/setting" className="nav-link">
                            <i className="fas fa-wrench"></i>
                            <span className="link-text">Cài đặt</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LeftMenu;