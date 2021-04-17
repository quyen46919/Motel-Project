import React from 'react';
import PropTypes from 'prop-types';
import Upload from '../Upload';
import './styles.scss';

Step3.propTypes = {
    
};

function Step3(props) {
    return (
        <div className="step3">
            <p>Bạn phải tải lên ít nhất <span>1 ảnh về nhà trọ</span> và <span>2 ảnh về phòng trọ</span></p>
            <div className="step3__block">
                <Upload title="Ảnh nhà trọ 1"/>
                <Upload title="Ảnh nhà trọ 2"/>
                <Upload title="Ảnh phòng trọ 1"/>
                <Upload title="Ảnh phòng trọ 2"/>
                <Upload title="Ảnh phòng trọ 3"/>
                <Upload title="Ảnh phòng trọ 4"/>
            </div>
        </div>
    );
}

export default Step3;