import React from 'react';
import './styles.scss';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ToysIcon from '@material-ui/icons/Toys';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WifiIcon from '@material-ui/icons/Wifi';
import OpacityIcon from '@material-ui/icons/Opacity';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import VideocamIcon from '@material-ui/icons/Videocam';
import DeleteIcon from '@material-ui/icons/Delete';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import WcIcon from '@material-ui/icons/Wc';
import CustomButton from './components/Button';
import CustomButton2 from './components/Button2';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Comment from './components/Comment';
import ConfirmPopUp from '../ConfirmPopUp';
import ConfirmPopUp2 from '../ConfirmPopUp2';
import FeedbackPopUp from '../FeedbackPopUp';



const useStyles = makeStyles((theme) => ({
    textField: {
        width: "100%"
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
function ItemDetails(props) {

    const classes = useStyles();


    return (
        <div className="item-details">
            <div className="item-details__content">
                <div className="item-details__img-wrapper item-details__img-hidden">
                    <div className="item-details__img--1"/>
                    <div className="item-details__sub-imgs">
                        <div className="item-details__img item-details__img--2"/>
                        <div className="item-details__img item-details__img--3"/>
                        <div className="item-details__img item-details__img--4"/>
                    </div>
                </div>
                <div className="item-details__header">
                    <h1>Cho thuê 1 phòng trọ tại K544/10 đường 2-9 quận Hải Châu thành phố Đà Nẵng</h1>
                    <h3>Trọ thoáng mát, gần đại học Đông Á, Kiến Trúc (khoảng 3 phút đi bộ), gần chợ, bệnh viện,giờ giấc thoải mái</h3>
                    <h4>Chủ trọ : Nguyễn Quang Vinh</h4>
                    <p>Cập nhật vào 20/2/2021</p>
                </div>
                <div className="item-details__content-btn item-details__btn-hidden">
                    <h1>2.500.000 VND</h1>
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
                            <p>02 Cống Quỳnh, Cẩm Lệ, Đà Nẵng</p>
                        </div>
                        <div className="item-details__1-info">
                            <p>Tiền điện: </p>
                            <p>3000 / kWh</p>
                        </div>
                        <div className="item-details__1-info">
                            <p>Hình thức: </p>
                            <p>Không chung chủ</p>
                        </div>
                        
                        <div className="item-details__1-info">
                            <p>Tiền nước: </p>
                            <p>7000 / Khối</p>
                        </div>
                        <div className="item-details__1-info">
                            <p>Diện tích phòng: </p>
                            <p>25m2</p>
                        </div>
                        
                        <div className="item-details__1-info">
                            <p>Số người tối đa: </p>
                            <p>3 người</p>
                        </div>
                        <div className="item-details__1-info">
                            <p>Diện tích gác lửng: </p>
                            <p>12m2</p>
                        </div>
                    </div>
                </div>

                <div className="item-details__utility">
                    <h1>Tiện ích có sẵn</h1>
                    <div className="item-details__utility-content">
                        <div className="item-details__1-ultility">
                            <MotorcycleIcon/>
                            <p>Chỗ để xe</p>
                        </div>
                        <div className="item-details__1-ultility">
                            <ToysIcon/>
                            <p>Quạt</p>
                        </div>
                        <div className="item-details__1-ultility">
                            <AcUnitIcon/>
                            <p>Điều hòa</p>
                        </div>
                        <div className="item-details__1-ultility">
                            <WifiIcon/>
                            <p>Wifi</p>
                        </div>
                        <div className="item-details__1-ultility">
                            <WcIcon/>
                            <p>Toilet riêng</p>
                        </div>
                        <div className="item-details__1-ultility">
                            <OpacityIcon/>
                            <p>Máy nước nóng</p>
                        </div>
                        <div className="item-details__1-ultility">
                            <VideocamIcon/>
                            <p>Camera an ninh</p>
                        </div>
                        <div className="item-details__1-ultility">
                            <DeleteIcon/>
                            <p>Chỗ đổ rác</p>
                        </div>
                    </div>
                </div>
                <div className="item-details__request">
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
            <div className="item-details__img-block">
                <div className="item-details__img-wrapper">
                    <div className="item-details__img--1"/>
                    <div className="item-details__sub-imgs">
                        <div className="item-details__img item-details__img--2"/>
                        <div className="item-details__img item-details__img--3"/>
                        <div className="item-details__img item-details__img--4"/>
                    </div>
                </div>
                <div className="item-details__content-btn">
                    <h1>2.500.000 VND</h1>
                    <ConfirmPopUp props={loginRequest}/>
                    <ConfirmPopUp2 props={favoriteRequest}/>
                    <FeedbackPopUp props={errorsRequest}/>
                </div>
            </div>


        </div>
    );
}

export default ItemDetails;