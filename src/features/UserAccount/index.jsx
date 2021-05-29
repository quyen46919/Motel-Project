import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import CustomTabs from './components/CustomTabs';
import img from '../../assets/images/genshin_12_4K.jpg';

UserAccount.propTypes = {
    
};

function UserAccount(props) {
    return (
        <div className="user">
            <div className="user__info">
                <div className="user__avatar user__avatar--big">
                    <img src={img} alt="avatar"/>
                </div>
                <div className="user__details">
                    <h2>Nguyễn Châu Quyền</h2>
                    <div className="user__details--small">
                        <p>quyen46919@donga.edu.vn</p>
                        <p>034 354 7418</p>
                    </div>
                </div>
            </div>
            <CustomTabs/>
        </div>
    );
}

export default UserAccount;