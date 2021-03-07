import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Purpose(props) {
  return (
    <div className="about-us__purpose">
      <div className="about-us__title about-us__title--style">
        <span>Vì sao chúng tôi tạo ra trang web này ?</span>
      </div>
      <div className="about-us__content">
        <div className="about-us__content-img">
          <div className="about-us__content-img-content">
            <img
              src="https://cellflare.com/wp-content/uploads/2019/03/integration.svg"
              alt=""
              className="about-us__img--style"
            />
          </div>
        </div>
        <div className="about-us__content-text">
          <div className="about-us__content-text-span">
            <div className="about-us__content-quotes-top">
              <div className="quotes-01"></div>
              <div className="quotes-02"></div>
            </div>
            <span>
              Open Editpad Wordpad and start creating the notes online. You can
              also copy-paste to edit text and save it for later use. Besides
              this, our online notepad allows users to upload files from a
              computer, Google Drive, and One Drive. (under development)
            </span>
            <div className="about-us__content-quotes-bottom">
              <div className="quotes-01"></div>
              <div className="quotes-02"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Purpose.propTypes = {};

export default Purpose;
