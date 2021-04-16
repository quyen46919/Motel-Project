import React from 'react';
import PropTypes from 'prop-types';
import PaperTabs from './components/PaperTabs';
import './styles.scss';
import SubSearchForm from '../../components/Header/components/SubLeftMenu';
import RentPage from './components/RentPage';

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