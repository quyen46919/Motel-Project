import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from '../MainPage';
import PostNewItem from '../PostNewItem';
import FavoriteList from '../FavoriteList';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import UserInfo from '../UserInfo';
import ItemDetails from '../ItemDetails';
import Blog from '../Blog';
import Header from '../../components/Header';
import NotFound from '../NotFound';
import Footer from '../../components/Footer';
import DefaultFooter from '../../components/DefaultFooter';
MainContent.propTypes = {
    
};

function MainContent(props) {
    const match = useRouteMatch();
    // const handleHeaderFormSubmit = (values) => {
    //     console.log('Form submit: ' ,values);
    // }

    return (
        <div className="main-content">
            <Header/>
            <Switch>
                {/* <Route path="/" component={MainPage} exact/> */}
                <Route path="/main" component={MainPage} exact/>
                <Route path="/main/details/:ItemId" component={ItemDetails}/>
                <Route path="/main/post" component={PostNewItem} exact/>
                <Route path="/main/favorite" component={FavoriteList} exact/>
                <Route path="/main/about" component={AboutUs} exact/>
                <Route path="/main/contact" component={Contact} exact/>
                <Route path="/main/setting" component={UserInfo} exact/>
                <Route component={NotFound}/>
            </Switch>
            <DefaultFooter/>
            {/* <Switch>
                <Route path={match.path} component={MainPage} exact/>
                <Route path={`${match}/main`} component={MainPage} exact/>
                <Route path="/details/:ItemId" component={ItemDetails} exact/>
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