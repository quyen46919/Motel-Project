import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
NavLinkItem.propTypes = {
    
};

function NavLinkItem(props) {
    return (
        <li class="nav-item">
            <NavLink to="/" className="nav-link">
                <i class="fas fa-h-square"></i>
                <span class="link-text">Thuê trọ</span>
            </NavLink>
        </li>
    );
}

export default NavLinkItem;