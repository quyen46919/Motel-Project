import Button from '@material-ui/core/Button';
import React from 'react';
import CustomInput from '../CustomInput';
import './styles.scss';

const homeNumber = {
    label: "Số nhà",
    value: "02",
}
const street = {
    label: "Tên đường",
    value: "Cống Quỳnh",
}
const district = {
    label: "Quận / Huyện",
    value: "Cẩm Lệ",
}
const city = {
    label: "Thành phố",
    value: "Đà Nẵng",
}
const motelBoss = {
    label: "Chủ nhà trọ",
    value: "Nguyễn Văn A",
}
const motelPhone = {
    label: "Số điện thoại",
    value: "0123212321",
}
const room = {
    label: "Phòng số",
    value: "03",
}
const motelPrices = {
    label: "Giá trọ",
    value: "2.500.000",
}
function MotelForm(props) {

    return (
        <form action="" className="motel-form">
            <div className="motel-form__input">
                <div className="motel-form__input--wrapper">
                    <CustomInput data={homeNumber}/>
                    <CustomInput data={street}/>
                    <CustomInput data={district}/>
                    <CustomInput data={city}/>
                    <CustomInput data={room}/>
                    <CustomInput data={motelPrices}/>
                    <CustomInput data={motelBoss}/>
                    <CustomInput data={motelPhone}/>

                </div>
                <div className="motel-form__submit-btn">
                    <Button variant="outlined" color="primary">
                        Lưu thay đổi
                    </Button>
                </div>
            </div>

        </form>
    );
}

export default MotelForm;