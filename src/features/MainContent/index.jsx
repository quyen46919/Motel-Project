import React from 'react';
import PropTypes from 'prop-types';
import LeftMenu from './components/LeftMenu';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage';
import PostNewItem from '../PostNewItem';
import FavoriteList from '../FavoriteList';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import UserInfo from '../UserInfo';
MainContent.propTypes = {
    
};

function MainContent(props) {
    return (
        <div className="main-content">
            <LeftMenu/>
            <Switch>
                <Route path="/" component={MainPage} exact/>
                <Route path="/post" component={PostNewItem} exact/>
                <Route path="/favorite" component={FavoriteList} exact/>
                <Route path="/about" component={AboutUs} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/setting" component={UserInfo} exact/>
            </Switch>
        </div>
    );
}

export default MainContent;