import React from 'react';
import PropTypes from 'prop-types';
import PaperTabs from './components/PaperTabs';
import './styles.scss';
import SubSearchForm from '../../components/Header/components/SubLeftMenu';
MainPage.propTypes = {
    
};

function MainPage(props) {
    return (
        <div className="main-page">
            <SubSearchForm/>
            <h2>Chỗ trọ nổi bật khuyến nghị cho bạn</h2>
            <PaperTabs/>
        </div>
    );
}

export default MainPage;