import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import PaperTabs from '../MainPage/components/PaperTabs';
import PostForm from './components/PostForm';


PostNewItem.propTypes = {
    
};
const data = {
    data1: <PostForm id="1"/>,
    data2: <PostForm id="2"/>
}
function PostNewItem(props) {
    return (
        <div className="post-page">
            <h1>Đăng tin tìm trọ & ghép trọ</h1>
            <PaperTabs list={data}/>
            
        </div>
    );
}

export default PostNewItem;