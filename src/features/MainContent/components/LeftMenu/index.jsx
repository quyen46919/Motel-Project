import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink } from 'react-router-dom';
LeftMenu.propTypes = {
    
};

function LeftMenu(props) {
    return (
        <div className="left-menu">
              <nav class="left-menu__navbar">
                <ul class="left-menu__navbar-nav">
                    <li class="nav-item">
                        <NavLink to="/">
                            <a href="#" class="nav-link">
                            <i class="fas fa-h-square"></i>
                            <span class="link-text">Thuê trọ</span>
                            </a>
                        </NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink to="/post">
                            <a href="#" class="nav-link">
                            <i class="fab fa-pushed"></i>
                            <span class="link-text">Đăng tin</span>
                            </a>
                        </NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink to="/favorite">
                            <a href="#" class="nav-link">
                            <i class="fas fa-heart"></i>
                            <span class="link-text">Yêu thích</span>
                            </a>
                        </NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink to="/contact">
                            <a href="#" class="nav-link">
                            <i class="fas fa-ad"></i>
                            <span class="link-text">Liên hệ</span>
                            </a>
                        </NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink to="/about">
                            <a href="#" class="nav-link">
                            <i class="fas fa-id-card-alt"></i>
                            <span class="link-text">Về chúng tôi</span>
                            </a>
                        </NavLink>
                    </li>

                    <li class="nav-item" id="themeButton">
                        <NavLink to="/setting">
                            <a href="#" class="nav-link">
                            <i class="fas fa-wrench"></i>
                            <span class="link-text">Cài đặt</span>
                            </a>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LeftMenu;