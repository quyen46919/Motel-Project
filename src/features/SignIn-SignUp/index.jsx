import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';


function SignInSignUp(props) {
    const [isRegisterMode, setRegisterMode] = useState('sign-in');

    return (
        <div>
            <div className={`sign-container ${isRegisterMode === 'sign-in' ? '': (isRegisterMode === 'sign-up-mode' ? 'sign-up-mode' : 'forgot-password-mode')}`}>
                <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                    <h2 className="title">Đăng nhập</h2>
                    <div className="input-field">
                        <i className="fas fa-user" />
                        <input type="text" placeholder="Tài khoản" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock" />
                        <input type="password" placeholder="Mật khẩu" />
                    </div>
                    <input type="submit" defaultValue="Đăng nhập" className="btn solid" />
                    <p className="social-text">Hoặc đăng nhập với </p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-google" />
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    </form>
                    <form action="#" className="sign-up-form">
                    <h2 className="title">Đăng ký</h2>
                    <div className="input-field">
                        <i className="fas fa-user" />
                        <input type="text" placeholder="Tài khoản" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock" />
                        <input type="password" placeholder="Mật khẩu" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock" />
                        <input type="password" placeholder="Xác nhận mật khẩu" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-phone" />
                        <input type="number" placeholder="Số điện thoại" />
                    </div>
                    <input type="submit" className="btn" defaultValue="Đăng ký" />
                    </form>
                    <form action="#" className="forgot-password-form">
                    <h2 className="title">Tìm lại mật khẩu</h2>
                    <div className="input-field" id="OTP">
                        <div className="user-phone">
                        <i className="fas fa-user" />
                        <input type="text" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="otp">
                        <p>Gửi mã OTP</p>
                        </div>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock" />
                        <input type="number" placeholder="Nhập mã OTP" />
                    </div>
                    <input type="submit" defaultValue="Đăng nhập" className="btn solid" />
                    <p className="social-text">Hoặc đăng nhập với</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-google" />
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    </form>
                </div>
                </div>
                <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                    <h3>Bạn đã có tài khoản?</h3>
                    <p>
                        Quay trở lại đăng nhập để trải nghiệm nhé!!
                    </p>
                    <button 
                        className="btn transparent" 
                        id="sign-in-btn"
                        onClick={() => setRegisterMode('sign-in')}
                    >
                        Đăng nhập
                    </button>
                    </div>
                    {/* <img src="img/log.svg" class="image" alt="" /> */}
                </div>
                <div className="panel right-panel">
                    <div className="content">
                    <div className="sign-up-content">
                        <h3>Bạn chưa có tài khoản?</h3>
                        <p>
                        Tạo tài khoản mới ngay tại đây. Nếu bạn có tài khoản, chúng tôi mới có thể cho bạn trải nghiệm tốt nhất!!
                        </p>
                        <button 
                            className="btn transparent" 
                            id="sign-up-btn" 
                            onClick={ ()=> 
                            setRegisterMode('sign-up-mode')
                        }>
                        Đăng ký
                        </button>
                    </div>
                    <div className="forgot-password-content">
                        <h3>Quên mật khẩu?</h3>
                        <p>
                        Chúng tôi sẽ giúp bạn tìm lại mật khẩu một cách dễ dàng nhất!
                        </p>
                        <button 
                            className="btn transparent" 
                            id="forgot-password"
                            onClick={() => setRegisterMode('forgot-password-mode')}
                        >
                            Quên mật khẩu
                        </button>
                    </div>
                    </div>
                    {/* <img src="img/register.svg" class="image" alt="" /> */}
                </div>
                </div>
            </div>
        </div>
    );
}

export default SignInSignUp;