import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Button } from '@material-ui/core';


LastStep.propTypes = {
    
};

function LastStep(props) {
    const [open, setOpen] = useState(false);
    const handleBtnClick = () => {
        setOpen(!open);
    }
    return (
        <div className="last-step">
            {/* <h3>Điều khoản và chính sách</h3> */}
            {open ? (
                <Button variant="contained" onClick={handleBtnClick}>
                    Ẩn điều khoản và chính sách
                </Button>
            ) : (
                <Button variant="contained" onClick={handleBtnClick}>
                    Hiển thị điều khoản và chính sách
                </Button>
            )
            }
            {open? (
                <>
                    <div className="last-step__line">
                        <h1>1</h1>
                        <p>Bạn phải chịu trách nhiệm về những thông tin đăng lên trên trang web của chúng tôi. Chúng tôi có thể sẽ liên lạc với bạn trong trường hợp cần xác thực lại thông tin.</p>
                    </div>
                    <div className="last-step__line">
                        <h1>2</h1>
                        <p>Phải đăng những thông tin chính xác, đúng sự thật. Người đăng có trách nhiệm cập nhật lại thông tin nếu có sự thay đổi (ví dụ trọ đã có người thuê thì phải thông báo để hệ thống cập nhật lại).</p>
                    </div>
                    <div className="last-step__line">
                        <h1>3</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur nostrum nobis quas placeat voluptatem magni blanditiis quod aperiam unde porro, dolorem mollitia natus! Veritatis dolor doloribus fuga fugiat dolores?</p>
                    </div>
                </>

            ) : ''}
            <div className="last-step__last-line">
                <input type="checkbox" name="read" id=""/>
                <p>Tôi đã đọc và chấp nhận thực hiện chính sách này</p>
            </div>
        </div>
    );
}

export default LastStep;