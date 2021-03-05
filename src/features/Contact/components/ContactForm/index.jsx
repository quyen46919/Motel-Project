import React from 'react';
import Button from '@material-ui/core/Button';
import './style.scss';
import PropTypes from 'prop-types';

const style = {
  background: 'rgb(86, 145, 246)',
  color: '#fff',
  padding: '15px 40px',
};
function ContactForm(props) {
  return (
    <div className="contact__form">
      <form className="contact__form-in">
        <div className="contact__form-item">
          <span>Tên của bạn</span>
          <div className="contact__form-item-input">
            <i className="far fa-user"></i>
            <input
              type="text"
              // placeholder="name..."
              className="contact__form-item-input--style"
            />
          </div>
        </div>
        <div className="contact__form-item">
          <span>Địa chỉ Email của bạn</span>
          <div className="contact__form-item-input">
            <i className="far fa-envelope"></i>
            <input
              type="email"
              // placeholder="email address..."
              className="contact__form-item-input--style"
            />
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
