import React from 'react';
import PropTypes from 'prop-types';
import PaperTabs from './components/PaperTabs';
import './styles.scss';
import SubSearchForm from '../../components/Header/components/SubLeftMenu';
import RentPage from './components/RentPage';
MainPage.propTypes = {
    
};
const listPaperTabs = {
    label1:"Tìm trọ",
    label2: "Ghép trọ",
    data1: <RentPage id="1"/>,
    data2: <RentPage id="2"/>,
}
function MainPage(props) {
    return (
        <div className="main-page">
            <SubSearchForm/>
            <h1 style={{textTransform: "uppercase"}}>Chỗ trọ nổi bật khuyến nghị cho bạn</h1>
            <PaperTabs list={listPaperTabs}/>
        </div>
    );
}

export default MainPage;