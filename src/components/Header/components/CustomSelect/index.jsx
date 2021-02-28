import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

CustomSelect.propTypes = {
    
};

function CustomSelect(props) {
    return (
        <div>
            <select name="" id="">
                <option value="0">Hải Châu</option>
                <option value="0">Cẩm Lệ</option>
                <option value="0">Ngũ Hành Sơn</option>
                <option value="0">Liên Chiểu</option>
                <option value="0">Sơn Trà</option>
            </select>
        </div>
    );
}

export default CustomSelect;