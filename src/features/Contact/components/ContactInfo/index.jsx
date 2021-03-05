import React from 'react';
import PropTypes from 'prop-types';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import NearMeIcon from '@material-ui/icons/NearMe';
import './style.scss';
import { ADDRESS_STR, EMAIL_STR, PHONE_NUMBER } from '../../constants';

function ContactIntro(props) {
  return (
    <div className="contact__info">
      <div className="contact__info__title">
        <span className="contact__info__title--h1">Liên lạc với chúng tôi</span>
        <span className="contact__info__title--p">
          Để lại lời nhắn của bạn và chúng tôi sẽ <br /> liên lạc với bạn trong
          vào 2 ngày làm việc 😍
        </span>
      </div>
      <div className="contact__intro">
        <div className="contact__call contact__intro--style">
          <div className="contact__icon">
            <CallIcon />
          </div>
          <div className="contact__text">{PHONE_NUMBER}</div>
        </div>
        <div className="contact__email contact__intro--style">
          <div className="contact__icon">
            <EmailIcon />
          </div>
          <div className="contact__text">{EMAIL_STR}</div>
        </div>
        <div className="contact__address contact__intro--style">
          <div className="contact__icon">
            <NearMeIcon />
          </div>
          <div className="contact__text">{ADDRESS_STR}</div>
        </div>
      </div>
      <div className="contact__other">
        <div className="contact__facebook contact__other--style">
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="contact__twitter contact__other--style">
          <i className="fab fa-twitter"></i>
        </div>
        <div className="contact__instagram contact__other--style">
          <i className="fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

ContactIntro.propTypes = {};

export default ContactIntro;
