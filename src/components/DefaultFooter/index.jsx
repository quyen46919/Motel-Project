import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

DefaultFooter.propTypes = {
    
};

function DefaultFooter(props) {
    return (
        <div className="footer">
            <div className="box">
                <div className="box__content box__content--1">
                    <h3 className="box__title">CẦN HỖ TRỢ</h3>
                </div>
                <div className="box__content box__content--2">
                    <div className="box__content--element">
                        <p>Gọi cho chúng tôi</p>
                    </div>
                    <div className="box__content--element">
                        <h3 className="box__bold">+ 00 222 44 5678</h3>
                    </div>
                </div>
                <div className="box__content">
                    <div className="box__content--element">
                        <p>Email cho chúng tôi</p>
                    </div>
                    <div className="box__content--element">
                        <h3 className="box__bold">chiasetro@gmail.com</h3>
                    </div>
                    
                </div>
                <div className="box__content">
                    <div className="box__content--element">
                        <p>Theo dõi chúng tôi</p>
                    </div>
                    <div className="box__content--element box__icons">
                        {/* <i className="fab fa-facebook-square box__fb"></i>
                        <i className="fab fa-twitter box__twitter"></i>
                        <i className="fab fa-instagram box__ins"></i> */}
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box__content box__content--1">
                    <h3 className="box__title">Văn phòng</h3>
                </div>
                <div className="box__content box__content--2 box__content--diff">
                    <h3><a href="#">Về chúng tôi</a></h3>
                    <h3><a href="#">Hợp tác</a></h3>
                    <h3><a href="#">Chính sách</a></h3>
                    <h3><a href="#">Quảng cáo</a></h3>
                </div>
            </div>
            <div className="box">
                <div className="box__content box__content--1">
                    <h3 className="box__title">Hỗ trợ</h3>
                </div>
                <div className="box__content box__content--2 box__content--diff">
                    <h3><a href="#">Tài khoản</a></h3>
                    <h3><a href="#">Liên hệ</a></h3>
                    <h3><a href="#">Điều khoản sử dụng</a></h3>
                    <h3><a href="#">Chính sách bảo mật</a></h3>
                </div>
            </div>
            <div className="box box__right">
                <div className="box__content box__content--1">
                    <h3 className="box__title">Cài đặt</h3>
                </div>
                <div className="box__content box__content--2">
                    <div className="box__content--element box__drop">
                        <p>Giao diện</p>
                    </div>
                    <div className="box__content--element box__drop">
                    <select className="box__select">
                        <option value="light">Sáng</option>
                        <option value="dark">Tối</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultFooter;