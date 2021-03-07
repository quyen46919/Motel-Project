import React from 'react';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import './styles.scss';




function Comment({props}) {
    return (
        <div className="comment">
            <div className="comment__avatar--wrapper">
                <div className="comment__avatar"/>
            </div>
            <div className="comment__content">
                <div className="comment__title">
                    <h3>Châu Quyền</h3>
                    <span className="comment__time">10 phút trước</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore molestias ducimus quibusdam hic nihil quidem, cupiditate, distinctio repudiandae harum dolor fugit eum. Eum, dolore asperiores? Fugiat vitae aliquam veritatis.</p>
                <div className="comment__status">
                    <div className="comment__status--div">
                        <ThumbUpAltOutlinedIcon />
                        <p>123</p>
                    </div>
                    <div className="comment__status--div">
                        <ThumbDownOutlinedIcon/>
                        <p>1</p>
                    </div>
                    <div className="comment__status--div">
                        <BuildOutlinedIcon/>
                        <p>Báo xấu</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;