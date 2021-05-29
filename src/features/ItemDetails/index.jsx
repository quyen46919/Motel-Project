import { Button } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import DeleteIcon from '@material-ui/icons/Delete';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import OpacityIcon from '@material-ui/icons/Opacity';
import ToysIcon from '@material-ui/icons/Toys';
import VideocamIcon from '@material-ui/icons/Videocam';
import WcIcon from '@material-ui/icons/Wc';
import WifiIcon from '@material-ui/icons/Wifi';
import Rating from "@material-ui/lab/Rating";
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import motelApi from '../../api/motelApi';
import ConfirmPopUp from '../ConfirmPopUp';
import ConfirmPopUp2 from '../ConfirmPopUp2';
import FeedbackPopUp from '../FeedbackPopUp';
import Comment from './components/Comment';
import ImageGallery from './components/ImageGallery';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: "calc(100% - 60px)",
        ["@media (max-width: 600px)"]: {
            width: "calc(100%)",
        }
    },
  }));

const loginRequest = {
    btnTitle: "Liên hệ với chủ trọ",
    title: "Yêu cầu đăng nhập",
    description: "Bạn phải đăng nhập để thực hiện chức năng này",
    btn1: "Đăng nhập",
    btn2: "Để sau",
}
const favoriteRequest = {
    btnTitle: "Thêm vào yêu thích",
    title: "Yêu cầu đăng nhập",
    description: "Bạn phải đăng nhập để thực hiện chức năng này",
    btn1: "Đăng nhập",
    btn2: "Để sau",
}
const errorsRequest = {
    btnTitle: "Báo lỗi",
    title: "Có lỗi xảy ra?",
    description: "Hãy mô tả lỗi bạn gặp phải phía dưới, chúng tôi sẽ cố gắng khắc phục trong thời gian sớm nhất. Trong một số trường hợp cần thiết, chúng tôi sẽ liên hệ trực tiếp với bạn.",
    btn1: "Gửi",
    btn2: "Hủy",
}
const labels = {
    1: "Quá tệ",
    2: "Tệ",
    3: "Tạm được",
    4: "Tốt",
    5: "Rất tốt"
  };
  
function ItemDetails({match}) {
    const classes = useStyles();
    const {ref, inView} = useInView();
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [data, setData] = React.useState();

    useEffect(()=>{
        const fetchMotelDetails = async () => {
            try {
                const response = await motelApi.getById(match.params.ItemId);
                setData(response.data);
            } catch (error) {
                console.log('Failed to fetch motel details: ' + error);
            }
        }
        fetchMotelDetails();
    },[]);

    return (
        <div className="item-details">
            <div className="item-details__content">
                <div className="item-details__header">
                    <div className="item-details__slideshow">
                            <ImageGallery imageList={data?.homeImages}/> : 
                    </div>
                    <div className="item-details__description">
                        <h2>
                            {'cho thuê ' + (data?.homeDetails?.sameRoom + 1) + ' phòng tại ' + data?.homeDetails?.homeNumber + ' đường ' + data?.homeDetails?.streetName + ', quận ' + data?.homeDetails?.district + ', thành phố ' + data?.homeDetails?.city}
                        </h2>
                        <p>{data?.homeDetails?.description}</p>
                        <h4>Chủ trọ : {data?.homeDetails?.bossName}</h4>
                        <p>Cập nhật vào {data?.dateCreate}</p>
                    </div>
                </div>
                <div className="item-details__content-btn item-details__btn-hidden">
                    <h1>
                        {String(data?.homeDetails?.prices).replace(/(.)(?=(\d{3})+$)/g,'$1,') + " VND"} 
                    </h1>
                    {/* <CustomButton2 title="Liên hệ với chủ trọ"/>
                    <CustomButton title="Thêm vào yêu thích"/>
                    <CustomButton title="Báo đã có người thuê"/> */}
                    <ConfirmPopUp props={loginRequest}/>
                    <ConfirmPopUp2 props={favoriteRequest}/>
                    <FeedbackPopUp props={errorsRequest}/>
                </div>
                <div className="item-details__info">
                    <h1>Thông tin phòng trọ</h1>
                    <div className="item-details__info-content">
                        <div className="item-details__1-info">
                            <p>Địa chỉ: </p>
                            <p>{data?.homeDetails?.homeNumber + ' ' + data?.homeDetails?.streetName + ', ' + data?.homeDetails?.district + ', ' + data?.homeDetails?.city}</p>
                        </div>
                        <div className="item-details__1-info">
                            <p>Tiền điện: </p>
                            <p>{data?.homeDetails?.elecPrices} / kWh</p>
                        </div>
                        <div className="item-details__1-info">
                            <p>Hình thức: </p>
                            <p>Không chung chủ</p>
                        </div>
                        
                        <div className="item-details__1-info">
                            <p>Tiền nước: </p>
                            <p>
                            {
                               data?.homeDetails?.waterPrices < 10000 ?
                                    data?.homeDetails?.waterPrices + ' / khối':
                                    data?.homeDetails?.waterPrices + ' / tháng'
                            }
                            </p>
                        </div>
                        <div className="item-details__1-info">
                            <p>Diện tích phòng: </p>
                            <p>{data?.homeDetails?.acreage}m2</p>
                        </div>
                        
                        <div className="item-details__1-info">
                            <p>Số người tối đa: </p>
                            <p>{data?.homeDetails?.maxPeople} người</p>
                        </div>
                        <div className="item-details__1-info">
                            <p>Diện tích gác lửng: </p>
                            <p>{data?.homeDetails?.mezzanine}</p>
                        </div>
                    </div>
                </div>

                <div className="item-details__utility" ref={ref}>
                    <h1>Tiện ích có sẵn</h1>
                    <div className="item-details__utility-content">
                        {data?.homeUtilities?.checkedCarPark &&  
                            <div className="item-details__1-ultility">
                                <MotorcycleIcon/>
                                <p>Chỗ để xe</p>
                            </div>
                        }
                        {data?.homeUtilities?.checkFan && 
                            <div className="item-details__1-ultility">
                                <ToysIcon/>
                                <p>Quạt</p>
                            </div>
                        }
                        {data?.homeUtilities?.checkedCarPark &&  
                            <div className="item-details__1-ultility">
                                <AcUnitIcon/>
                                <p>Điều hòa</p>
                            </div>
                        }
                        {data?.homeUtilities?.checkedCarPark && 
                            <div className="item-details__1-ultility">
                                <WifiIcon/>
                                <p>Wifi</p>
                            </div> 
                        }
                        {data?.homeUtilities?.checkedCarPark && 
                            <div className="item-details__1-ultility">
                                <WcIcon/>
                                <p>Toilet riêng</p>
                            </div> 
                        }
                        {data?.homeUtilities?.checkedCarPark &&  
                            <div className="item-details__1-ultility">
                                <OpacityIcon/>
                                <p>Máy nước nóng</p>
                            </div>
                        }
                        {data?.homeUtilities?.checkedCarPark &&  
                            <div className="item-details__1-ultility">
                                <VideocamIcon/>
                                <p>Camera an ninh</p>
                            </div>
                        }
                        {data?.homeUtilities?.checkedCarPark &&  
                            <div className="item-details__1-ultility">
                                <DeleteIcon/>
                                <p>Chỗ đổ rác</p>
                            </div>
                        }   
                    </div>
                </div>
                {/* <div className="item-details__request">
                    <h1>Yêu cầu của chủ trọ</h1>
                    <div className="item-details__request-content">
                        <div className="item-details__1-request">
                            <DeleteIcon/>
                            <p>Chỉ cho nữ thuê</p>
                        </div>
                        <div className="item-details__1-request">
                            <WcIcon/>
                            <p>Nam nữ ở riêng</p>
                        </div>
                        <div className="item-details__1-request">
                            <CreditCardIcon/>
                            <p>Đặt cọc trước</p>
                        </div>
                        <div className="item-details__1-request">
                            <WhatshotIcon/>
                            <p>Nấu ăn trong phòng</p>
                        </div>
                        <div className="item-details__1-request">
                            <FormatColorResetIcon/>
                            <p>Không nhậu nhẹt</p>
                        </div>
                        <div className="item-details__1-request">
                            <PersonAddDisabledIcon/>
                            <p>Cấm mời bạn qua đêm</p>
                        </div>
                        <div className="item-details__1-request">
                            <RecordVoiceOverIcon/>
                            <p>Cấm làm ồn sau 22h</p>
                        </div>
                    </div>
                </div> */}
                <div className="item-details__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.6441590447503!2d108.21911381485802!3d16.03202888890396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218389cf02c2b%3A0xbdc63233587e2d88!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyDEkMO0bmcgw4E!5e0!3m2!1sen!2s!4v1617630068492!5m2!1sen!2s"   allowFullScreen="" loading="lazy"></iframe>
                </div>
                
                <div className="item-details__comments">
                    <div className="item-details__user-comment--block">
                        <form autoComplete="off">
                            <h3>Bình luận</h3>
                            <div className="item-details__user">
                                <div className="item-details__avatar">
                                </div>
                                <TextField 
                                    id="outlined-basic" 
                                    variant="outlined" 
                                    className={classes.textField}
                                />
                            </div>
                            <div className="item-details__rating">
                                <div className="item-details__rating-div">
                                    <h3>Bình chọn: </h3>
                                    <div className="item-details__rating--small">
                                        <Rating
                                            name="hover-feedback"
                                            value={value}
                                            precision={1}
                                            onChange={(event, newValue) => {
                                            setValue(newValue);
                                            }}
                                            size="large"
                                            onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                            }}
                                        />
                                        {value !== null && (
                                            <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                                        )}
                                    </div>
                                </div>
                                <Button variant="outlined" color="primary" className="item-details__comment-btn">
                                    Gửi bình luận
                                </Button>
                            </div>

                        </form>
                    </div>
                    <div className="item-details__another-comments">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>

            </div>
            <div className="item-details__img-block" 
            style={ inView ? {marginTop: '32rem', transition: "all .5s"} : {marginTop: '1rem', transition: "all .5s"}}
            >
                <div className="item-details__img-wrapper">
                    <div className="item-details__img--1">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.6441590447503!2d108.21911381485802!3d16.03202888890396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218389cf02c2b%3A0xbdc63233587e2d88!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyDEkMO0bmcgw4E!5e0!3m2!1sen!2s!4v1617630068492!5m2!1sen!2s"   allowfullscreen="" loading="lazy"></iframe> */}
                    {/* <div className="item-details__sub-imgs">
                        <div className="item-details__img item-details__img--2"/>
                        <div className="item-details__img item-details__img--3"/>
                        <div className="item-details__img item-details__img--4"/>
                    </div> */}
                    </div>
                </div>
                <div className="item-details__content-btn">
                    <h1>{String(data?.homeDetails?.prices).replace(/(.)(?=(\d{3})+$)/g,'$1,') + " VND"} </h1>
                    <ConfirmPopUp props={loginRequest}/>
                    <ConfirmPopUp2 props={favoriteRequest}/>
                    <FeedbackPopUp props={errorsRequest}/>

                </div>
            </div>


        </div>
    );
}

export default ItemDetails;