import React from 'react';
import PaperTabs from '../MainPage/components/PaperTabs';
import UserForm from './components/UserForm';
import MotelForm from './components/MotelForm';
import './styles.scss';

UserInfo.propTypes = {
    
};

const data = {
    label1: "Thông tin cá nhân",
    label2: "Thông tin nhà trọ",
    data1: <UserForm/>,
    data2: <MotelForm/>
}

function UserInfo(props) {
    return (
        <div className="user-info">
            <h1>Thông tin cá nhân & cài đặt</h1>
            <UserForm/>
            <MotelForm/>
        </div>
    );
}

export default UserInfo;