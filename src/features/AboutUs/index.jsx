import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import img1 from '../../assets/images/z2365389439131_91a49281807e40eb19c27d37d4794c53.jpg';
import img2 from '../../assets/images/z2365389439127_5d530555c0b741ad2ab9ed6b614b44e9.jpg';
import img3 from '../../assets/images/z2365389441514_abf8a8c7d5129ca9df01e77cf247e5a0.jpg';

AboutUs.propTypes = {
    
};

function AboutUs(props) {
    return (
        <div className="about-us">

            <h1 className="about-us__title">Chúng tôi là ai?</h1>
            <div className="about-us__details-wrapper">
                <div className="about-us__img">
                    <img src={img1} alt="anh"/>
                </div>
                <div className="about-us__details">
                    <h1>Nguyễn Văn C</h1>
                    <p>Sinh viên ngành CNTT - Đại học Đông Á</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam culpa nesciunt provident a sit veritatis dolor temporibus voluptate cum consectetur consequatur deleniti, enim aut, accusantium quisquam obcaecati porro! Nulla.</p>
                </div>
            </div>
            <div className="about-us__details-wrapper">
                <div className="about-us__details about-us__details--2">
                    <h1>Nguyễn Văn A</h1>
                    <p>Sinh viên ngành CNTT - Đại học Đông Á</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam culpa nesciunt provident a sit veritatis dolor temporibus voluptate cum consectetur consequatur deleniti, enim aut, accusantium quisquam obcaecati porro! Nulla.</p>
                </div>
                <div className="about-us__img about-us__img--2">
                    <img src={img2} alt="anh"/>
                </div>
            </div>

            <h1 className="about-us__title">Mục đích chúng tôi tạo ra trang web này</h1>
            <div className="about-us__details-wrapper">
                <div className="about-us__img about-us__img--3">
                    <img src={img1} alt="anh"/>
                </div>
                <div className="about-us__details">
                    <p className="about-us__purpose about-us__purpose--1">Chúng tôi mong muốn tạo ra trang web giúp các bạn sinh viên có thể tìm kiếm và đặt trọ một cách nhanh nhất, thuận tiện nhất có thể!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;