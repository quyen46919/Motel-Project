import React from 'react';
import Stepper from './components/Stepper';
import './styles.scss';

function PostNewItem(props) {
    return (
        <div className="post-page">
            <h1>Đăng tin tìm trọ & ghép trọ</h1>
            <Stepper/>
        </div>
    );
}

export default PostNewItem;