
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SvgLoveIcons from "./component/LoveIcon";
import ShareIcon from "./component/ShareIcon";
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 315,
    height: 340,
    position :"relative"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  textStyles: {
    color: "rgba(0, 0, 0, 0.54)",
    transform: "translateY(-4px)",
  },
  navLink: {
    textDecoration: "none",
    color: "unset"
  },
  cardContent: {
    paddingBottom: "0!important"
  },
  iconWrapper: {
    position: "absolute",
    top: 0,
    right: 0,

  },
}));


export default function CardItem({img}) {
  const classes = useStyles();
  return (

    <Card className={`${classes.root} card-item`} >
      <NavLink to="/details/12312" className={classes.navLink}>
        <CardMedia
          className={classes.media}
          image={img}
          title="items"
        />
        <CardContent className={classes.cardContent}>
          <Typography component={'div'} variant="button" gutterBottom>
              Cho thuê 1 phòng trọ tại K544/16 Đường 2/9 Quận Hải Châu (chỉ nữ)
          </Typography>
          <Typography component={'div'} variant="body1" color="textSecondary">
            2.500.000 VND
          </Typography>
          <Typography component={'div'} variant="body1" color="textSecondary">
            Không chung chủ
          </Typography>
        </CardContent>
      </NavLink>
      {/* <CardActions disableSpacing className="card-item__card--action">
        <IconButton>
          <SvgLoveIcons />
        </IconButton>
        <p className={classes.textStyles}>Yêu thích</p>
      </CardActions> */}
        <IconButton className={classes.iconWrapper}>
          <SvgLoveIcons/>
        </IconButton>
    </Card>

  );
}
