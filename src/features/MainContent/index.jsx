import React from 'react';
import PropTypes from 'prop-types';
import LeftMenu from './components/LeftMenu';
import './styles.scss';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from '../MainPage';
import PostNewItem from '../PostNewItem';
import FavoriteList from '../FavoriteList';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import UserInfo from '../UserInfo';
import ItemDetails from '../ItemDetails';
import Header from '../../components/Header';
MainContent.propTypes = {
    
};

function MainContent(props) {
    const match = useRouteMatch();

    return (
        <div className="main-content">
            <Header/>
            <LeftMenu/>
            <Switch>
                <Route path="/" component={MainPage} exact/>
                <Route path="/main" component={MainPage} />
                <Route path="/details/:ItemId" component={ItemDetails} exact/>
                <Route path="/post" component={PostNewItem} />
                <Route path="/favorite" component={FavoriteList} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={Contact} />
                <Route path="/setting" component={UserInfo} />
            </Switch>
            {/* <Switch>
                <Route path={match.path} component={MainPage} exact/>
                <Route path={`${match}/main`} component={MainPage} exact/>
                <Route path={`${match}/post`} component={PostNewItem} exact/>
                <Route path={`${match}/favorite`} component={FavoriteList} />
                <Route path={`${match}/about`} component={AboutUs} exact/>
                <Route path={`${match}/contact`} component={Contact} exact/>
                <Route path={`${match}/setting`} component={UserInfo} exact/>
            </Switch> */}
        </div>
    );
}

export default MainContent;