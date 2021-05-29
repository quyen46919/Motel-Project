import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultFooter from '../../components/DefaultFooter';
import Header from '../../components/Header';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import FavoriteList from '../FavoriteList';
import ItemDetails from '../ItemDetails';
import MainPage from '../MainPage';
import NotFound from '../NotFound';
import PostNewItem from '../PostNewItem';
import UserAccount from '../UserAccount';
import UserInfo from '../UserInfo';
import './styles.scss';
MainContent.propTypes = {
    
};

function MainContent(props) {


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
                <Route path="/main/account" component={UserAccount} exact/>
                <Route component={NotFound}/>
            </Switch>
            <DefaultFooter/>
        </div>
    );
}

export default MainContent;