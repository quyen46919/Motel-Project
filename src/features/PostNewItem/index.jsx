import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import PaperTabs from '../MainPage/components/PaperTabs';
import PostForm from './components/PostForm';
import PostForm2 from './components/PostForm2';


PostNewItem.propTypes = {
    
};
const data = {
    label1:"Tìm trọ",
    label2: "Ghép trọ",
    data1: <PostForm/>,
    data2: <PostForm2/>
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