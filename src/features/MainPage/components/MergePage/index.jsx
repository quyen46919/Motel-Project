import { Button } from '@material-ui/core';
import React from 'react';
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
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CardItem from '../CardItem';
import './styles.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Area from '../Area';

function MergePage() {
    return (
        <AnimatePresence>
        <div className="rent-page">
            <motion.div 
                className="rent-page__bg1
                merge-page__bg1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{duration: 0.35, type: "spring", stiffness: 200}}
             >
                <h1 className="rent-page__bg-title">Ghép trọ</h1>
                <p className="rent-page__bg-text">Ghép trọ với những sinh viên khác có phòng trọ sẵn tại phù vực Đà Nẵng</p>
                <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                    Tìm hiểu thêm
                </Button>
                {/* <SearchForm/> */}
            </motion.div>
            <div className="rent-page__bg-wrapper">
                <div className="rent-page__bg--details">
                    <motion.div 
                        className="rent-page__bg-block"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.25}}
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
                        transition={{duration: 0.6, delay: 0.5}}
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
                        transition={{duration: 0.6, delay: 0.75}}
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
            <div className="rent-page__list-items">
                {/* <div className="test1"></div> */}
                <div className="rent-page__list-title">
                    <h1>Phòng trọ gợi ý cho bạn</h1>
                </div>

                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img2}/>
                    <CardItem img={img3}/>
                    <CardItem img={img4}/>
                    <CardItem img={img5}/>
                    <CardItem img={img6}/>
                    <CardItem img={img7}/>
                    <CardItem img={img8}/>
                    {/* <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button> */}
                </div>
                <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div>
                {/* <div className="rent-page__test2"></div> */}
                <Area/>
                <div className="rent-page__list-title">
                    <h1>Phòng trọ khu vực Hải Châu</h1>
                </div>

                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img2}/>
                    <CardItem img={img3}/>
                    <CardItem img={img3}/>
                    <CardItem img={img5}/>
                    <CardItem img={img6}/>
                    <CardItem img={img7}/>
                    <CardItem img={img8}/>
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
                    <h1>Phòng trọ khu vực Cẩm Lệ</h1>
                </div>

                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img2}/>
                    <CardItem img={img5}/>
                    <CardItem img={img6}/>
                    <CardItem img={img7}/>
                    <CardItem img={img8}/>
                    <CardItem img={img3}/>
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
                    <CardItem img={img}/>
                    <CardItem img={img5}/>
                    <CardItem img={img6}/>
                    <CardItem img={img7}/>
                    <CardItem img={img8}/>
                    <CardItem img={img2}/>
                    <CardItem img={img3}/>
                    {/* <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button> */}
                </div>
                <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div>
                {/* <div className="rent-page__test"></div> */}
                {/* <div className="rent-page__bg1">
                    <h1 className="rent-page__bg-title">Ghép trọ</h1>
                    <p className="rent-page__bg-text">Các bạn sinh viên có nhu cầu tuyển bạn ghép trọ sẽ đăng tin tại đây</p>
                    <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                        Xem Ngay
                    </Button>
                </div> */}
                {/* <div className="rent-page__list-title">
                    <h1>Ghép trọ với sinh viên tại Đà Nẵng</h1>
                </div>
                <div className="rent-page__selfie">
                    <CardSlide SliderData={SliderData}/>
                </div>
                <div className="rent-page__list-title">
                    <h1>Gợi ý cho bạn</h1>
                </div>
                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                </div>
                <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div>
                <div className="rent-page__bg1 rent-page__bg3">
                    <h1 className="rent-page__bg-title">Thuê căn hộ</h1>
                    <p className="rent-page__bg-text">Tìm kiếm căn hộ có đầy đủ tiện ích bạn mong muốn</p>
                    <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                        Xem Ngay
                    </Button>
                </div> */}
                {/* <div className="test3"></div> */}
                {/* <div className="rent-page__house">
                    <CardSlide SliderData={SliderData}/>
                </div> */}
                {/* <div className="rent-page__list-title">
                    <h1>Căn hộ đề xuất cho bạn</h1>
                </div>
                <div className="rent-page__list">
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                </div> */}
                {/* <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div> */}
            </div>
        </div>
        </AnimatePresence>
    );
}

export default MergePage;