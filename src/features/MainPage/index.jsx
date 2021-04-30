import React from 'react';
import RentPage from './components/RentPage';
import './styles.scss';

MainPage.propTypes = {
    
};
function MainPage(props) {
    return (
        <div className="main-page">
            <RentPage />
        </div>
    );
}

export default MainPage;