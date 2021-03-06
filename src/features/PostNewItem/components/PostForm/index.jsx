import { Button } from '@material-ui/core';
import React from 'react';
import CheckBox from '../../../../components/CheckBox';
import CustomInput from '../CustomInput';
import ListCheckbox from '../ListCheckbox';
import './styles.scss';


const buttonStyles = {
    background: "#5392f9",
    color: "white",
    padding : "unset 1.5rem",
    marginTop: "1rem"
}
function PostForm({id}) {
    return (
        <form>
            <CustomInput title="1. Thông tin về nhà trọ"/>
            <ListCheckbox/>
            <div className="policy">
                <CheckBox props="Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật của website" className="policy__checkbox"/>
                <Button variant="contained" style={buttonStyles}>
                    Gửi yêu cầu
                </Button>
            </div>
        </form>
    );
}

export default PostForm;