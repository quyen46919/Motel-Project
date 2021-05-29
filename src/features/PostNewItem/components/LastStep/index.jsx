import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';


LastStep.propTypes = {
    
};

function LastStep(props) {
    const [open, setOpen] = useState(false);
    const handleBtnClick = () => {
        setOpen(!open);
    }
    const handleSubmit = () => {
        // props.getStep3Values(state);
    }
    const handleBack = () => {
        props.handleBack();
    }
    return (
        <Formik
        initialValues={{
          check: false,
        }}
        
        onSubmit={(values) => {
            if(values.check === false) {
                alert('Bạn phải chấp nhận chính sách của chúng tôi!');
                return false;
            }
            handleSubmit();
            
        }}
        // {() => {
        //     navigate('/app/dashboard', { replace: true });
        //       console.log(values);
        //   }}
      >
          {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
        <form className="last-step">
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
                <FormControlLabel
                    name="check"
                    control={
                        <Checkbox required onChange={handleChange}/>
                    }
                    label="Tôi đã xem và đồng ý với điều khoản sử dụng"
                    labelPlacement="end"
                />
            </div>
            <div className="step__btn-block">
                    <Button variant="contained" onClick={handleBack} className="step-btn--2">
                        Quay lại
                    </Button>
                    <Button variant="contained" onClick={handleSubmit} className="step-btn--1">
                        Gửi yêu cầu
                    </Button>
                </div>
        </form>
        )}
        </Formik>
    );
}

export default LastStep;