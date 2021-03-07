import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
    padding: '45px 45px',
  },
}));
function Foundation(props) {
  const classes = useStyles();
  return (
    <div className="about-us__foundation">
      <div className="about-us__title about-us__title--style">
        <span>Chúng tôi là ai ?</span>
      </div>
      <div className="about-us__details">
        <div className="about-us__details-01">
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  Nguyễn Châu Quyền 😁
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Sinh viên ngành khoa học máy tính - Đại học Đông Á
                </Typography>
                <div className="about-us__p">
                  <p>
                    Open Editpad Wordpad and start creating the notes online.
                    You can also copy-paste to edit text and save it for later
                    use. Besides this, our online notepad allows users to upload
                    files from a computer, Google Drive, and One Drive. (under
                    development)
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
          <div className="about-us__img-01">
            {/* <img
              src="https://blogtuoitre.vn/wp-content/uploads/2020/10/nam-than-la-gi-5.jpg"
              alt=""
              className="about-us__img--style"
            /> */}
            <div className="about-us__img-content"></div>
          </div>
        </div>
        <div className="about-us__details-02">
          <div className="about-us__img-02">
            {/* <img
              src="https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/13/812416/Lee-Dong-Wook-1.jpg"
              alt=""
              className="about-us__img--style"
            /> */}
            <div className="about-us__img-content"></div>
          </div>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  Nguyễn Châu Phát 😋
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Sinh viên ngành khoa học máy tính - Đại học Đông Á
                </Typography>
                <div className={classes.controls}>
                  <div className="about-us__p">
                    <p>
                      Open Editpad Wordpad and start creating the notes online.
                      You can also copy-paste to edit text and save it for later
                      use. Besides this, our online notepad allows users to
                      upload files from a computer, Google Drive, and One Drive.
                      (under development)
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

Foundation.propTypes = {};

export default Foundation;
