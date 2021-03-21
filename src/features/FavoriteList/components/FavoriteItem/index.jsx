import React from 'react';
import PropTypes from 'prop-types';
import img from '../../../../assets/images/trees-in-park.jpg';
import './styles.scss';

FavoriteItem.propTypes = {
    
};

function FavoriteItem(props) {
    return (
        <div className="favorite-item">
            <div className="favorite-item__img-block">
                <img src={img} alt="anh tro"/>
            </div>
            <div className="favorite-item__title">
                <h3>Cho thuê 1 phòng trọ tại K544/16 Đường 2/9 Quận Hải Châu (chỉ nữ)</h3>
                <p>Trọ thoáng mát, gần đại học Đông Á, Kiến Trúc (khoảng 3 phút đi bộ), gần chợ, bệnh viện,giờ giấc thoải mái</p>
            </div>
            <div className="favorite-item__edit">
                <p>Xóa</p>
                <p>Liên hệ với chủ trọ</p>
                <p>Báo đã có người thuê</p>
            </div>
            <div className="favorite-item__prices">
                <h2>2.500.000 VND</h2>
            </div>
        </div>
    );
}

export default FavoriteItem;