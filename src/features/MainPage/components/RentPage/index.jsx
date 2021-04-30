import { Button, Fab, makeStyles, Toolbar, useScrollTrigger } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../../assets/images/bloom.jpg';
import img2 from '../../../../assets/images/blosom.jpg';
import img3 from '../../../../assets/images/liyue.jpg';
import img4 from '../../../../assets/images/liyue2.jpg';
import img5 from '../../../../assets/images/liyue3.jpg';
import img6 from '../../../../assets/images/liyue4.jpg';
import img7 from '../../../../assets/images/liyue5.jpg';
import img8 from '../../../../assets/images/pink-flower.jpg';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import PropTypes from 'prop-types';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CardItem from '../CardItem';
import './styles.scss';
import DragSlider from '../CustomDragSlider';
import Pagination from '@material-ui/lab/Pagination';
import Area from '../Area';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {useInView} from 'react-intersection-observer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { useWindowScroll } from "react-use";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
        height: 50
      },
      '& button': {
          height: 40,
          width: 40,
          border: '1px solid #1379ff',
      }
    },
    backToTop: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
        zIndex: 10000000,
        height: "40px",
        width: "40px",
        visibility: 'visible!important',
        transform: 'scale(1)!important'
      },
      toolbar: {
          height: "0!important",
          minHeight: "0!important",
      }
  }));

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={`${classes.backToTop} toTop`}>
            {children}
            </div>
        </Zoom>
    );
  }
  

  
function RentPage(props) {
    const classes = useStyles();

    return (
        <AnimatePresence>
            <div className="rent-page">
                <Toolbar id="back-to-top-anchor" className={classes.toolbar}/>
                <motion.div 
                    className="rent-page__bg1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{duration: 0.35, type: "spring", stiffness: 200}}
                >
                    <h1 className="rent-page__bg-title">Tìm phòng trọ</h1>
                    <p className="rent-page__bg-text">Tìm kiếm phòng trọ nhanh chóng và tiện lợi theo các tiêu chí cụ thể</p>
                    <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                        Tìm hiểu thêm
                    </Button>
                </motion.div>
                <div className="rent-page__bg-wrapper">
                    <div className="rent-page__bg--details">
                        <motion.div 
                            className="rent-page__bg-block"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: 0.25}}
                        >
                            <div className="rent-page__bg-icon">
                                <EventAvailableIcon/>
                            </div>
                            <div className="rent-page__icon-details">
                                <h3>Nhanh chóng</h3>
                                <p>Trọ được cập nhật thông tin liên tục từ các bạn sinh viên.</p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="rent-page__bg-block"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.25}}
                        >
                            <div className="rent-page__bg-icon">
                                <LaptopWindowsIcon/>
                            </div>
                            <div className="rent-page__icon-details">
                                <h3>Tiện lợi</h3>
                                <p>Tra cứu và đọc thông tin mô tả của trọ để dễ dàng chọn lựa trọ mong muốn.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="rent-page__bg-block"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{duration: 0.9, delay: 0.25}}
                         >
                            <div className="rent-page__bg-icon">
                                <ChatBubbleOutlineIcon/>
                            </div>
                            <div className="rent-page__icon-details">
                                <h3>Đánh giá</h3>
                                <p>Để lại bình luận và đánh giá sẽ giúp mọi người có cái nhìn tổng quát hơn về trọ.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* <div className="rent-page__bgdetails"></div> */}
                <div  className="rent-page__list-items">
                    {/* <div className="test1"></div> */}
                    <div className="rent-page__list-title">
                        <h1>Phòng trọ gợi ý cho bạn</h1>
                    </div>

                    <motion.div className="rent-page__list">
                        <CardItem img={img} delay="0.5"/>
                        <CardItem img={img2} delay="0.75"/>
                        <CardItem img={img3} delay="0.95"/>
                        <CardItem img={img4} delay="1.15"/>
                        <CardItem img={img5} delay="1.35"/>
                        <CardItem img={img6} delay="1.55"/>
                        <CardItem img={img7} delay="1.75"/>
                        <CardItem img={img8} delay="2.05"/>
                        {/* <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button> */}
                    </motion.div>
                    <div className="rent-page__list">
                        {/* <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button> */}
                        <div className={classes.root}>
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </div>
                    </div>
                    {/* <div className="rent-page__test2"></div> */}
                    <Area />
                    <div className="rent-page__list-title">
                        <h1>Phòng trọ khu vực Hải Châu</h1>
                    </div>

                    <motion.div className="rent-page__list">
                        {/* <DragSlider/> */}
                        <CardItem img={img}/>
                        <CardItem img={img2}/>
                        <CardItem img={img3}/>
                        <CardItem img={img4}/>
                        <CardItem img={img}/>
                        <CardItem img={img2}/>
                        <CardItem img={img3}/>
                        <CardItem img={img4}/>
                        {/* <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button> */}
                    </motion.div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>
                    <div className="rent-page__list-title">
                        <h1>Phòng trọ khu vực Cẩm Lệ</h1>
                    </div>

                    <div className="rent-page__list">
                        <CardItem img={img}/>
                        <CardItem img={img2}/>
                        <CardItem img={img3}/>
                        <CardItem img={img4}/>
                        <CardItem img={img}/>
                        <CardItem img={img2}/>
                        <CardItem img={img3}/>
                        <CardItem img={img4}/>
                        {/* <DragSlider/> */}
                        {/* <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button> */}
                    </div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>
                    <div className="rent-page__list-title">
                        <h1>Phòng trọ khu vực Sơn Trà</h1>
                    </div>

                    <div className="rent-page__list">
                        <CardItem img={img}/>
                        <CardItem img={img2}/>
                        <CardItem img={img3}/>
                        <CardItem img={img4}/>
                        <CardItem img={img}/>
                        <CardItem img={img2}/>
                        <CardItem img={img3}/>
                        <CardItem img={img4}/>
                    </div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>
                    <div className="rent-page__list-title">
                        <h1>Phòng trọ khu vực Ngũ Hành Sơn</h1>
                    </div>

                    <div className="rent-page__list">
                        <CardItem img={img}/>
                        <CardItem img={img2}/>
                        <CardItem img={img3}/>
                        <CardItem img={img4}/>
                        <CardItem img={img}/>
                        <CardItem img={img2}/>
                        <CardItem img={img3}/>
                        <CardItem img={img4}/>
                    </div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>
                </div>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="large" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </div>

        </AnimatePresence>
    );
}

export default RentPage;