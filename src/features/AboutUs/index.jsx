import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AboutUs.propTypes = {
    
};

function AboutUs(props) {
    return (
        <div className="about-us">

            <h1 className="about-us__title">Chúng tôi là ai?</h1>
            <div className="about-us__details-wrapper">
                <div className="about-us__img"/>
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
                <div className="about-us__img about-us__img--2"/>
            </div>

            <h1 className="about-us__title">Mục đích chúng tôi tạo ra trang web này</h1>
            <div className="about-us__details-wrapper">
                <div className="about-us__img about-us__img--3"/>
                <div className="about-us__details">
                    <p className="about-us__purpose">Chúng tôi mong muốn tạo ra trang web giúp các bạn sinh viên có thể tìm kiếm và đặt trọ một cách nhanh nhất, thuận tiện nhất có thể!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;