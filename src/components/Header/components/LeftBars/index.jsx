import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ForumIcon from '@material-ui/icons/Forum';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import { MenuItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import './styles.scss';

const useStyles = makeStyles({
  list: {
    width: 260,
    marginTop: 10
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="left-bars__logo">
          <CloseIcon/>
          ChiaSeTro
        </div>
        <Divider/>
        <NavLink to="/main/" className="left-bars__navlink">
          <HomeIcon/>
          <MenuItem>TRANG CHỦ</MenuItem>
        </NavLink>
        <Divider/>
        {/* <NavLink to="/main/merge" className="left-bars__navlink">
          <PeopleIcon/>
          <MenuItem>GHÉP TRỌ</MenuItem>
        </NavLink> */}
        <Divider/>
        <NavLink to="/main/post" className="left-bars__navlink">
          <PostAddIcon/>
          <MenuItem>ĐĂNG TIN</MenuItem>
        </NavLink>
        <Divider/>
        <NavLink to="/main/contact" className="left-bars__navlink">
          <ForumIcon/>
          <MenuItem>CỘNG TÁC</MenuItem>
        </NavLink>
        <Divider/>
        <NavLink to="/login" className="left-bars__navlink">
          <InputIcon/>
          <MenuItem>ĐĂNG NHẬP</MenuItem>
        </NavLink>
        <Divider/>
        <NavLink to="/register" className="left-bars__navlink">
          <AddIcon/>
          <MenuItem>ĐĂNG KÝ</MenuItem>
        </NavLink>
        <Divider/>
      </List>
      {/* <Divider /> */}
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className="left-bars__icon"/>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
