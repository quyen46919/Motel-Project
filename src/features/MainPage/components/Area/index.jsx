import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import img1 from '../../../../assets/images/lienchieu.jpg';
import img2 from '../../../../assets/images/haichau.jpg';
import img3 from '../../../../assets/images/camle.jpg';
import img4 from '../../../../assets/images/sontra.jpg';
import img5 from '../../../../assets/images/thanhkhe.jpg';
import img6 from '../../../../assets/images/nguhanhson.jpg';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer';

Area.propTypes = {
    
};

function Area(props) {
    const {ref, inView} = useInView();
    const animation = useAnimation();

    // useEffect(() => {
    //     console.log('useEffect hooks, inview = ', inView);
    //     if(inView) {
    //         animation.start({
    //             y: 0,
    //             opacity: 1,
    //             transition: {  duration: 0.25 }
    //         })
    //     } else {
    //         animation.start({
    //             y: 100,
    //             opacity: 0,
    //             transition: {  duration: 0.25 }
    //         })
    //     }
    // }, [inView]);

    return (
        <motion.div className="area"  ref={ref} animate={animation}>
            <h1>Phòng trọ tại các khu vực</h1>
            <div className="area__list">
                <motion.div className="area__box-wrapper" 
                    initial={{x: -200}}
                    animate={{x: 0}}
                >
                    <div className="area__img">
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Liên Chiểu</h3>
                            <p>0 trọ</p>
                        </div>
                    </div>
                </motion.div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img2} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Hải Châu</h3>
                            <p>2 trọ</p>
                        </div>
                    </div>
                </div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img3} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Cẩm Lệ</h3>
                            <p>11 trọ</p>
                        </div>
                    </div>
                </div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img4} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Sơn Trà</h3>
                            <p>13 trọ</p>
                        </div>
                    </div>
                </div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img5} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Thanh Khê</h3>
                            <p>20 trọ</p>
                        </div>
                    </div>
                </div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img6} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Ngũ Hành Sơn</h3>
                            <p>8 trọ</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Area;