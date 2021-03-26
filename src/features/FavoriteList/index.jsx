import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import CardItem from '../MainPage/components/CardItem';
import FavoriteItem from './components/FavoriteItem';

FavoriteList.propTypes = {
    
};
const imgUrl = "https://znews-photo.zadn.vn/w1920/Uploaded/neg_esfjaex/2021_03_04/67836183_2352038678213932_5526909763788154798_n.jpg";
function FavoriteList(props) {
    return (
        <div className='favorite-list'>
            <h1 className="favorite-list__p favorite-list__p--title">Danh sách yêu thích</h1>
            <p className="favorite-list__p">Bạn đã lưu 2 trọ</p>
            <div className="favorite-list__list-item">
                <FavoriteItem />
                <FavoriteItem />
            </div>

            <h1 className="favorite-list__p">Gợi ý cho bạn</h1>
            <div className="favorite-list__suggestions">
                <CardItem img={imgUrl}/>
                <CardItem img={imgUrl}/>
                <CardItem img={imgUrl}/>
                <CardItem img={imgUrl}/>
            </div>
        </div>
    );
}

export default FavoriteList;