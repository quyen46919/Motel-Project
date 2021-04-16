import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__wave footer__wave1"></div>
            <div className="footer__wave footer__wave2"></div>
            <div className="footer__wave footer__wave3"></div>
        </div>
    );
}

export default Footer;