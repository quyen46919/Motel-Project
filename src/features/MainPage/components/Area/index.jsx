import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import img1 from '../../../../assets/images/bloom.jpg';
import img2 from '../../../../assets/images/blosom.jpg';
import img3 from '../../../../assets/images/bloom.jpg';
import img4 from '../../../../assets/images/blosom.jpg';
import img5 from '../../../../assets/images/bloom.jpg';
import img6 from '../../../../assets/images/blosom.jpg';
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
            <h1>Khu vực</h1>
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
                            <p>10 trọ</p>
                        </div>
                    </div>
                </motion.div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Liên Chiểu</h3>
                            <p>10 trọ</p>
                        </div>
                    </div>
                </div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Liên Chiểu</h3>
                            <p>10 trọ</p>
                        </div>
                    </div>
                </div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Liên Chiểu</h3>
                            <p>10 trọ</p>
                        </div>
                    </div>
                </div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Liên Chiểu</h3>
                            <p>10 trọ</p>
                        </div>
                    </div>
                </div>
                <div className="area__box-wrapper">
                    <div className="area__img">
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className="area__details">
                        <div className="area__details-wrapper">
                            <h3>Liên Chiểu</h3>
                            <p>10 trọ</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Area;