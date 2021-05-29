import { Button, Fab, makeStyles, Toolbar, useScrollTrigger } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import Pagination from '@material-ui/lab/Pagination';
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import motelApi from '../../../../api/motelApi';
import img from '../../../../assets/images/bloom.jpg';
import img2 from '../../../../assets/images/blosom.jpg';
import img3 from '../../../../assets/images/liyue.jpg';
import img4 from '../../../../assets/images/liyue2.jpg';
import Area from '../Area';
import CardItem from '../CardItem';
import MotelSkeleton from '../MotelSkeleton';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { pushValueIntoStore } from '../../MainPageSlice';
import { useDispatch } from 'react-redux';

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
    const [motelList, setMotelList] = React.useState([]);
    const [mergeMotelList, setMergeMotelList] = React.useState([]);
    const [haiChauList, setHaiChauList] = React.useState([]);
    const [camLeList, setCamLeList] = React.useState([]);
    const [thanhKheList, setThanhKheList] = React.useState([]);
    const [sonTraList, setSonTraList] = React.useState([]);
    const [nguHanhSonList, setNguHanhSonList] = React.useState([]);  
    const [lienChieuList, setLienChieuList] = React.useState([]);  
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchMotelList = async () => {
            try {
                const params = {
                    // _page: 1,
                    limit: 16,
                }
                const response = await motelApi.getAll(params);
                setMotelList(response.data);
                setLoading(false);

                const action = pushValueIntoStore(response.data);
                dispatch(action);
            } catch (error) {
                console.log('Failed to fetch motel list: ' + error);
            }
        }
        fetchMotelList();
        console.log(motelList)

        const fetchMergeMotelList = async () => {
            try {
                const params = {
                    limit: 16,
                }
                const response = await motelApi.getMergeMotel(params);
                setMergeMotelList(response.data);
                console.log(response.data);
            } catch (error) {
                console.log('Failed to fetch merge motel list: ' + error);
            }
        }
        fetchMergeMotelList();

        const fetchHaiChauMotelList = async () => {
            try {
                const areaName = {
                    name: 'Hải Châu',
                }
                const response = await motelApi.getAreaList(areaName);
                setHaiChauList(response.data);
            } catch (error) {
                console.log('Failed to fetch merge motel list: ' + error);
            }
        }
        fetchHaiChauMotelList();

        const fetchCamLeMotelList = async () => {
            try {
                const areaName = {
                    name: 'Cẩm Lệ',
                }
                const response = await motelApi.getAreaList(areaName);
                setCamLeList(response.data);
            } catch (error) {
                console.log('Failed to fetch merge motel list: ' + error);
            }
        }
        fetchCamLeMotelList();

        const fetchSonTraMotelList = async () => {
            try {
                const areaName = {
                    name: 'Sơn Trà',
                }
                const response = await motelApi.getAreaList(areaName);
                setSonTraList(response.data);
            } catch (error) {
                console.log('Failed to fetch merge motel list: ' + error);
            }
        }
        fetchSonTraMotelList();

        const fetchNguHanhSonMotelList = async () => {
            try {
                const areaName = {
                    name: 'Ngũ Hành Sơn',
                }
                const response = await motelApi.getAreaList(areaName);
                setNguHanhSonList(response.data);
            } catch (error) {
                console.log('Failed to fetch merge motel list: ' + error);
            }
        }
        fetchNguHanhSonMotelList();

        const fetchThanhKheMotelList = async () => {
            try {
                const areaName = {
                    name: 'Thanh Khê',
                }
                const response = await motelApi.getAreaList(areaName);
                setThanhKheList(response.data);
            } catch (error) {
                console.log('Failed to fetch merge motel list: ' + error);
            }
        }
        fetchThanhKheMotelList();

        const fetchLienChieuMotelList = async () => {
            try {
                const areaName = {
                    name: 'Liên Chiểu',
                }
                const response = await motelApi.getAreaList(areaName);
                setLienChieuList(response.data);
            } catch (error) {
                console.log('Failed to fetch merge motel list: ' + error);
            }
        }
        fetchLienChieuMotelList();
    },[]);


    // useEffect(()=>{

    // },[]);
    // console.log(motelList);

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
                        <NavLink to="/map">
                            Xem ở dạng bản đồ
                        </NavLink>
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
                <div  className="rent-page__list-items">
                    <div className="rent-page__list">
                        <div className="rent-page__list-title">
                            <h1>Phòng trọ gợi ý cho bạn</h1>
                        </div>
                        <div className="rent-page__list-card">
                            {loading ? 
                                <MotelSkeleton/> :
                                motelList.map((motel) => (
                                    <CardItem 
                                        key={motel._id}
                                        id={motel._id}
                                        prices={motel.homeDetails.prices}
                                        img={motel.homeImages[0]}
                                        address={`${motel.homeDetails.homeNumber} đường ${motel.homeDetails.streetName}, quận ${motel.homeDetails.district}, thành phố ${motel.homeDetails.city}`}
                                        elecPrices={motel.homeDetails.elecPrices}
                                        waterPrices={motel.homeDetails.waterPrices}
                                        acreage={motel.homeDetails.acreage}
                                        mezzanine={motel.homeDetails.mezzanine}
                                        maxPeople={motel.homeDetails.maxPeople}
                                        description={motel.homeDetails.description}
                                        sameRoom={motel.homeDetails.sameRoom}
                                    />
                                )) 
                            }
                        </div>
                    </div>
                    <div className={`${classes.root} rent-page__pagination`}>
                        <Pagination count={3} variant="outlined" shape="rounded" />
                    </div>

                    <motion.div 
                    className="rent-page__bg1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{duration: 0.35, type: "spring", stiffness: 200}}
                    >
                        <h1 className="rent-page__bg-title">Ghép trọ</h1>
                        <p className="rent-page__bg-text">Ghép trọ với những người bạn mới phù hợp với yêu cầu của bạn</p>
                        <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                            Tìm hiểu thêm
                        </Button>
                    </motion.div>
                    
                    <div className="rent-page__list">
                        <div className="rent-page__list-title">
                            <h1>Những phòng đang cần ghép</h1>
                        </div>
                        <div className="rent-page__list-card">
                            {loading ? 
                                <MotelSkeleton/> :
                                mergeMotelList.map((motel) => (
                                    <CardItem 
                                        key={motel._id}
                                        id={motel._id}
                                        category={motel.category}
                                        prices={motel.homeDetails.prices}
                                        img={motel.homeImages[0]}
                                        address={`${motel.homeDetails.homeNumber} đường ${motel.homeDetails.streetName}, quận ${motel.homeDetails.district}, thành phố ${motel.homeDetails.city}`}
                                        elecPrices={motel.homeDetails.elecPrices}
                                        waterPrices={motel.homeDetails.waterPrices}
                                        acreage={motel.homeDetails.acreage}
                                        mezzanine={motel.homeDetails.mezzanine}
                                        maxPeople={motel.homeDetails.maxPeople}
                                        description={motel.homeDetails.description}
                                        sameRoom={motel.homeDetails.sameRoom}
                                    />
                                )) 
                            }
                        </div>
                    </div>
                    <div className="rent-page__list">
                        <div className={`${classes.root} rent-page__pagination`}>
                            <Pagination count={1} variant="outlined" shape="rounded" />
                        </div>
                    </div>
                    {/* <div className="rent-page__test2"></div> */}
                    <Area/>

                    <div className="rent-page__list">
                        <div className="rent-page__list-title">
                            <h1>Phòng trọ khu vực Hải Châu</h1>
                        </div>
                        <div className="rent-page__list-card">
                            {
                                haiChauList.map((motel) => (
                                    <CardItem 
                                        key={motel._id}
                                        id={motel._id}
                                        prices={motel.homeDetails.prices}
                                        img={motel.homeImages[0]}
                                        address={`${motel.homeDetails.homeNumber} đường ${motel.homeDetails.streetName}, quận ${motel.homeDetails.district}, thành phố ${motel.homeDetails.city}`}
                                        elecPrices={motel.homeDetails.elecPrices}
                                        waterPrices={motel.homeDetails.waterPrices}
                                        acreage={motel.homeDetails.acreage}
                                        mezzanine={motel.homeDetails.mezzanine}
                                        maxPeople={motel.homeDetails.maxPeople}
                                        description={motel.homeDetails.description}
                                        sameRoom={motel.homeDetails.sameRoom}
                                    />
                                )) 
                            }
                        </div>
                    </div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>
                    <div className="rent-page__list">
                        <div className="rent-page__list-title">
                            <h1>Phòng trọ khu vực Cẩm Lệ</h1>
                        </div>
                        <div className="rent-page__list-card">
                            {camLeList.map((motel) => (
                                <CardItem 
                                    key={motel._id}
                                    id={motel._id}
                                    prices={motel.homeDetails.prices}
                                    img={motel.homeImages[0]}
                                    address={`${motel.homeDetails.homeNumber} đường ${motel.homeDetails.streetName}, quận ${motel.homeDetails.district}, thành phố ${motel.homeDetails.city}`}
                                    elecPrices={motel.homeDetails.elecPrices}
                                    waterPrices={motel.homeDetails.waterPrices}
                                    acreage={motel.homeDetails.acreage}
                                    mezzanine={motel.homeDetails.mezzanine}
                                    maxPeople={motel.homeDetails.maxPeople}
                                    description={motel.homeDetails.description}
                                    sameRoom={motel.homeDetails.sameRoom}
                                />
                                )) 
                            }
                        </div>
                    </div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>

                    <div className="rent-page__list">
                        <div className="rent-page__list-title">
                            <h1>Phòng trọ khu vực Sơn Trà</h1>
                        </div>
                        <div className="rent-page__list-card">
                            {sonTraList.map((motel) => (
                                <CardItem 
                                    key={motel._id}
                                    id={motel._id}
                                    prices={motel.homeDetails.prices}
                                    img={motel.homeImages[0]}
                                    address={`${motel.homeDetails.homeNumber} đường ${motel.homeDetails.streetName}, quận ${motel.homeDetails.district}, thành phố ${motel.homeDetails.city}`}
                                    elecPrices={motel.homeDetails.elecPrices}
                                    waterPrices={motel.homeDetails.waterPrices}
                                    acreage={motel.homeDetails.acreage}
                                    mezzanine={motel.homeDetails.mezzanine}
                                    maxPeople={motel.homeDetails.maxPeople}
                                    description={motel.homeDetails.description}
                                    sameRoom={motel.homeDetails.sameRoom}
                                />
                                )) 
                            }
                        </div>
                    </div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>
                    <div className="rent-page__list">
                        <div className="rent-page__list-title">
                            <h1>Phòng trọ khu vực Ngũ Hành Sơn</h1>
                        </div>
                        <div className="rent-page__list-card">
                            {nguHanhSonList.map((motel) => (
                                <CardItem 
                                    key={motel._id}
                                    id={motel._id}
                                    prices={motel.homeDetails.prices}
                                    img={motel.homeImages[0]}
                                    address={`${motel.homeDetails.homeNumber} đường ${motel.homeDetails.streetName}, quận ${motel.homeDetails.district}, thành phố ${motel.homeDetails.city}`}
                                    elecPrices={motel.homeDetails.elecPrices}
                                    waterPrices={motel.homeDetails.waterPrices}
                                    acreage={motel.homeDetails.acreage}
                                    mezzanine={motel.homeDetails.mezzanine}
                                    maxPeople={motel.homeDetails.maxPeople}
                                    description={motel.homeDetails.description}
                                    sameRoom={motel.homeDetails.sameRoom}
                                />
                                )) 
                            }
                        </div>
                    </div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>

                    <div className="rent-page__list">
                        <div className="rent-page__list-title">
                            <h1>Phòng trọ khu vực Thanh Khê</h1>
                        </div>
                        <div className="rent-page__list-card">
                            {thanhKheList.map((motel) => (
                                <CardItem 
                                    key={motel._id}
                                    id={motel._id}
                                    prices={motel.homeDetails.prices}
                                    img={motel.homeImages[0]}
                                    address={`${motel.homeDetails.homeNumber} đường ${motel.homeDetails.streetName}, quận ${motel.homeDetails.district}, thành phố ${motel.homeDetails.city}`}
                                    elecPrices={motel.homeDetails.elecPrices}
                                    waterPrices={motel.homeDetails.waterPrices}
                                    acreage={motel.homeDetails.acreage}
                                    mezzanine={motel.homeDetails.mezzanine}
                                    maxPeople={motel.homeDetails.maxPeople}
                                    description={motel.homeDetails.description}
                                    sameRoom={motel.homeDetails.sameRoom}
                                />
                                )) 
                            }
                        </div>
                    </div>
                    <div className="rent-page__list">
                        <Button variant="outlined" color="primary" className="rent-page__btn">
                            Xem thêm 10 trọ khác
                        </Button>
                    </div>
                    <div className="rent-page__list">
                        <div className="rent-page__list-title">
                            <h1>Phòng trọ khu vực Liên Chiểu</h1>
                        </div>
                        <div className="rent-page__list-card">
                            {lienChieuList.map((motel) => (
                                <CardItem 
                                    key={motel._id}
                                    id={motel._id}
                                    prices={motel.homeDetails.prices}
                                    img={motel.homeImages[0]}
                                    address={`${motel.homeDetails.homeNumber} đường ${motel.homeDetails.streetName}, quận ${motel.homeDetails.district}, thành phố ${motel.homeDetails.city}`}
                                    elecPrices={motel.homeDetails.elecPrices}
                                    waterPrices={motel.homeDetails.waterPrices}
                                    acreage={motel.homeDetails.acreage}
                                    mezzanine={motel.homeDetails.mezzanine}
                                    maxPeople={motel.homeDetails.maxPeople}
                                    description={motel.homeDetails.description}
                                    sameRoom={motel.homeDetails.sameRoom}
                                />
                                )) 
                            }
                        </div>
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