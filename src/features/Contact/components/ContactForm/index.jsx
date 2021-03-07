import React from 'react';
import Button from '@material-ui/core/Button';
import './style.scss';
import PropTypes from 'prop-types';

const style = {
  background: '#1379ff',
  color: '#fff',
  padding: '15px 40px',
  float: 'right',
};
function ContactForm(props) {
  return (
    <div className="contact__form">
      <form className="contact__form-in">
        <div className="contact__form-item">
          <span>Tên của bạn</span>
          <div className="contact__form-item-input">
            <i className="far fa-user"></i>
            <input type="text" className="contact__form-item-input--style" />
          </div>
        </div>
        <div className="contact__form-item">
          <span>Địa chỉ Email của bạn</span>
          <div className="contact__form-item-input">
            <i className="far fa-envelope"></i>
            <input type="email" className="contact__form-item-input--style" />
          </div>
        </div>
        <div className="contact__form-item">
          <span>Lời nhắn</span>
          <div className="contact__form-item-input2">
            <textarea required placeholder="lời nhắn..."></textarea>
          </div>
        </div>
        <div className="contact__form-in-btn">
          <Button variant="contained" style={style} disableElevation>
            Gửi tin nhắn
          </Button>
        </div>
      </form>
    </div>
  );
}

ContactForm.propTypes = {};

export default ContactForm;
